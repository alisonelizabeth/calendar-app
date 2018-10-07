import '../scss/weeks.scss'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Week = ({ weeks, events }) => (
  <div className='cell-container'>
    {weeks.map((week, index) => {
      if (!week) {
        return <div className='cell' key={`week-${index}`}/>
      }
      return (
        <div className='cell' key={`week-${index}`}>
            <div className='number'>{moment(week.date).format('D')}</div>
            {events[moment(week.date).format('YYYY-MM-DD')] &&
            <div className='event'>{events[moment(week.date).format('YYYY-MM-DD')].title}</div>}
        </div>
      )
    })}
  </div>
)

Week.propTypes = {
  weeks: PropTypes.array,
  events: PropTypes.object
}

export default Week
