import '../scss/notification.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ type, title, description }) => (
  <div className='notification container'>
    An error occurred. Please try again.
  </div>
)

Notification.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string
}

export default Notification
