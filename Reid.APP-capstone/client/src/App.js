import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './components/routeComponents/PrivateRoute'
import PublicRoute from './components/routeComponents/PublicRoute'

import Background from './views/fullPages/background/Background'
import Home from './views/fullPages/home/Home'
import UserLanding from './views/fullPages/home/userlanding/UserLanding'
import Profile from './views/fullPages/profile/Profile'


import Adminlanding from './views/fullPages/adminLanding/Adminlanding'

import Navbar from './views/partialViews/navbar/Navbar'
import Footer from './views/partialViews/footer/Footer'

import Logister from './views/modals/logister/Logister'
import Phone from './views/modals/Easter/Phone'

class App extends React.Component {

  constructor(props) {
    super(props)

  }
  render() {
    return (
      <>
        <Navbar />
        <Background />
        <Logister />
        <Phone />

        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/home' element={
            <Home />
          
            } />
          </Route>
          <Route element={<PrivateRoute />}>
            {
              this.props.auth.admin ?
                <Route path='/' element={<Adminlanding />} />
                :
                <>
                  <Route index path='/' element={<Home />} />
                  <Route path='sales' element={<UserLanding />} />
                  <Route path='profile' element={<Profile />} />
                </>
            }
          </Route>
        </Routes>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)