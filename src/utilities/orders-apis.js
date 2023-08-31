import sendRequest from './send-request';

const BASE_URL = '/api/orders'

export async function getUserOrders(userId){
  return sendRequest(`${BASE_URL}/user/${userId}`)
}

export async function createNewOrder(orderData){
  return sendRequest(`${BASE_URL}`, 'POST', orderData)
}

export async function getOrder(orderId){
  return sendRequest(`${BASE_URL}/${orderId}`)
}

export async function addColab(orderId, colabId){
  return sendRequest(`${BASE_URL}/${orderId}/addcolab`, 'PUT', {orderId, colabId})
}

export async function removeColab(orderId, colabId){
  return sendRequest(`${BASE_URL}/${orderId}/rmcolab`, 'PUT', {orderId, colabId})
}

export async function addItemToOrder(orderId, itemId){
  return sendRequest(`${BASE_URL}/${orderId}`, 'PUT', {orderId, itemId})
}

export async function getAllCategories(){
  return sendRequest(`${BASE_URL}/categories`)
}

export function setItemQuantity(orderId, itemId, newQty) {
  return sendRequest(`${BASE_URL}/order/qty`, 'PUT', { orderId, itemId, newQty });
}
