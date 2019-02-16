import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles.css'

const ToolbarComponent = ({text}) => <button>{text}</button>

ToolbarComponent.propTypes = {
  text: PropTypes.string
}

ToolbarComponent.defaultProps = {
  text: 'undefined'
}

export default ToolbarComponent
