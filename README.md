# react-native-template-wheel
## This repo contains code for the mobile application setup.

### Installation
yarn install
#### Extra installation steps for iOS
- Install cocoapods using `gem install cocoapods`

- cd ios && pod install
#### Running
- yarn ios:dev # or yarn android:dev # for development

- yarn ios:staging # or yarn android:staging # for staging

- yarn ios:prod # yarn android:prod # for production

### Opening project in xcode
- To run from xcode, select ./ios/wheel.xcworkspace from finder

### Creating a debug-apk
- yarn android:dev-release # for dev data.
- yarn android:staging-release # for staging release

#### Then, you will get the apk inside this folder android/app/build/outputs/apk/debug.
