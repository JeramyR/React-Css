import appApi from './appApi'
import authApi from './authApi'

export default {
    submitReg: authApi.submitReg,
    submitLogin: authApi.submitLogin,
    submitLogout: authApi.submitLogout,
    submitAdmin: authApi.submitAdmin,
    submitDelete:authApi.submitDelete,
    updateUser: authApi.updateUser,
    
    // submitDelete: authApi.submitDelete,

    sendLanding: appApi.sendLanding,
    adminLanding: appApi.adminLanding,
    sendPet: appApi.sendPet,
}