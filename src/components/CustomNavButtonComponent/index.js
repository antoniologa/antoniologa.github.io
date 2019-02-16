import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './styles.css'

const CustomNavButtonComponent = ({text, to}) => <Link className="nav-link"  to={to}>{text}</Link>

CustomNavButtonComponent.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
}

CustomNavButtonComponent.defaultProps = {
  text: 'undefined',
  to: '/'
}

export default CustomNavButtonComponent

