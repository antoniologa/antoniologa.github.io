import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ToolbarComponent = ({text}) => <button>{text}</button>

ToolbarComponent.propTypes = {
  text: PropTypes.string
}

ToolbarComponent.defaultProps = {
  text: 'undefined'
}

export default ToolbarComponent
