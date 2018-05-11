// @flow
import {apiURL} from "./requestHelpers";

type PostReportEmergencyResponseType = {
	statusCode: string,
	statusDescription: string
}

export async function postReportEmergency(mobile: string, latitude: string, longitude: string): Promise<any> {
  try {
    let response: any = await fetch(apiURL + "/report", {
	  method: 'POST',
	  mode: 'cors',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    mobile: mobile,
		lat: latitude,
		lon: longitude
	  }),
	});
    let responseJson: PostReportEmergencyResponseType = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}