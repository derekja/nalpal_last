
import {apiURL} from "./requestHelpers";

type GetStatusResponse = Array<EmergencyResponder>;

type EmergencyResponder = {
	id: number,
    responderMobile: string,
    requestorMobile: string,
    estimatedTime: string,
    status: string
}

export async function getStatus(mobile: string):Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/request-status?mobile=" + mobile, {
	  method: 'Get',
	  mode: 'cors',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	});
    let responseJson: GetStatusResponse = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}