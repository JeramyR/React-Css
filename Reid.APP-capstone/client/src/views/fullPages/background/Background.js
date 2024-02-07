import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import blue from '../../../assets/images/blue.jpg'

import api from '../../../utils/api'

const Background = props => {
    const logout = async event => {
        event.preventDefault()
        return await api.submitLogout()
    }
    return (
        <>
            <div
                className='drop-menu'
                style={{
                    top: props.nav.hamburger ? '0px' : '-120px',
                    height: props.nav.hamburger ? '105px' : '0px',
                    borderTop: props.nav.hamburger ? 'solid grey 2px' : 'none',
                    zIndex: props.nav.hamburger ? '1' : '-3',
                    display: props.modal.deletemodal ? 'none' : 'block'
                }}
            >
                <div className='hamburger-tabs'>
                    <NavLink
                        className='background-tabs'
                        to='/'>Home
                    </NavLink>
                    <NavLink
                        className='background-tabs'
                        to='/sales'>View
                    </NavLink>
                    <NavLink
                        className='background-tabs'
                        to='/profile'>{props.app.user.firstName}
                    </NavLink>

                    <button
                        className='hamburger-logout'
                        onClick={logout}
                    >Logout</button>
                </div>
            </div>
            <img
                className='background-image'
                atl='One little weenie dog!'
                src={blue}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        app: state.app,
        modal: state.modal,
        nav: state.nav,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)