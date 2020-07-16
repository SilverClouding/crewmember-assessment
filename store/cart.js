import localforage from 'localforage'
import { uuid } from 'uuidv4'

export const state = () => ({
  lineItems: [],
  cartVisible: false,
  error: null
})
export const getters = {
  quantityTotal(state) {
    if (state.lineItems.length >= 1) {
      return state.lineItems.reduce((acc, item) => acc + item.quantity, 0)
    }

    return 0
  },

  cartSubtotal(state) {
    if (state.lineItems.length >= 1) {
      return state.lineItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    }

    return 0
  }
}

export const mutations = {
  addLineItemMutation(state, payload) {
    const index = state.lineItems.findIndex((lineItem) => {
      if (lineItem.productId === payload.productId) {
        return true;
      }
    })
    if (index === -1) {
      // generate unique id for line
      payload.id = `${payload.productId}::${uuid()}`
      state.lineItems.push(payload)
    } else {
      state.lineItems[index].quantity += payload.quantity
    }
  },

  removeLineItemMutation(state, payload) {
    const index = state.lineItems.findIndex(
      lineItem => lineItem.id === payload
    )
    state.lineItems.splice(index, 1)
  },

  incrementLineItemMutation(state, payload) {
    const index = state.lineItems.findIndex(
      lineItem => lineItem.id === payload
    )
    if (index !== -1) {
      state.lineItems[index].quantity++
    }
  },

  decrementLineItemMutation(state, payload) {
    const index = state.lineItems.findIndex(
      lineItem => lineItem.id === payload
    )
    if (index !== -1 && state.lineItems[index].quantity >= 1) {
      state.lineItems[index].quantity--
      if (state.lineItems[index].quantity === 0) {
        state.lineItems.splice(index, 1)
      }
    }
  },

  setLineItems(state, payload) {
    state.lineItems.splice(0)
    state.lineItems = payload
  },

  showCart(state) {
    state.cartVisible = true
  },

  hideCart(state) {
    state.cartVisible = false
  },

  setCartError(state, error) {
    state.error = error
  }
}

export const actions = {
  async addLineItem(context, payload) {
    context.commit('addLineItemMutation', payload)
    context.dispatch('saveLineItems', context.state.lineItems)
    // context.commit('showCart')
    if (context.rootState.events) {
      context.dispatch(
        'events/selectProduct',
        {
          product: payload,
          cart: context.state.lineItems
        },
        { root: true }
      )
    }
  },

  async removeLineItem({ state, rootState, dispatch, commit }, payload) {
    if (rootState.events) {
      const lineItem = state.lineItems.find(
        item => item.productId === payload
      )
      dispatch(
        'events/removeProduct',
        {
          product: lineItem,
          cart: state.lineItems
        },
        { root: true }
      )
    }

    commit('removeLineItemMutation', payload)
    dispatch('saveLineItems', state.lineItems)
  },

  async incrementLineItem(context, payload) {
    context.commit('incrementLineItemMutation', payload)
    context.dispatch('saveLineItems', context.state.lineItems)
  },

  async decrementLineItem(context, payload) {
    context.commit('decrementLineItemMutation', payload)
    context.dispatch('saveLineItems', context.state.lineItems)
  },

  async saveLineItems(context) {
    localforage.setItem('line-items', context.state.lineItems)
  },

  async getLineItems(context) {
    const lineItems = await localforage.getItem('line-items')
    if (lineItems != null) {
      context.commit('setLineItems', lineItems)
    }
  },

  async updateLocalCart(context) {
    await context.dispatch('getLineItems')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
