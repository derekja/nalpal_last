import {AsyncStorage} from "react-native"

export async function storeLoginInfo(username, password) {
	try {
	  await AsyncStorage.multiSet([['username', username], ['password', password]]);
	} catch (error) {
		throw error("error saving data")
	}
}

export async function fetchLoginInfo() {
	try {
	  const value = await AsyncStorage.multiGet(['username', 'password']);
	  let loginInfo = {}
	  if (value !== null){
	  	loginInfo = {
	  		username: value[0][1],
	  		password: value[1][1]
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
	  await AsyncStorage.multiRemove(['username', 'password']);
	} catch (error) {
		throw error("error deleting data")
	}
}

export async function fetchDefaultMessage() {
	try {
	  	const defaultMessage = await AsyncStorage.getItem('defaultMessage')
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
		await AsyncStorage.setItem('defaultMessage', message)
	} catch (error) {
		throw error("error saving data")
	}
}