import sendRequest from './send-request';

const BASE_URL = '/api/users'; 

export async function signUp(userData){
  return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials){
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function getAllUsers(){
  return sendRequest(`${BASE_URL}/index`)
}

export async function getUser(userId){
  return sendRequest(`${BASE_URL}/${userId}`)
}

export async function addFriend(friendId, userId){
  return sendRequest(`${BASE_URL}/${userId}/addfriend`, 'PUT', {friendId, userId})
}

export async function removeFriend(friendId, userId){
  return sendRequest(`${BASE_URL}/${userId}/rmfriend`, 'PUT', {friendId, userId})
}

