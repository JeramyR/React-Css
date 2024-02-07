import { connect } from 'react-redux'
import React, { useRef } from 'react'
import { easterEgg } from '../../../utils/redux/actions/modalActions'

import sunset from '../../../assets/images/mountain.jpg'
import tesla from '../../../assets/images/apps/tesla.jpg'
import phone from '../../../assets/images/apps/phone.jpg'
import twitter from '../../../assets/images/apps/twitter.jpg'
import insta from '../../../assets/images/apps/insta.jpg'

class Phone extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.onclick = e => {
            (e.target.id === 'phone-click' || e.target.id === 'phone-bottom-layer') && this.props.easterEgg({})
        }
    }
    componentDidUpdate() {
        window.onclick = e => {
            (e.target.id === 'phone-click' || e.target.id === 'phone-bottom-layer') && this.props.easterEgg({})
        }
    }
    render() {
        return (
            <>
                <div
                    className='phone-bottom-layer'
                    id='phone-bottom-layer'
                    style={{
                        height: this.props.easter ? '100%' : '0%',
                        width: this.props.easter ? '100%' : '0%',
                    }}
                >
                    <div className='phone-holder'>

                        <div className='phone-overlay' id='phone-click'>
                            <div className='phone-shine'>
                                <div className='phone-outer-bezel'>
                                    <div className='phone-camera'></div>
                                    <div className='phone-power'></div>
                                    <div className='phone-inner-bezel'>
                                        <div className='phone-top'></div>
                                        <div className='phone-content'>
                                            <div className='camera'></div>
                                            <img className='phone-wallpaper' src={sunset} />
                                            <img className='icons tes' src={tesla} />
                                            <img className='icons inst' src={insta} />
                                            <div className='phone-menu'>
                                                <img className='icons call' src={phone} />
                                                <img className='icons twitter' src={twitter} />
                                            </div>
                                            <div className='phone-bottom'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        easter: state.modal.easter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        easterEgg: () => dispatch(easterEgg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Phone)