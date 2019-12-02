import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { secrets } from './config'

let db

export function initializeFirebase(userAuthCallback) {
  firebase.initializeApp(secrets)
  db = firebase.database()
  firebase.auth().onAuthStateChanged(userAuthCallback)
}

/**
 * CRUD Access via RESTfull API Only
 */

export async function subscribe(path, callBack) {
  function enrichCallback(snapshot) {
    const timestamp = new Date().getTime()
    const data = snapshot.val()
    const response = { data, timestamp, path }
    callBack(response)
  }
  const listenerReference = db.ref(path).on('value', enrichCallback)
  return listenerReference
}

export async function unsubscribe(path) {
  db.ref(path).off()
}
