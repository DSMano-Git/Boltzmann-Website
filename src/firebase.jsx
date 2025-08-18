import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN4aozpjya1-IPcXW60t1NxLu7bUUfmVU",
  authDomain: "boltzmann-admin.firebaseapp.com",
  projectId: "boltzmann-admin",
  storageBucket: "boltzmann-admin.appspot.com",
  messagingSenderId: "1023878106371",
  appId: "1:1023878106371:web:bbe53083ddf3a1d1c1ad36"
};

const app = initializeApp(firebaseConfig);

// ✅ only initialize analytics if the environment supports it
let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
