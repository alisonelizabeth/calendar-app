import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions'
import Notification from '../components/Notification'
import Header from '../components/Header'
import { REQUEST_STATUS } from '../actions'
import Calendar from '../components/Calendar'

class PageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
  }

  getMainContent() {
    const { status } = this.props
    if (status === REQUEST_STATUS.IN_PROGRESS) {
      return <div className='loader' />
    }
    if (status === REQUEST_STATUS.ERROR) {
      return <Notification />
    }
    return (
      <Calendar />
    )
  }

  render () {
    return (
      <div>
        <Header />
        {this.getMainContent()}
      </div>
    )
  }
}

PageContainer.propTypes = {
  fetchEvents: PropTypes.func,
  status: PropTypes.string
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

const mapStateToProps = props => {
  return {
    status: props.calendar.status,
    error: props.calendar.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
