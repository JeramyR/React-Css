import Logo from "../logo/Logo"
import persevere from '../../../assets/icon.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='persevere' src={persevere}/>
            <Logo />
            {/* <p>&copy; Reid, Capstone 2023</p> */}
        </footer>
    )
}

export default Footer