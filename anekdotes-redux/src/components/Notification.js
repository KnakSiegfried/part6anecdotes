import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  console.log("Notification")

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToTrops = (state) => {
  return{
    notification: state.notification.notification
  }

}

export default connect(mapStateToTrops)(Notification)
