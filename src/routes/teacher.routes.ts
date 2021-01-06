import { Router } from 'express';
import {
  createTeacher,
  deleteTeacher,
  getTargetMathTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
} from '../controllers/teacher.controller';

const router = Router();

router.route('/')
  .get(getTeachers)
  .post(createTeacher);

router.route('/mathTeachers')
  .get(getTargetMathTeacher);

router.route('/:teacherId')
  .get(getTeacher)
  .delete(deleteTeacher)
  .put(updateTeacher);

export default router;