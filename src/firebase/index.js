import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import { secrets } from './config'

export function initializeFirebase(userAuthCallback) {
  firebase.initializeApp(secrets)
  firebase.database()
  firebase.auth().onAuthStateChanged(userAuthCallback)
}

/**
 * CRUD Access via RESTfull API Only
 */
