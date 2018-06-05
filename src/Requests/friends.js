import {apiURL} from "./requestHelpers";

export async function postAddFriend(username: string, email: string, mobile: string, id: string):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/friendService/addfriend", {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": username,
      "email": email,
      "mobile": mobile,
      "id": id
    }),
  });
    let responseJson = await response.json();
    if (!responseJson.ok) {
      throw new Error(responseJson.message)
    }
    return responseJson;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postVerifyFriendRequest(requesterID, responderID):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/friendservice/verifyFriend", {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "requesterID": requesterID,
        "responderID": responderID
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getFriends(id: string):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/friendservice/listFriends/" + id, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getPendingRequests(id: string):Promise<any> {

  try {
    let response: any = await fetch(apiURL + "/friendservice/listPendingRequests/" + id, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
