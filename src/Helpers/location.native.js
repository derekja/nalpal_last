
export function getCurrentLocation(onSuccess, onFail) {
	navigator.geolocation.getCurrentPosition((position) => {
    const location = {
    	latitude: position.coords.latitude,
    	longitude: position.coords.longitude
    }
    onSuccess(location)

	}, (err) => {

    onFail(err);

	}, { enableHighAccuracy: true, timeout: 4000, maximumAge: 3600000 })

}