const appControllers = require('./appControllers')
    , authControllers = require('./authControllers')
    , landingControllers = require('./landingControllers')
    , db = require('../db')

module.exports = {
    regUser: authControllers.regUser,
    loginUser: authControllers.loginUser,
    logoutUser: authControllers.logoutUser,
    adminLogin: authControllers.adminLogin,
    deleteUser: authControllers.deleteUser,
    updateUser:authControllers.updateUser,
    
    userLanding: landingControllers.userLanding,
    generalLanding: landingControllers.generalLanding,

    // getImage: appControllers.getImage,
}