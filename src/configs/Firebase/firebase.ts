// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCur-N06wIdJd2h7jlcuqdtQu-zHOASxJE',
  authDomain: 'uniqlo-56c3f.firebaseapp.com',
  projectId: 'uniqlo-56c3f',
  storageBucket: 'uniqlo-56c3f.appspot.com',
  messagingSenderId: '627008822051',
  appId: '1:627008822051:web:28cde71b14d0817e65ca96',
  measurementId: 'G-W2YXZQQ97K'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const imageDb = getStorage(app)
