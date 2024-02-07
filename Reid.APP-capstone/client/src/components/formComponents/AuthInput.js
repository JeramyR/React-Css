import { connect } from "react-redux"
import { authChange } from '../../utils/redux/actions/authActions'
// Input - class={labelInputDiv labelClass inputClass}  
// Input - name labelText placeholder
const AuthInput = props => {
    return (
        <>
            <div className={props.labelInputDiv}>
                <label htmlFor={props.name} className={props.labelClass}>{props.labelText}</label>

                <input
                    type='text'
                    name={props.name}
                    id={props.name}
                    value={props.auth[props.name]}
                    placeholder={props.placeholder}
                    onChange={event => props.authChange(event.target)}
                    className={`${props.inputClass} input`}
                // required={true}
                />
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authChange: input => dispatch(authChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthInput)