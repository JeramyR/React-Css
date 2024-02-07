import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = props => {
    return (
        <>
            {//change ! to true
                props.auth.isAuth ? <Outlet /> : <Navigate to='/home' />
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)