
export function getCurrentLocation(onSuccess) {
	console.log("gettingPosition")
	navigator.geolocation.getCurrentPosition((position) => {
		console.log(position);
		const location = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		}
		onSuccess(location)
	})
}