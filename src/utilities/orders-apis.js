import sendRequest from './send-request';

const BASE_URL = '/api/orders'

export async function getAllOrders(){
  return sendRequest(BASE_URL)
}

export async function createNewOrder(orderData){
  return sendRequest(`${BASE_URL}`, 'POST', orderData)
}

export async function getOrder(id){
  return sendRequest(`${BASE_URL}/${id}`)
}

export async function updateOrder(){
  return sendRequest(BASE_URL)
}

export async function getAllCategories(){
  return sendRequest(`${BASE_URL}/categories`)
}

