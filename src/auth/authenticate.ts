import {firebase } from "../db/firebase";
export async function authenticate(username: string, password: string) {
  const FB = new firebase("users");
  
  const userData = await FB.checkIfDocumentExists("username", username);
  if(userData && userData.password === password) {
    return true
  } else {
    return false
  }
}