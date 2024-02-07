import { connect } from 'react-redux'
import Form from '../../../components/formComponents/Form'
import AuthInput from '../../../components/formComponents/AuthInput'

import { adminModal, loginModal } from '../../../utils/redux/actions/modalActions'

import api from '../../../utils/api'
import React from 'react'

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.onclick = e => {
            e.target.id === 'logister-overlay' && this.props.loginModal({})
        }
    }
    componentDidUpdate() {
        window.onclick = e => {
            e.target.id === 'logister-overlay' && this.props.loginModal({})
        }
    }

    adminLogin = async event => {
        event.preventDefault()
        let user = {
            email: this.props.auth.email,
            password: this.props.auth.password,
        }
        return await api.submitAdmin(user) 
    }

    render() {
        return (
            <>
                <div className='admin-container'>
                    <div className='admin-header-container'>
                        <header className='admin-header' >ADMIN
                            <div
                                className='underline'
                                style={{ backgroundColor: this.props.modal.adminmodal ? 'crimson' : 'transparent' }}
                            ></div>
                        </header>
                        <header
                            className='admin-header'
                            onClick={this.props.adminModal}
                            style={{ cursor: this.props.modal.adminmodal && 'pointer' }}
                        >USER
                            <div className='underline' ></div>
                        </header>
                    </div>
                    <Form
                        formClass='admin-form'
                        formButtonDiv='admin-btn-div'
                        handleSubmit={this.adminLogin}
                        buttonClass='admin-form-btn'
                        buttonText='LOGIN'
                    >
                        <AuthInput
                            inputClass='admin-input'
                            name='email'
                            placeholder='enter user...'
                            labelClass='admin-label'
                            labelText='Enter User'

                        />
                        <AuthInput
                            inputClass='admin-input'
                            name='password'
                            placeholder='enter password...'
                            labelClass='admin-label'
                            labelText='Enter Password'
                        />
                    </Form>
                    <div className='error-message' >
                        <p>{this.props.auth.message}</p>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        modal: state.modal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adminModal: () => dispatch(adminModal()),
        loginModal: () => dispatch(loginModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)