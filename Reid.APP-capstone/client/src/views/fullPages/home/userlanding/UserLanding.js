import { connect } from 'react-redux'

import api from '../../../../utils/api'
import { handleChange } from '../../../../utils/redux/actions/appActions'

import { addDrop, addUp } from '../../../../utils/redux/actions/appActions'

import Form from '../../../../components/formComponents/Form'
import Input from '../../../../components/formComponents/AppInput'

const UserLanding = props => {
    const handleSubmit = async event => {
        event.preventDefault()
        let petObj = {
            petType: props.app.petType,
            breed: props.app.breed,
            age: props.app.age,
        }
        return await api.sendPet(petObj), api.sendLanding()
    }

    return (
        <>
            <div
                className='user-container'
                style={{
                    height: props.app.adddrop ? '70vh' : '90vh'
                }}
            >
                <div
                    className='user-add-pet'
                    style={{
                        height: props.app.adddrop ? '180px' : '60px'
                    }}
                >
                    
                    <div className='add-button-center'>
                        <button className='add-drop-down' onClick={props.addDrop}><header className='user-header'>Add an Animal</header></button>
                    </div>
                    <div
                        className='form-div'
                        style={{
                            visibility: props.app.adddrop ? 'visible' : 'hidden'
                        }}
                    >
                        <Form
                            formClass='user-add-form'
                            formButtonDiv='user-form-btn-div'
                            buttonClass='user-add-btn'
                            buttonText='ADD'
                            handleSubmit={handleSubmit}
                        >
                            <label htmlFor='select' className='select-label'>choose pet type:
                                <select defaultValue='dog' required className='select' name='petType' id='select' onChange={event => props.handleChange(event.target)}>
                                    <option className='select-options' value={null} >Choose</option>
                                    <option className='select-options' value="dog"  >Dog</option>
                                    <option className='select-options' value="cat">Cat</option>
                                    <option className='select-options' value='other'>Other</option>
                                </select>
                            </label>
                            <Input
                                appLabelInputDiv='user-add-label-input-div'
                                appLabelClass='user-add-label'
                                inputClass='user-add-input'
                                name='breed'
                                placeholder='Enter Breed'
                                type='text'
                            />
                            <Input
                                ClassInputDiv='user-add-label-input-div'
                                appLabelClass='user-add-label'
                                inputClass='user-add-input'
                                name='age'
                                placeholder='Enter Age'
                                type='text'
                            />
                        </Form>
                    </div>
                </div>

                <div className='user-pet-container'>
                    {
                        props.app.petArr.map((card, key) =>
                            <div className="user-card" key={key + 'b'}>
                                <img className="card-img" src={card.image[0]} alt={card.name} />
                                <div className="card-info">
                                    <h2 className='card-title'>{card.name}</h2>
                                    <div className='card-description'>
                                        <p>{card.description}</p>
                                    </div>
                                    <button className="user-button">INFORMATION</button>
                                </div>
                            </div>
                        )
                    }
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
        nav: state.nav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: input => dispatch(handleChange(input)),
        addDrop: () => dispatch(addDrop()),
        addUp: () => dispatch(addUp()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)