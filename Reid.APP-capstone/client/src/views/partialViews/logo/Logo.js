import { connect } from 'react-redux'
import { moveFace } from '../../../utils/redux/actions/authActions'

const Logo = props => {

    return (
        <>
            <div
                className="scene"
                onClick={props.moveFace}
                style={{
                    height: props.face && '1.2em',
                    perspective: props.face && 'none',
                    marginRight: props.face && '4px',           
                }}
            >

                <div
                    className="cube"
                    style={{
                        animation: props.face && 'none' 
                    }}
                >
                    <div
                        style={{

                            right: props.face && '145%',
                            fontSize: props.face && '18px',
                            boxShadow: props.face && '0 0 1.5em 2px rgba(255, 255, 255, 0.0)',
                        }}
                        className="face front">Reid</div>
                    <div
                        style={{
                            right: props.face && '50%',
                            fontSize: props.face && '18px',
                            boxShadow: props.face && '0 0 1.5em 2px rgba(255, 255, 255, 0.0)',
                            transform: props.face && 'rotateY(0deg)translateZ(4em)',
                        }}
                        className="face right background">Capstone</div>
                    <div
                        style={{
                            right: props.face && '0%',
                            fontSize: props.face && '18px',
                            boxShadow: props.face && '0 0 1.5em 2px rgba(255, 255, 255, 0.0)',
                            transform: props.face && 'rotateY(0deg)translateZ(4em)',
                        }}
                        className="face back">2023</div>
                    <div
                        style={{
                            right: props.face && '185%',
                            fontSize: props.face && '12px',
                            boxShadow: props.face && 'none',
                            transform: props.face && 'rotateY(0deg)translateZ(4em)',
                            backgroundImage: props.face && 'none'
                        }}
                        className="face left">&copy;</div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        face: state.auth.moveface
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveFace: () => dispatch(moveFace()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)