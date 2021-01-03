import {Router} from 'express';
import {
    createTeacher, deleteTeacher, getTeacher, getTeachers, updateTeacher,
} from '../controllers/teacher.controller';

const router = Router();

router.route('/')
    .get(getTeachers)
    .post(createTeacher);

router.route('/:teacherId')
    .get(getTeacher)
    .delete(deleteTeacher)
    .put(updateTeacher);

export default router;