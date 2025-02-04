// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkWPODs_lzS9d1q1kAz3uAOBmYN9qe8Q4",
  authDomain: "unimar-start-devops-7f89f.firebaseapp.com",
  projectId: "unimar-start-devops-7f89f",
  storageBucket: "unimar-start-devops-7f89f.firebasestorage.app",
  messagingSenderId: "981242811108",
  appId: "1:981242811108:web:3bb2f9c01115a8dd6312f1",
  measurementId: "G-4CLGPGY1Z3"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db };