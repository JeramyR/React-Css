const chai = require('chai')
    , chaiHttp = require('chai-http')
    , app = require('../index')
    , assert = chai.assert

chai.use(chaiHttp)

suite('Functional testing suite', () => {

    //     suite('user CAN use registration functionality', () => {
    //         let success = {
    //             firstName: 'Sam',
    //             lastName: 'Love',
    //             email: 'gomail',
    //             pw1: 'star',
    //             pw2: 'star',
    //         }
    //         let failMail = {
    //             firstName: 'Samy',
    //             lastName: 'Loveit',
    //             email: 'gomail',
    //             pw1: 'staryu',
    //             pw2: 'staryu',
    //         }
    //         let failPw = {
    //             firstName: 'Samy',
    //             lastName: 'Loveit',
    //             email: 'gomail.com',
    //             pw1: 'staryu',
    //             pw2: 'start',
    //         }
    // test('user FAILS register pw1 != pw2', done => {
    //     chai
    //         .request(app)
    //         .post('/auth/register')
    //         .send(failPw)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.message, "Enter matching passwords.")
    //             done()
    //         })
    // })
    // test('user SHOULD register new account', done => {
    //     chai
    //         .request(app)
    //         .post('/auth/register')
    //         .send(success)
    //         .end((err, res) => {
    //             console.log('log', res.status)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.message, "User logged in...")
    //             done()
    //         })
    // })
    // test('User email EXISTS', done => {
    //     chai
    //         .request(app)
    //         .post('/auth/register')
    //         .send(failMail)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.message, `email is already registered.`)
    //             done()
    //         })
    // }) 
    // })

    // suite('user CAN use login/out functions', () => {
    //     let loginS = {
    //         email: 'gomail',
    //         password: 'star',
    //     }
    //     let loginPwF = {
    //         email: 'gomail',
    //         password: 'starting',
    //     }
    //     let loginEF = {
    //         email: 'gomail.cups',
    //         password: 'star',
    //     }
    //     test('user FAILS login wrong password', done => {
    //         chai
    //             .request(app)
    //             .post('/auth/login')
    //             .send(loginPwF)
    //             .end((err, res) => {
    //                 assert.equal(res.status, 200)
    //                 assert.equal(res.body.message, 'password or email does not match database.')
    //                 done()
    //             })
    //     })
    //     test('user FAILS login wrong username', done => {
    //         chai
    //             .request(app)
    //             .post('/auth/login')
    //             .send(loginEF)
    //             .end((err, res) => {
    //                 assert.equal(res.status, 200)
    //                 assert.equal(res.body.message, 'password or email does not match database.')
    //                 done()
    //             })
    //     })
    //     test('user PASS login', done => {
    //         chai
    //             .request(app)
    //             .post('/auth/login')
    //             .send(loginS)
    //             .end((err, res) => {
    //                 assert.equal(res.status, 200)
    //                 assert.isString(res.body.message)
    //                 assert.strictEqual(res.body.message, 'User is logged in!')
    //                 assert.isObject(res.body.user)
    //                 done()
    //             })
    //     })
    //     test('user CAN logout', done => {
    //         chai
    //             .request(app)
    //             .post('/auth/logout')
    //             .send(loginS)
    //             .end((err, res) => {
    //                 assert.equal(res.status, 200)
    //                 assert.equal(res.body.message, 'Logged out')
    //                 done()
    //             })
    //     })
    // })

    // suite('user CAN control personal info', () => {
    //     test('user UPDATED personal info', done => {

    //     })
    //     test('user DELETED personal info', done => {

    //     })
    // })

})