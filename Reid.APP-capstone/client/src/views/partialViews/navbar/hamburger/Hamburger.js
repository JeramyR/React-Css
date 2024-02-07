import { connect } from 'react-redux'

import { dropDown } from '../../../../utils/redux/actions/navActions'

const Hamburger = props => {
    return (
        <>
            <label className="hamburger-menu" style={{
                display: props.modal.deletemodal ? 'none' : 'flex'
            }}>
                <input  type="checkbox" onClick={() => props.dropDown()} />
            </label>
        </>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        nav: state.nav,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dropDown: () => dispatch(dropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)