import {Request, Response} from "express";
import {Teacher} from '../models/Teacher'
import connect from '../db';

export async function getTeachers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const teachers = await conn.query('SELECT * FROM teacher');
    return res.json(teachers[0]);
}

export async function createTeacher(req: Request, res: Response): Promise<Response> {
    const newTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO teacher SET ?', [newTeacher]);
    return res.json({
        message: 'Teacher added'
    })
}