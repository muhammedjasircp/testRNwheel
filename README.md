# react-native-template-wheel

## Development Setup

1. Configure your machine for React Native development by following the [official documentation](https://reactnative.dev/docs/environment-setup).
1. Clone the [react-native-template-wheel](https://github.com/bigbinary/react-native-template-wheel) repo.

```bash
git clone https://github.com/bigbinary/react-native-template-wheel.git
```

3. Navigate to the project directory.

```bash
cd react-native-template-wheel
```

4. Install project dependencies.

```bash
yarn
```

5. Install iOS dependencies.

```bash
  yarn pod-install
```

## Running the app

1. To run the Android or iOS version of the app.

```bash
yarn android:dev # Android
yarn ios:dev # iOS
# List of available commands :
yarn android:staging
# debug build of android with staging environment configuration
yarn android:staging-release
# release build of android with staging environment configuration
yarn android:dev
# debug build of android with development environment configuration
yarn android:dev-release
# release build of android with development environment configuration
yarn android:prod
# debug build of android with production environment configuration
yarn android:prod-release
# release build of android with production environment configuration
yarn ios:dev
# ios build with development environment configuration
yarn ios:staging
# ios build with staging environment configuration
yarn ios:prod
# ios build with production environment configuration
```
