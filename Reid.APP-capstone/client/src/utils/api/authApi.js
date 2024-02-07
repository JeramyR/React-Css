import axios from 'axios'
import store from "../../utils/redux/store"

import { sendMessage, authloginSuccess, logoutSuccess, adminLoggedSuccess, } from '../redux/actions/authActions'
import { userLanding, generalLanding } from "../redux/actions/appActions"
import { modalloginSuccess, openDelete } from '../redux/actions/modalActions'
import { dropUp, homeTab } from '../redux/actions/navActions'

const { REACT_APP_BASE_URL } = process.env

const submitReg = async user => await axios
    .post(`${REACT_APP_BASE_URL}/auth/register`, user, { withCredentials: true })
    .then(res => {
        if (res.data.message === "User logged in...") {
            store.dispatch(authloginSuccess(res.data))
            store.dispatch(modalloginSuccess(res.data))
        }
        else {
            store.dispatch(sendMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const submitLogin = async user => await axios
    .post(`${REACT_APP_BASE_URL}/auth/login`, user, { withCredentials: true })
    .then(res => {
        if (res.data.message === "User is logged in!") {
            store.dispatch(authloginSuccess(res.data))
            store.dispatch(modalloginSuccess(res.data))
        }
        else {
            store.dispatch(sendMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const submitAdmin = async user => await axios
    .post(`${REACT_APP_BASE_URL}/auth/admin/login`, user, { withCredentials: true })
    .then(res => {
        if (res.data.message === 'ADMIN LOGGED IN') {
            store.dispatch(modalloginSuccess(res.data))
            store.dispatch(adminLoggedSuccess(res.data))
        }
        else {
            store.dispatch(sendMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const submitLogout = async () => await axios
    .post(`${REACT_APP_BASE_URL}/auth/logout`, {}, { withCredentials: true })
    .then(res => {
        return store.dispatch(logoutSuccess()), store.dispatch(dropUp()), store.dispatch(homeTab())
    })
    .catch(err => console.log(err))

const submitDelete = async info => await axios
    .post(`${REACT_APP_BASE_URL}/auth/delete/user`, info, { withCredentials: true })
    .then(res => {
        if (res.data.newObj.flag) {
            store.dispatch(generalLanding(res.data.newObj.data))
            store.dispatch(openDelete(''))
        }
        else {
            store.dispatch(logoutSuccess(''))
            store.dispatch(openDelete(''))
        }
    })
    .catch(err => console.log(err))

const updateUser = async updatedInfo => await axios
    .post(`${REACT_APP_BASE_URL}/auth/update/user`, updatedInfo, { withCredentials: true })
    .then(res => {
        if (res.data.message === 'Please read password requirements.') {
            store.dispatch(sendMessage(res.data.message))
        }
        else {
            store.dispatch(userLanding(res.data.data)), store.dispatch(sendMessage(''))
        }

    })
    .catch(err => console.log(err))



export default {
    submitReg,
    submitLogin,
    submitLogout,
    submitAdmin,
    submitDelete,
    updateUser,
}