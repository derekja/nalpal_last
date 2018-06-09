
export async function storeLoginInfo(username, password) {
	try {
		localStorage.setItem('username', username)
		localStorage.setItem('password', password)
	} catch (error) {
		throw error("error saving data")
	}
}

export async function fetchLoginInfo() {
	try {
		const username = localStorage.getItem('username')
		const password = localStorage.getItem('password')
	  	let loginInfo = {}
	  if (username !== null && password !== null){
	  	loginInfo = {
	  		username: username,
	  		password: password
	  	}
	    return loginInfo
	  } else {
	  	throw new Error("unable to fetch login info")
	  }
	} catch (error) {
		throw error("unable to fetch login info")
	}
}

export async function clearLoginInfo() {
	try {
		localStorage.removeItem('username')
		localStorage.removeItem('password')
		return(true)
	} catch (error) {
		throw error("error deleting data")
	}
}

export async function fetchDefaultMessage() {
	try {
	  	const defaultMessage = localStorage.getItem('defaultMessage')
	    if (defaultMessage !== null){
	      return defaultMessage
	    } else {
	    	throw new Error("unable to fetch defaultMessage")
	    }
	} catch (error) {
		console.log("unable to fetch defaultMessage")
	}
}

export async function storeDefaultMessage(message) {
	try {
		localStorage.setItem('defaultMessage', message)
	} catch (error) {
		throw error("error saving data")
	}
}