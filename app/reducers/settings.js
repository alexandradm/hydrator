import { combineReducers } from 'redux'

import {
  ADD_SETTINGS,  GET_TWITTER_AUTH_URL, SET_TWITTER_AUTH_URL, UNSET_TWITTER_AUTH_URL,
  SET_TWITTER_PIN, GET_TWITTER_CREDENTIALS, SET_TWITTER_CREDENTIALS
} from '../actions/settings'

import {SET_RESET_TIME} from '../actions/dataset'


export default function settings(state = {}, action) {
  switch (action.type) {
    case ADD_SETTINGS: {
      return {
        ...state,
        twitterAccessKey: state.twitterAccessKey,
        twitterAccessSecret: state.twitterAccessSecret
      }
    }
    case SET_TWITTER_AUTH_URL: {
      return {
        ...state,
        twitterAuthUrl: action.twitterAuthUrl
      }
    }
    case UNSET_TWITTER_AUTH_URL: {
      return {
        ...state,
        twitterAuthUrl: null
      }
    }
    case SET_TWITTER_CREDENTIALS: {
      return {
        ...state,
        twitterAccessKey: action.twitterAccessKey,
        twitterAccessSecret: action.twitterAccessSecret,
        twitterAuthUrl: null
      }
    }
    case SET_RESET_TIME: {
      return {
        ...state,
        resetTime: action.resetTime
      }
    } 
    default:
      return state
  }
}