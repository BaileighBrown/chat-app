// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLBEYICYJYqZ7OuJ3bEe_mU_lQA-k8r3Q",
  authDomain: "chat-db150.firebaseapp.com",
  projectId: "chat-db150",
  storageBucket: "chat-db150.appspot.com",
  messagingSenderId: "783582756461",
  appId: "1:783582756461:web:14675a97e09c3cc86c4964",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()