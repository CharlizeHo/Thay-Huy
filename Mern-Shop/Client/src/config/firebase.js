// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP9X1KNcv-nONK9_FAzHRtZpNQd4WzjZ8", //mỗi người mỗi key
  authDomain: "mern-shop-6deb9.firebaseapp.com",
  projectId: "mern-shop-6deb9",
  storageBucket: "mern-shop-6deb9.appspot.com",
  messagingSenderId: "855680533184",
  appId: "1:855680533184:web:6d8a706bfe32db999b2325",
  measurementId: "G-RFQBEQDPLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
