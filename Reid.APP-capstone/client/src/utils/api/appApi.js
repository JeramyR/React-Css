import axios from 'axios'
import store from '../redux/store'
import { userLanding, generalLanding, } from '../redux/actions/appActions'


const { REACT_APP_BASE_URL } = process.env

const sendLanding = async () => await axios
    .get(`${REACT_APP_BASE_URL}/landing`, { withCredentials: true })
    .then(res => store.dispatch(userLanding(res.data)))
    .catch(err => console.log(err))

const adminLanding = async () => await axios
    .get(`${REACT_APP_BASE_URL}/landing/general`, { withCredentials: true })
    .then(res => store.dispatch(generalLanding(res.data)))
    .catch(err => console.log(err))


//fix this up
const sendPet = async petObj => await axios
    .post(`${REACT_APP_BASE_URL}/add`, { petObj }, { withCredentials: true })
    .then(res => store.dispatch(userLanding(res.data)))
    .catch(err => console.log(err))




// const deleteTask = async _id => await instance
//     .post(`${APP}/delete`, { _id })
//     .then(res => store.dispatch(getLanding(res.data)))
//     .catch(err => console.log(err))

// const editTask = async (_id, task) => await instance
//     .post(`${APP}/update`, { _id, task })
//     .then(res => store.dispatch(getLanding(res.data)))
//     .catch(err => console.log(err))

export default {
    sendLanding,
    adminLanding,
    sendPet,
    // deleteTask, 
    // editTask 
}