import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = props => {
    return (
        <>
            {//change ! to true
                props.auth.isAuth ? <Navigate to='/' /> : <Outlet /> 
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, null)(PublicRoute)