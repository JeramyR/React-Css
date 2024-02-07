import { connect } from 'react-redux'

import api from '../../../utils/api'
import { openDelete } from '../../../utils/redux/actions/modalActions'

import Form from '../../../components/formComponents/Form'

const DeleteUser = props => {
    const _id = props.modal._id
    const flag = props.auth.admin
    const submit = async event => {
        event.preventDefault()
        return await api.submitDelete({ _id, flag })
    }
    window.onclick = event => {
        event.target.id === 'delete-overlay' && props.openDelete(_id)
    }
return (
    <>
        <div
            id='delete-overlay'
            className="delete-overlay"
            style={{ 
                opacity: props.modal.deletemodal ? '1' : '0',
                zIndex: props.modal.deletemodal ? '1' : '-1',

            }}
        >
            <div className="delete-content">
                <Form
                    handleSubmit={submit}
                    formClass='delete-form'
                    formButtonDiv='delete-btn-div'
                    buttonClass='delete-button'
                    buttonText='PERMANANTLY DELETE'
                >
                    <header className='delete-text'>
                        <span className='delete-caution'>WARNING:</span>
                        <br />
                        Continuing will permanantly delete account!
                    </header>
                </Form>
                <button
                    className='delete-close'
                    onClick={() => props.openDelete(_id)}
                >CANCEL DELETE
                </button>
            </div>
        </div>
    </>
)
}

const mapStateToProps = state => {
    return {
        app: state.app,
        auth: state.auth,
        modal: state.modal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDelete: id => dispatch(openDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)