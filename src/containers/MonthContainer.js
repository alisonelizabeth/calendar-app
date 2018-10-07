import { connect } from 'react-redux'
import Month from '../components/Month'
import { withRouter } from 'react-router-dom'

const getMonth = (month, year, type) => {
  const monthNum = Number(month)
  const yearNum = Number(year)
  return {
    name: type === 'prev' ? monthNum === 1 ? 12 : monthNum - 1 : monthNum === 12 ? 1 : monthNum + 1,
    year: type === 'prev' ? monthNum === 1 ? yearNum - 1 : yearNum : monthNum === 12 ? yearNum + 1 : yearNum
  }
}

const getLink = (currentMonth, year, type) => {
  const month = getMonth(currentMonth, year, type)
  return `/calendar/${month.year}/${month.name}`
}

const mapStateToProps = () => {
  return {
    getLink
  }
}

export default withRouter(connect(
  mapStateToProps
)(Month))
