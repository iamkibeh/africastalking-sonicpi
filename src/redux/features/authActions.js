// get user using auth.onAuthStateChanged method from firebase

import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../firebase/firebase'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        unsubscribe()
        // resolve(user)
        fetchUserData(user, resolve)
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const fetchUserData = async (user, resolve) => {
  const db = getFirestore()
  const usersCollectionRef = collection(db, 'users')
  const userQuery = query(usersCollectionRef, where('userId', '==', user.uid))

  try {
    const querySnapshot = await getDocs(userQuery)
    if (!querySnapshot.empty) {
      // User data found
      const userData = querySnapshot.docs[0].data()
      resolve(userData)
    } else {
      // User data not found
      console.log('User data not found')
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

export const getUserAsync = createAsyncThunk('auth/getUserAsync', async () => {
  const response = await getUser()
  return response
})
