import { connect } from "react-redux"
import { handleChange } from '../../utils/redux/actions/appActions'
//  appLabelInputDiv=''  appLabel=''

const AppInput = props => {
    return (
        <>
            <div className={props.appLabelInputDiv}>
                <label
                    htmlFor={props.name}
                    className={props.appLabelClass}>
                    {props.labelText}
                </label>

                <input
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    value={props.app[props.name]}
                    placeholder={props.placeholder}
                    onChange={event => props.handleChange(event.target)}
                    className={`${props.inputClass} input`}
                // required={true}
                />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        app: state.app,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: input => dispatch(handleChange(input)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInput)