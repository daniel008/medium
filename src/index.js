import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import TopBar from 'component/topbar'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
