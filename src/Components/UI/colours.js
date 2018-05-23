export const colours = {
	primary: "#00665A",
	navInactive: "#CBDFDD",
	navActive: "#FFFFFF",
	black: "#000000",
	emergency: "#FF6E00",
	lightBlue: "#B0DEDA"
}

export const avatarColours = ["#1C73AE", "#F15F22", "#3CB878", "#00AEEF", "#F26D7D"]

export const generateAvatarColour = (key) => {
	const number = key % 5;
	const color = avatarColours[number];
	return (color);
}