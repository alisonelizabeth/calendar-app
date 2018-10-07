import { connect } from 'react-redux'
import Week from '../components/Week'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import lodash from 'lodash'

const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6]

const getWeeks = (year, month) => {
  const startDate = moment([year, month - 1]),
    firstDay = moment(startDate).startOf('month'),
    endDay = moment(startDate).endOf('month'),
    firstDayOfWeek = moment(firstDay).day() || 0,
    lastDayOfWeek = moment(endDay).day(),
    daysInMonth = moment(startDate).daysInMonth()

  // validate month & year
  if (lodash.isNaN(year) || lodash.isNaN(month) || month < 1 || month > 12 || year < 2015 || year > 2020) {
    return window.location.replace(`/calendar/${moment().year()}/${moment().month()}`)
  }

  const used = firstDayOfWeek + daysInMonth
  let daysInMonthArray = [...Array(daysInMonth + 1).keys()].splice(1)
  const weeks = Math.ceil(used / 7)

  let calendar = []
  let blankDays = []
  
  for (let i = 0; i < weeks; i++) {
    calendar.push(WEEKDAYS)
  }

  for (let blankDayIndex = 0; blankDayIndex <= (7 - (7 - (firstDayOfWeek - 1))); blankDayIndex++) {
    blankDays.push(null)
  }

  daysInMonthArray = blankDays.concat(daysInMonthArray)

  // calculate weeks in month based on day of week month starts
  calendar = calendar.map((week, index) => {
    const weekAdjusted = week.map(day => {
      if (index === 0) { // first week
        if (day < firstDayOfWeek) {
          return null
        }
        return {
          dayofWeek: day
        }
      }
      if (index === calendar.length - 1) { // last week
        if (day > lastDayOfWeek) {
          return null
        }
        return {
          dayofWeek: day
        }
      }
      return {
        dayofWeek: day
      }
    })
    return weekAdjusted
  })

  const flattenedCalendar = lodash.flatten(calendar)

  // add date object to calendar array
  return flattenedCalendar.map((calendarItem, i) => {
    daysInMonthArray.forEach((date, dateIndex) => {
      if (date && calendarItem && i === dateIndex) {
        calendarItem.date = moment([year, month - 1, date])
      }
    })
    return calendarItem
  })
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps
  return {
    weeks: getWeeks(Number(match.params.year), Number(match.params.month)),
    events: state.calendar.events
  }
}

export default withRouter(connect(
  mapStateToProps
)(Week))
