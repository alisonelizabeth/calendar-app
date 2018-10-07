import '../scss/month.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const Month = ({ match, getLink }) => (
  <div className='month-container'>
    <Link to={getLink(match.params.month, match.params.year, 'prev')}>
      <FontAwesomeIcon icon={'caret-left'} className='month-icon' title='Previous month' />
    </Link>
    <span className='month-title'>{MONTHS[match.params.month]} {match.params && match.params.year}</span>
    <Link to={getLink(match.params.month, match.params.year, 'next')}>
      <FontAwesomeIcon icon={'caret-right'} className='month-icon' title='Next month' />
    </Link>
  </div>
)

Month.propTypes = {
  match: PropTypes.object,
  getLink: PropTypes.func
}

export default Month
