import { connect } from 'react-redux'
import { dropDown } from '../../../utils/redux/actions/navActions'

import Aside from './aside/Aside'
import Content from './content/Content'
import UserLanding from './userlanding/UserLanding'

const Home = props => {
    return (
        <>
            <div className='home-container'
                style={{ marginTop: props.nav.hamburger && '1em' }}
            >
                <div className='home-content'>
                    <Aside />
                    <Content />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        nav: state.nav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dropDown: () => dispatch(dropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)