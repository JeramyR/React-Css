import { connect } from 'react-redux'

import Navlinks from './navlinks/Navlinks'
import Hamburger from './hamburger/Hamburger'


const Navbar = props => {

    return (
        <>
            <nav className='nav-base-layer'>
                <Navlinks />
            </nav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        nav: state.nav,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)