import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Settings from '../components/Settings'
import * as SettingsActions from '../actions/settings'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)