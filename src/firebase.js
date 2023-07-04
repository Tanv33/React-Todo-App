import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: "AIzaSyCqifGo_f5hwguU7GS8c3qH5TAT1_E1nhA",
  // authDomain: "todo-react-860c9.firebaseapp.com",
  // projectId: "todo-react-860c9",
  apiKey: "AIzaSyDwS-6Ov04A7Go2IuOp21SoLbelQs3crr0",
  authDomain: "todo-app-66c53.firebaseapp.com",
  databaseURL: "https://todo-app-66c53-default-rtdb.firebaseio.com",
  projectId: "todo-app-66c53",
  storageBucket: "todo-app-66c53.appspot.com",
  messagingSenderId: "11578251692",
  appId: "1:11578251692:web:f6077a340ad781455f4209",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
