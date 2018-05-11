// @flow
import {apiURL} from "./requestHelpers";

type PostRespondToEmergencyResponseType = {
	statusCode: string,
	statusDescription: string
}

export async function postRespondToEmergency(requestorMobile: string, responderMobile: string, estimatedTimeOfArrival: string): Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/respond", {
	  method: 'POST',
	  mode: 'cors',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    requestorMobile: requestorMobile,
		responderMobile: responderMobile,
		estimatedTimeOfArrival: estimatedTimeOfArrival
	  }),
	});
    let responseJson: PostRespondToEmergencyResponseType = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}