const apiURL = "https://maps.googleapis.com/maps/api"

const geocodeApi = "/geocode/json"
const distanceMatrixApi = "/distancematrix/json"

const googleApiKey = "AIzaSyA7yHY-qcFGvp3PUuPgqTlftPYOknKA270"

export async function fetchDistance(origin, destination){
	console.log("fetching distance")
	let originString = origin.latitude + "," + origin.longitude
	let destinationString = destination.latitude + "," + destination.longitude
  try {
    let response = await fetch(apiURL + distanceMatrixApi + 
    							"?units=metric&origins=" + originString +
    							"&destinations=" + destinationString + 
    							"&key=" + googleApiKey,
	    {
	    method: 'GET',
	    mode: 'cors',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }
  	});
    let responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson.message)
    } 
    return responseJson.rows[0].elements[0].distance.text;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchAddress(location){
	let locationString = location.latitude + "," + location.longitude
  try {
    let response = await fetch(apiURL + geocodeApi + 
    							"?units=metric&latlng=" + locationString +
    							"&key=" + googleApiKey,
	    {
	    method: 'GET',
	    mode: 'cors',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }
  	});
    let responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson.message)
    } 
    const addressComponents = responseJson.results[0].address_components
    const formattedAddress = addressComponents[0].short_name + " " + 
							addressComponents[1].short_name + ", " + 
							addressComponents[3].short_name + ", " +
							addressComponents[5].short_name
	return(formattedAddress)
  } catch (error) {
    throw new Error(error.message);
  }
}