import { connect } from 'react-redux'

import api from '../../../utils/api'
import { openDelete } from '../../../utils/redux/actions/modalActions'
import DeleteUser from '../../modals/delete/DeleteUser'

import Form from '../../../components/formComponents/Form'
import Input from '../../../components/formComponents/AppInput'

const Profile = props => {

    const submit = async event => {
        event.preventDefault()
        let updatedInfo = {
            ...props.user,
            npass1: props.app.npass1,
            npass2: props.app.npass1,
            newEmail: props.app.newEmail,

        }
        await api.updateUser(updatedInfo)
    }
    return (
        <>
            <div className='profile-underlay'
            style={{
                height: props.nav.hamburger ? '63vh' : '84vh'
            }}>

                <div
                    className='profile-container move-down'
                    style={{
                        // height: props.nav.hamburger ? '85vh' : '63vh',
                       
                    }}
                >
                    <DeleteUser />
                    <header className='profile-title' >UPDATE YOUR PROFILE</header>
                    <div className='profile-information'>
                        <div className='profile-specs'>
                            {
                                props.user.firstName
                            }
                        </div>
                        <div className='profile-specs'>
                            {
                                props.user.lastName
                            }
                        </div>
                        <div className='profile-specs'>
                            {
                                props.user.email
                            }
                        </div>
                    </div>
                    <div className='form-container'>
                        <Form
                            handleSubmit={submit}
                            formClass='profile-form'
                            formButtonDiv='profile-btn-div'
                            buttonClass='profile-btn'
                            buttonText='UPDATE'
                        >
                            <Input
                                appLabelInputDiv='profile-label-input-div'
                                appLabelClass='profile-label'
                                name='newEmail'
                                placeholder='enter new email...'
                                inputClass='profile-input'
                                labelText='Email'
                            />
                            <br />
                            <Input
                                appLabelInputDiv='profile-label-input-div'
                                appLabelClass='profile-label'
                                name='npass1'
                                placeholder='enter new password'
                                inputClass='profile-input'
                                labelText='New Password'
                            />
                            <br />
                            <Input
                                appLabelInputDiv='profile-label-input-div'
                                appLabelClass='profile-label'
                                name='npass2'
                                placeholder='enter new password again...'
                                inputClass='profile-input'
                                labelText='Matching Password'
                            />
                            <div className='criteria profile-criteria'>
                                <div className='criteria-container'>
                                    <div className='left-criteria'>
                                        <ul className='criteria-ul'>
                                            <li className='criteria-li'
                                                style={{
                                                    color: props.app.low && 'rgb(0, 255, 238)',
                                                    textShadow: props.app.low && '1px 1px 2px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'
                                                }}
                                            >One lowercase character</li>
                                            <li className='criteria-li'
                                                style={{
                                                    color: props.app.up && 'rgb(0, 255, 238)',
                                                    textShadow: props.app.up && '1px 1px 2px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'
                                                }}
                                            >One uppercase character</li>
                                            <li className='criteria-li'
                                                style={{
                                                    color: props.app.num && 'rgb(0, 255, 238)',
                                                    textShadow: props.app.num && '1px 1px 2px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'
                                                }}
                                            >One number</li>
                                        </ul>
                                    </div>

                                    <div className='right-criteria'>
                                        <ul className='criteria-ul'>
                                            <li className='criteria-li'
                                                style={{
                                                    color: props.app.spec && 'rgb(0, 255, 238)',
                                                    textShadow: props.app.spec && '1px 1px 2px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'
                                                }}
                                            >One special character</li>
                                            <li className='criteria-li'
                                                style={{
                                                    color: props.app.len && 'rgb(0, 255, 238)',
                                                    textShadow: props.app.len && '1px 1px 2px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'
                                                }}
                                            >8 characters minimum</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className='p-message'
                                    style={{ display: props.auth.message === '' && 'none' }}>{props.auth.message}</p>
                            </div>
                        </Form>

                        <button
                            onClick={() => props.openDelete(props.user._id)}
                            className='profile-delete'
                        >DELETE PROFILE
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        app: state.app,
        user: state.app.user,
        nav: state.nav,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDelete: id => dispatch(openDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)