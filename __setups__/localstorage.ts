import 'jest-localstorage-mock';

// const localStorageMock = (function () {
//   let store = {};
//   return {
//     getItem: function (key: string | number) {
//       return store[key];
//     },
//     setItem: function (key: string | number, value: { toString: () => any }) {
//       store[key] = value.toString();
//     },
//     clear: function () {
//       store = {};
//     },
//     removeItem: function (key: string | number) {
//       delete store[key];
//     }
//   };
// })();
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });
