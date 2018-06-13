import indexOf from "lodash/indexOf"

export function validateForm(fields: Array) { 
	let hasErrors = false
	fields.forEach((field) => {
		let error = null
		if (hasRequirement(field.validations, "required")) {
			error = checkRequiredError(field.value)
		}
		if (!error && hasRequirement(field.validations, "email")){
			error = checkEmailError(field.value)
		}
		if (!error && hasRequirement(field.validations, "phonenumber")) {
			error = checkPhoneNumberError(field.value)
		}
		if (!error && hasRequirement(field.validations, "password")) {
			error = checkPasswordError(field.value)
		}
		field.error = error
		if(error) {
			hasErrors = true
		}
	})
	return {hasErrors: hasErrors, validatedFields: fields }
}

function hasRequirement(validations, requirement) {
	return (indexOf(validations, requirement) > -1)
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhonenumber(phonenumber) {
	const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phonenumber);
}

function checkPhoneNumberError(value) {

	if(validatePhonenumber(value)){
		return null
	} else {
		return "Valid phone number required"
	}
}

function checkEmailError(value) {

	if(validateEmail(value)){
		return null
	} else {
		return "Valid email required"
	}
}

function checkRequiredError(value) {
	if(value === null || value === "") {
		return "Required"
	} else {
		return null
	}
}

function checkPasswordError(value) {
		console.log(value.length > 7)
	if(value.length > 7) {
		return null
	} else {
		return "Password must be atleast 8 characters"
	}
}
