import {json, Router} from 'express';

const router = Router();

router.route('/')
    .get((req,res) => res.json('Welcome to API'));

export default router;