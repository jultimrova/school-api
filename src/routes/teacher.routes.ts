import {Router} from 'express';
import {createTeacher, getTeachers} from '../controllers/teacher.controller'

const router = Router();

router.route('/')
    .get(getTeachers)
    .post(createTeacher)

export default router;