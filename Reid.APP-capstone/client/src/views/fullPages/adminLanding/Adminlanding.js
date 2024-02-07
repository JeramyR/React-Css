import { connect } from 'react-redux'
import React from 'react'

import api from '../../../utils/api'
import { openDelete } from '../../../utils/redux/actions/modalActions'
import DeleteUser from '../../modals/delete/DeleteUser'


class Adminlanding extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        api.adminLanding()
    }

    render() {
        return (
            <>
                <div className='admin-land'>
                    <h3 className='admin-h3'>ADMIN</h3>
                    <DeleteUser />
                    <div className='admin-card-container'>
                        {
                            this.props.app.userArr.map((user, id) =>
                                <div className='admin-card' key={id + 'user'}>
                                    <div className='info-div'>
                                        <div className='user-name'>
                                            <span>{`${user.firstName} `}</span>
                                            <span>{user.lastName}</span>
                                        </div>

                                        <div className='user-email'>{user.email}</div>
                                        <div className='user-since'>{user.createdAt.slice(0, 10)}</div>
                                        <div className='user-animals'>Animal Count: {user.petArr.length} </div>
                                    </div>
                                    
                                    <div className='admin-button-container'>
                                        <button className='admin-buttons suspend'>SUSPEND</button>
                                        <button className='admin-buttons delete' onClick={() => this.props.openDelete(user._id)}>DELETE</button>
                                        <button className='admin-buttons view'>VIEW</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {

    return {
        app: state.app,
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDelete: id => dispatch(openDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adminlanding)