import { USER_LANDING, HANDLE_CHANGE, GENERAL_LANDING, ADD_DROP, ADD_UP } from '../types'


import anna from '../../../assets/images/pets/anna.jpg'
import cotton from '../../../assets/images/pets/cotton.jpg'
import valeria from '../../../assets/images/pets/valeria.jpg'
import boxer from '../../../assets/images/pets/boxer.jpg'
import teresa from '../../../assets/images/pets/teresa.jpg'
import glenn from '../../../assets/images/pets/glenn.jpg'

let initialState = {
    user: {},
    petArr: [{
        name: 'Anna',
        image: [anna]
    },
    {
        name: 'Cotton',
        image: [cotton]
    },
    {
        name: 'Valeria',
        image: [valeria]
    },
    {
        name: 'Box Head',
        image: [boxer]
    },
    {
        name: 'Teresa',
        image: [teresa]
    },
    {
        name: 'Glenn',
        image: [glenn]
    },

    ],
    pet: {},
    userArr: [],
    petType: '',
    age: '',
    breed: '',

    npass1: '',
    npass2: '',
    newEmail: '',
    _id: '',
    message: '',

    low: false,
    up: false,
    num: false,
    spec: false,
    len: false,


    adddrop: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LANDING:
            let { firstName, lastName, email, mailArr, petArr, _id } = action.payload // comes from the backend
            return {
                ...state,
                user: Object.assign(state.user, { firstName, lastName, email, _id }),
            }
        case HANDLE_CHANGE:
            let { name, value } = action.payload
            let passStr = value
            let val1
            let val2
            let val3
            let val4
            let val5
      

            if (name === 'npass1' || name === 'npass2') {
                passStr.match(/[a-z]+/) ? val1 = true : val1 = false
                passStr.match(/[A-Z]+/) ? val2 = true : val2 = false
                passStr.match(/[0-9]+/) ? val3 = true : val3 = false
                passStr.match(/\W+/) ? val4 = true : val4 = false
                passStr.length >= 8 ? val5 = true : val5 = false

            }
            return {
                ...state,
                [name]: value,
                low: val1,
                up: val2,
                num: val3,
                spec: val4,
                len: val5,
 
            }
        case GENERAL_LANDING:
            return {
                ...state,
                userArr: action.payload
            }
        case ADD_DROP:
            return {
                ...state,
                adddrop: !state.adddrop
            }
        case ADD_UP:
            return {
                ...state,
                adddrop: false
            }
        default:
            return state
    }
}

export default appReducer