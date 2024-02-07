import { connect } from 'react-redux'
import { easterEgg } from '../../../../utils/redux/actions/modalActions'

const Aside = props => {
    return (
        <>

            <aside className='aside'>
                <h3 className="aside-title">See Our Pets</h3>
                <hr className="aside-hr" />
                <ul className="aside-ul">
                    <li className='aside-li'>
                        <button className='aside-links'>Dogs</button>
                    </li>
                    <li className='aside-li'>
                        <button className='aside-links'>Cats</button>
                    </li>
                    <li className='aside-li'>
                        <button className='aside-links'>Rabbits</button>
                    </li>
                    <li className='aside-li'>
                        <button
                            onClick={props.easterEgg}  
                            className='aside-links'>Easter EGG</button>
                    </li>
                </ul>
            </aside>
        </>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        easterEgg: () => dispatch(easterEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)