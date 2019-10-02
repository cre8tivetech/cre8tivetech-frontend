let firebaseConfig = {
    apiKey: process.env.GATSBY_REACT_APP_API_KEY,
    authDomain: process.env.GATSBY_REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_REACT_APP_DATABASE_URL,
    projectId: process.env.GATSBY_REACT_APP_PROJECT_ID,
    storageBucket: process.env.GATSBY_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_REACT_APP_APP_ID
  };
  

// This function creates the Firebase singleton for the app
let firebaseInstance
export default firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  const defaultFirebase = firebase.default

  // Initialize Firebase
  defaultFirebase.initializeApp(firebaseConfig)
  firebaseInstance = defaultFirebase

  return defaultFirebase
}