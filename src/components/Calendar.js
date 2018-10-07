import '../scss/calendar.scss'
import React from 'react'
import Days from './Days'
import Month from '../containers/MonthContainer'
import Weeks from '../containers/WeeksContainer'

const Calendar = () => 
  <div className='container calendar'>
    <Month />
    <Days />
    <Weeks />
  </div>

export default Calendar
