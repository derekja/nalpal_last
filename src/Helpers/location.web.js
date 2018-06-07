
export function getCurrentLocation(onSuccess) {
	navigator.geolocation.getCurrentPosition((position) => {
		const location = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		}
		onSuccess(location)
	})
}