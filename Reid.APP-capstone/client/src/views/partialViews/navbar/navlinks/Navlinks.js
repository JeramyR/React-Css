import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import api from '../../../../utils/api'

import { loginModal } from '../../../../utils/redux/actions/modalActions'
import { homeTab, profileTab, sellTab } from '../../../../utils/redux/actions/navActions'

import Hamburger from '../hamburger/Hamburger'

class Navlinks extends React.Component {
    constructor(props) {
        super(props)
        this.lineRef = React.createRef()
    }
    componentDidMount() {
        this.thisWillwork()
    }
    componentDidUpdate() {
        this.thisWillwork()
    }

    thisWillwork = () => {
        let tab1 = this.lineRef.current

        if (this.props.auth.isAuth) {
            if (this.props.nav.hometab) {
                tab1.style.height = '5px'
                tab1.style.width = '85px'
                tab1.style.position = 'fixed'
                tab1.style.backgroundColor = 'rgb(10, 255, 100)'
                tab1.style.left = '0px'
                tab1.style.top = '45px'
            }
            if (this.props.nav.selltab) {
                tab1.style.height = '5px'
                tab1.style.width = '85px'
                tab1.style.position = 'fixed'
                tab1.style.backgroundColor = 'rgb(10, 255, 184)'
                tab1.style.left = '85px'
                tab1.style.top = '45px'
            }
            if (this.props.nav.profiletab) {
                tab1.style.height = '5px'
                tab1.style.width = '84px'
                tab1.style.position = 'fixed'
                tab1.style.backgroundColor = 'rgb(10, 255, 254)'
                tab1.style.left = '171px'
                tab1.style.top = '45px'
            }
        }
    }

    logout = async event => {
        event.preventDefault()
        return await api.submitLogout()
    }

    render() {
        return (
            <>
                <div className='navlink-container'>
                    {
                        !this.props.auth.isAuth ?
                            <>
                                <div className='navlink-tab-container'></div>
                                <div className='navlink-cart-log'>
                                    <button
                                        className='log-button'
                                        onClick={this.props.loginModal}
                                    >LOGIN</button>
                                </div>

                                {/* <button
                                    className='logout-button'
                                    onClick={this.logout}
                                >LOGOUT</button> */}
                            </>
                            :
                            <>
                                <div className='navlink-tabs-container'>
                                    <NavLink
                                        onClick={this.props.homeTab}
                                        className='nav-links'
                                        to='/'>Home
                                    </NavLink>
                                    {
                                        !this.props.auth.admin &&
                                        <>
                                            <NavLink
                                                onClick={this.props.sellTab}
                                                className='nav-links'
                                                to='/sales'>View
                                            </NavLink>
                                            <NavLink
                                                onClick={this.props.profileTab}
                                                className='nav-links'
                                                to='/profile'>{this.props.app.user.firstName}
                                            </NavLink>
                                        </>
                                    }
                                    <div
                                        className='line'
                                        ref={this.lineRef}
                                    ></div>
                                </div>

                                <div className='navlink-cart-log'>
                                    {
                                        !this.props.auth.admin &&
                                        <NavLink
                                            className='navlink-cart'
                                            to='/cart'>
                                        </NavLink>
                                    }
                                    <button
                                        className='logout-button'
                                        onClick={this.logout}
                                    >LOGOUT</button>
                                </div>
                                
                                {/* mobile menu */}
                                <div className='mobile-nav-container' >
                                    <Hamburger />
                                </div>
                            </>
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        app: state.app,
        auth: state.auth,
        modal: state.modal,
        nav: state.nav,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginModal: () => dispatch(loginModal()),
        homeTab: () => dispatch(homeTab()),
        sellTab: () => dispatch(sellTab()),
        profileTab: () => dispatch(profileTab())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navlinks)