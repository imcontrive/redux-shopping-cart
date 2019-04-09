export function ascending() {
  return {
    type: 'LOW_TO_HIGH'
  }
}

export function descending() {
  return {
    type: 'HIGH_TO_LOW'
  }
}
export function select() {
  return {
    type: 'SELECT'
  }
}

export function deleteCartItem(id) {
  return {
    type: 'DELETE_CART_ITEM',
    id
  }
}