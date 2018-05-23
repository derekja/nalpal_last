# NalPal

## Getting Started

### Prerequisites

Before running the project on either web or mobile make sure you run:

```
npm install
```

To test for mobile you will need to either setup a real device with usb debugging or an emulator. You can use Genymotion or Android studio for android (note you will need to ensure your emulator has google play services installed) or Xcode for ios. 

### Running on web

Run:

```
npm run start-web
```
Navigate to **http://localhost:3000**

### Running on android

Ensure your chosen emulator is running

Run:
```
npm run android
```
The app should open on the emulator.
For debugging help see the [react-native docs](https://facebook.github.io/react-native/docs/debugging.html)

*Note:	 If you choose to run your project from within android studio instead of using the above command, you will need to run this command first.*

```
react-native start
```

### Running on ios

(I have not tested this. This section may need to be edited)

Run:
```
npm run ios
```
