# react-native-template-wheel
This project serves as a base template to bootstrap a React Native application.
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

## Axios Configuration :

### Setting default baseUrl :
1. The baseUrl can be defined in `src/api/axiosConfig.js`.
```Javascript
export const configureAxios = () => {
  axios.defaults.baseURL = `${constants.BASE_URL}`;
  registerResponseIntercept();
};
```
### Setting custom headers :
1. To set custom axios headers, first, we need to import `configureAxiosHeaders` from `src/api/axiosConfig.js` to the file where we want to set the headers.
```Javascript
export const configureAxiosHeaders = (auth_token, email) => {
  axios.defaults.headers['auth-token'] = auth_token;
  axios.defaults.headers['auth-email'] = email;
};
```
And call it on successful authentication of the user.
```Javascript
configureAxiosHeaders(auth_token, email);
```
The `configureAxiosHeaders` function can be modified as per our requirements.

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
