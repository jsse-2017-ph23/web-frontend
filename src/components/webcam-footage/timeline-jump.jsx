import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'

const mapStateToProps = state => ({

})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps)
export class TimelineJump extends React.Component {
  render() {
    return null
  }
}
