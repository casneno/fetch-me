import sendRequest from './send-request';

const BASE_URL = '/api/friends'

export async function getAllUsers(){
  return sendRequest(BASE_URL)
}