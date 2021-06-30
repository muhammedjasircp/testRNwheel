module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        root: ['.'],
        alias: require('./aliases.json'),
      },
    },
    'react-native/style-sheet-object-names': ['EStyleSheet'],
  },
};
