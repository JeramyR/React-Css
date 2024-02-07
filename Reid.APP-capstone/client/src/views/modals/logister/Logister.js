import React from 'react'
import { connect } from 'react-redux'

import logpic from '../../../assets/images/sunset.jpg'

import api from '../../../utils/api'
import { flipCard, loginModal, adminModal } from '../../../utils/redux/actions/modalActions'
import { authLoginModal, } from '../../../utils/redux/actions/authActions'

import Admin from '../admin/Admin'
import Form from '../../../components/formComponents/Form'
import AuthInput from '../../../components/formComponents/AuthInput'

class Logister extends React.Component {
    constructor(props) {
        super(props)
        this.localState = {
            akey: false,
            bkey: false,
            bothkey: false,
        }
    }

    componentDidUpdate() {
        window.onclick = event => {
            event.target.id == 'logister-overlay' && this.props.loginModal({})
            event.target.id == 'x-button' && this.props.loginModal({})
            event.target.id == 'logister-overlay' && this.props.authLoginModal({})
            event.target.id == 'x-button' && this.props.authLoginModal({})
            event.target.id === 'reg-header' && this.props.flipCard({})
            event.target.id === 'log-header' && this.props.flipCard({})
            event.target.id === 'admin-header' && this.props.adminModal({})
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            let key = e.key
            if (key === 'a') {
                this.localState.akey = true
            }
            if (key === 's') {
                this.localState.bkey = true
            }
            if (this.localState.akey && this.localState.bkey) {
                this.localState.bothkey = true
            }
        })
        document.addEventListener('keyup', e => {
            let key = e.key
            if (key === 'a') {
                this.localState.akey = false
            }
            if (key === 's') {
                this.localState.bkey = false
            }
            if (this.localState.akey || this.localState.bkey) {
                this.localState.bothkey = false
            }
        })

