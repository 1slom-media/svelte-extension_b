import { Router } from 'express'
import validation from '../../middlewares/validation.js';
import controller from './controller.js'

const router = Router()
router.post('/register',validation,controller.REGISTER)
router.post('/login',validation,controller.LOGIN)

export default router;
