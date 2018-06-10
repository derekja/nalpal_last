import {apiURL} from "./requestHelpers";

export async function postRegisterUser(username: string, email: string, mobile: string, password: string):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/userservice/registerUser", {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "userName": username,
      "email": email,
      "mobile": mobile,
      "password": password
    }),
  });
    let responseJson = await response.json();
    if(response.ok) {
      return responseJson;
    } else if (!responseJson.message) {
      throw new Error("Something went wrong")
    } else {
      throw new Error(responseJson.message)
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postLogin(username: string, password: string):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/userservice/login", {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
  });
    let responseJson = await response.json();
    if(response.ok) {
      return responseJson;
    } else if (!responseJson.message) {
      throw new Error("Something went wrong")
    } else {
      throw new Error(responseJson.message)
    }
  } catch (error) {
    throw new Error(error.message);
  }
}