        window.onclick = event => {
            event.target.id == 'logister-overlay' && this.props.loginModal({})
            event.target.id == 'x-button' && this.props.loginModal({})
            event.target.id == 'logister-overlay' && this.props.authLoginModal({})
            event.target.id == 'x-button' && this.props.authLoginModal({})
            event.target.id === 'reg-header' && this.props.flipCard({})
            event.target.id === 'log-header' && this.props.flipCard({})
            event.target.id === 'admin-header' && this.props.adminModal({})
        }
    }
    register = async event => {
        event.preventDefault()
        let user = {
            pw1: this.props.auth.pw1,
            pw2: this.props.auth.pw2,
            firstName: this.props.auth.firstName,
            lastName: this.props.auth.lastName,
            email: this.props.auth.email,
        }
        return await api.submitReg(user), api.sendLanding(user)
    }

    dualLog = async event => {
        if (!this.localState.bothkey) {
            event.preventDefault()
            let user = {
                email: this.props.auth.email,
                password: this.props.auth.password,
            }
            return await api.submitLogin(user), api.sendLanding(user)
        }
        else {
            event.preventDefault()
            this.props.adminModal({})
        }
    }

    render() {
        return (
            <>
                <img
                    className='logister-img'
                    src={logpic}
                    style={{ height: this.props.modal.loginmodal ? '100%' : '0%' }} />

                <div
                    className='logister-overlay'
                    id='logister-overlay'
                    style={{ height: this.props.modal.loginmodal ? '100%' : '0%' }}
                >
                    <div className='logister-content'
                        style={{
                            transform: this.props.modal.adminmodal ? 'rotate3d(1,2,3, 720deg)' : 'rotate3d(1,2,3, 0deg)'
                        }}
                    >
                        {
                            !this.props.modal.adminmodal ?
                                <div
                                    className='flip-inner'
                                    style={{
                                        transform: !this.props.modal.flipcard && 'rotateY(180deg)'
                                    }}
                                >

                                    {
                                        this.props.modal.flipcard ?
                                            <div className='flip-front' >
                                                <div className='classes' id='x-button'>X</div>
                                                <div className='header-div'>
                                                    <header className='logreg-header' >REGISTER
                                                        <div
                                                            className='underline'
                                                            style={{ backgroundColor: this.props.modal.flipcard ? 'crimson' : 'transparent' }} ></div>
                                                    </header>
                                                    <header
                                                        className='logreg-header button'
                                                        id='log-header'
                                                        style={{ cursor: this.props.modal.flipcard && 'pointer' }}
                                                    >LOGIN
                                                        <div className='underline' ></div>
                                                    </header>
                                                </div>

                                                <Form
                                                    formClass='log-form'
                                                    formButtonDiv='form-btn-div'
                                                    handleSubmit={this.register}
                                                    buttonClass='log-form-btn'
                                                    buttonText='REGISTER'
                                                >
                                                    <AuthInput
                                                        inputClass='log-input'
                                                        name='firstName'
                                                        placeholder='first name...'
                                                        labelClass='logister-label'
                                                        labelText='First Name'
                                                    />
                                                    <AuthInput
                                                        inputClass='log-input'
                                                        name='lastName'
                                                        placeholder='last name...'
                                                        labelClass='logister-label'
                                                        labelText='Last Name'
                                                    />
                                                    <AuthInput
                                                        inputClass='log-input'
                                                        name='email'
                                                        placeholder='enter e-mail...'
                                                        labelClass='logister-label'
                                                        labelText='E-mail'
                                                    />
                                                    <AuthInput
                                                        inputClass={
                                                            (this.props.auth.low && this.props.auth.up && this.props.auth.num && this.props.auth.spec && this.props.auth.len) ? 'log-input' : 'red-log-input'}
                                                        name='pw1'
                                                        placeholder='enter password...'
                                                        labelClass='logister-label'
                                                        labelText='Enter password'
                                                    />
                                                    <AuthInput
                                                        inputClass={
                                                            (this.props.auth.low && this.props.auth.up && this.props.auth.num && this.props.auth.spec && this.props.auth.len) ? 'log-input' : 'red-log-input'
                                                        }
                                                        name='pw2'
                                                        placeholder='enter matching password...'
                                                        labelClass='logister-label'
                                                        labelText='Enter password again'
                                                    />
                                                </Form>
                                                <div className='criteria'>
                                                    <div className='left-criteria'>
                                                        <ul className='criteria-ul'>
                                                            <li className='criteria-li' style={{ color: this.props.auth.low && 'lime' }}>One lowercase character</li>
                                                            <li className='criteria-li' style={{ color: this.props.auth.up && 'lime' }}>One uppercase character</li>
                                                            <li className='criteria-li' style={{ color: this.props.auth.num && 'lime' }}>One number</li>
                                                        </ul>
                                                    </div>

                                                    <div className='right-criteria'>
                                                        <ul className='criteria-ul'>
                                                            <li id='special' className='criteria-li' style={{ color: this.props.auth.spec && 'lime' }}>One special character</li>
                                                            <li id='pwlength' className='criteria-li' style={{ color: this.props.auth.len && 'lime' }}>8 characters minimum</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className='log-reg-p' > Already have an account?
                                                    <button
                                                        className='log-reg-swap-btn'
                                                        onClick={this.props.flipCard}
                                                    >Log in</button>
                                                </p>
                                                <div className='error-message' >
                                                    <p>{this.props.auth.message}</p>
                                                </div>
                                            </div>
                                            :
                                            <div className='flip-back' >
                                                <div className='classes' id='x-button'>X</div>
                                                <div className='header-div'>
                                                    <header
                                                        className='logreg-header'
                                                        id='reg-header'
                                                        style={{ cursor: !this.props.modal.flipcard && 'pointer' }}
                                                    >REGISTER
                                                        <div className='underline' ></div>
                                                    </header>
                                                    <header className='logreg-header' >LOGIN
                                                        <div
                                                            className='underline'
                                                            style={{ backgroundColor: !this.props.modal.flipcard ? 'crimson' : 'transparent' }}
                                                        ></div>
                                                    </header>
                                                </div>

                                                <Form
                                                    formClass='log-form'
                                                    formButtonDiv='form-btn-div'
                                                    handleSubmit={this.dualLog}
                                                    buttonClass='log-form-btn'
                                                    buttonText='LOGIN'
                                                >
                                                    <AuthInput
                                                        inputClass='log-input'
                                                        name='email'
                                                        placeholder='enter e-mail...'
                                                        labelClass='logister-label'
                                                        labelText='Enter Email'

                                                    />
                                                    <AuthInput
                                                        inputClass='log-input'
                                                        name='password'
                                                        placeholder='enter password...'
                                                        labelClass='logister-label'
                                                        labelText='Enter Password'
                                                    />
                                                </Form>
                                                <p className='log-reg-p' >Need an account?
                                                    <button
                                                        className='log-reg-swap-btn'
                                                        onClick={this.props.flipCard}
                                                    >Sign up</button>
                                                </p>
                                                <div className='error-message' >
                                                    <p>{this.props.auth.message}</p>
                                                </div>
                                            </div>
                                    }
                                </div>
                                :
                                <Admin />
                        }
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
        authLoginModal: () => dispatch(authLoginModal()),
        loginModal: () => dispatch(loginModal()),
        flipCard: () => dispatch(flipCard()),
        adminModal: () => dispatch(adminModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logister)