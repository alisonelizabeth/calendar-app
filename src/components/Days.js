import '../scss/days.scss'
import React from 'react'

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const Days = () => (
  <div className='days-container'>
    {DAY_NAMES.map((day, index) => {
      return (
        <div key={`${day}-${index}`} className='day'>
          <span>{day}</span>
        </div>
      )
    })}
  </div>
)

export default Days
