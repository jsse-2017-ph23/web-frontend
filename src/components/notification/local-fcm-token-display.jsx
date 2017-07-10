import * as React from 'react'
import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

export class LocalFcmTokenDisplay extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      token: null
    }
  }

  async componentWillMount() {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.ready
      const token = await messaging.getToken()
      this.setState({
        token: token ? token.slice(0, 10) + '...' : ''
      })
    }
  }

  render() {
    const {token} = this.state
    if (!token) {
      return <div>Loading local FCM Token.</div>
    }
    return <div>Local FCM Token: {token}</div>
  }
}
