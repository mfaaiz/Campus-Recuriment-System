// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBaKsMQ3Ev2Pn4FpJtqRDo-IEj-C8IWWbc",
    authDomain: "campus-recuriment-system-946cf.firebaseapp.com",
    databaseURL: "https://campus-recuriment-system-946cf.firebaseio.com",
    projectId: "campus-recuriment-system-946cf",
    storageBucket: "campus-recuriment-system-946cf.appspot.com",
    messagingSenderId: "583186821497"
  },    
  firebaseConfig : {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
