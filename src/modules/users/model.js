import {fetch } from '../../lib/postgres.js'
import { LOGIN,REGISTER,USERNAME } from './query.js'


const LOGINMODEL = async ({username, password}) => {
    try {
        return await fetch(LOGIN, [username, password]);
    } catch (error) {
        console.error(error);
    }
}

const REGISTERMODEL=async ({username,password,repeat_password,email})=>{
    try {
        const allUsers = await fetch(USERNAME,[username])
        if(!allUsers){
            return await fetch(REGISTER, [username,password,repeat_password,email]);
        }
        
    } catch (error) {
        console.error(error.message);
    }
}

export default {
    LOGINMODEL,
    REGISTERMODEL
}