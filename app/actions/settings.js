import TwitterPinAuth from 'twitter-pin-auth'

const remote = require('electron').remote

export const ADD_SETTINGS = 'ADD_SETTINGS'
export const GET_TWITTER_AUTH_URL = 'GET_TWITTER_AUTH_URL'
export const SET_TWITTER_AUTH_URL = 'SET_TWITTER_AUTH_URL'
export const UNSET_TWITTER_AUTH_URL = 'UNSET_TWITTER_AUTH_URL'
export const SET_TWITTER_PIN = 'SET_TWITTER_PIN'
export const GET_TWITTER_CREDENTIALS = 'GET_TWITTER_CREDENTIALS'
export const SET_TWITTER_CREDENTIALS = 'SET_TWITTER_CREDENTIALS'
export const CONSK = 'J2Rx3kNtBe1NwTOffGDRtiTnx'
export const CONSS = 'guF3efhWLWrlHkMuOu7Ff4cZk1yhyfjdIjuRfjP0YKS4seRAiR'

let twitterPinAuth = new TwitterPinAuth(CONSK, CONSS)

export function getTwitterAuthUrl() {
  return function(dispatch) {
    twitterPinAuth.requestAuthUrl().
      then(function(url) {
        remote.shell.openExternal(url)
        dispatch(setTwitterAuthUrl(url))
      }).catch(function(err){ 
        console.error(err)
      })
  }
}

export function setTwitterAuthUrl(url) {
  return {
    type: SET_TWITTER_AUTH_URL,
    twitterAuthUrl: url
  }
}

export function unsetTwitterAuthUrl() {
  return {
    type: UNSET_TWITTER_AUTH_URL
  }
}

export function setTwitterPin(pin) {
  return {
    type: SET_TWITTER_PIN,
    twitterPin: pin
  }
}

export function getTwitterCredentials(pin) {
  return function(dispatch) {
    twitterPinAuth.authorize(pin)
      .then(function(credentials) {
        dispatch(setTwitterCredentials(credentials))
      }).catch(function(err) {
        console.error(err)
        dispatch(unsetTwitterAuthUrl())
      })
  }
}

export function setTwitterCredentials(credentials) {
  return {
    type: SET_TWITTER_CREDENTIALS,
    twitterAccessKey: credentials.accessTokenKey,
    twitterAccessSecret: credentials.accessTokenSecret
  }
}