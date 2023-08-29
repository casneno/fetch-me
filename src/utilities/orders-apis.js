import sendRequest from './send-request';

const BASE_URL = '/api/orders'

export async function getAllOrders(){
  return sendRequest(BASE_URL)
}

export async function createNewOrder(orderData){
  return sendRequest(`${BASE_URL}`, 'POST', orderData)
}

export async function getOrder(orderId){
  return sendRequest(`${BASE_URL}/${orderId}`)
}

export async function addItemToOrder(orderId, itemId){
  return sendRequest(`${BASE_URL}/${orderId}`, 'PUT', {orderId, itemId})
}

export async function getAllCategories(){
  return sendRequest(`${BASE_URL}/categories`)
}

