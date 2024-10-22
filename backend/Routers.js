

//import {pages} from "./components";
import {Router} from "express";
const router = Router();

import {findHolding,findPos,findWatch} from './dataFetch.js'
import {login,register} from './Handlelogin.js'
//import { Login,Register } from "./Handlelogin"; 
router.route('/zerodha/holding').get(findHolding);
router.route('/zerodha/pos').get(findPos);
router.route('/zerodha/watch').get(findWatch);
router.route('/login').post(login);
router.route('/register').post(register);


export default  router;