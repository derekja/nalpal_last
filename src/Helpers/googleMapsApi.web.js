export async function fetchDistance(origin, destination):Promise<any> {
	console.log("fetching distance")
	let originString = origin.latitude + "," + origin.longitude
	let destinationString = destination.latitude + "," + destination.longitude
	return new Promise(function(resolve,reject){
		var service = new window.google.maps.DistanceMatrixService();
		service.getDistanceMatrix(
			{
				origins: [originString],
			    destinations: [destinationString],
			    travelMode: 'WALKING'
			},
			(response, status) => {
				if (status === 'OK') {
					const distance = response.rows[0].elements[0].distance.text;
				    resolve(distance);
				}else {
				  // reject promise otherwise
				  reject(status);
				}
			});
	  });
}

export async function fetchAddress(location):Promise<any> {
	let loc = {
		lat: Number(location.latitude),
		lng: Number(location.longitude)
	}
	return new Promise(function(resolve,reject){
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode(
			{
				location: loc
			},
			(response, status) => {
				if (status === 'OK') {
					const addressComponents = response[0].address_components
					const formattedAddress = addressComponents[0].short_name + " " + 
											addressComponents[1].short_name + ", " + 
											addressComponents[2].short_name + ", " +
											addressComponents[5].short_name


				  	resolve(formattedAddress);
				}else {
				  // reject promise otherwise
				  reject(status);
				}
			});
	  });
}