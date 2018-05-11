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
    return responseJson;
  } catch (error) {
    console.error(error);
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
      "userName": username,
      "password": password
    }),
  });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}