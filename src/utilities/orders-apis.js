import sendRequest from './send-request';

const BASE_URL = '/api/orders'

export async function getAllOrders(){
  return sendRequest(BASE_URL)
}

export async function getOneOrder(){
  return sendRequest(BASE_URL)
}

export async function createNewOrder(orderData){
  return sendRequest(`${BASE_URL}`, 'POST', orderData)
}

export async function updateOrder(){
  return sendRequest(BASE_URL)
}