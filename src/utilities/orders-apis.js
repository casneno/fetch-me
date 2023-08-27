import sendRequest from './send-request';

const BASE_URL = '/api/orders'

export async function getAllOrders(userId){
  return sendRequest(BASE_URL, 'GET', userId)
}

export async function getOneOrder(){
  return sendRequest(BASE_URL)
}

export async function addNewOrder(userData){
  return sendRequest(BASE_URL, 'POST', userData)
}

export async function updateOrder(){
  return sendRequest(BASE_URL)
}