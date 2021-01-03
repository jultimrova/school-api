import {Request, Response} from 'express';
import {Teacher} from '../models/Teacher';
import connect from '../db';

export async function getTeachers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const teachers = await conn.query('SELECT * FROM teacher');
    return res.json(teachers[0]);
}

export async function getTeacher(req: Request, res: Response): Promise<Response> {
    const id = req.params.teacherId;
    const conn = await connect();
    const teacher = await conn.query('SELECT * FROM teacher WHERE id = ?', [id]);
    return res.json(teacher[0]);
}

export async function createTeacher(req: Request, res: Response): Promise<Response> {
    const newTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO teacher SET ?', [newTeacher]);
    return res.json({
        message: 'Teacher added',
    });
}

export async function deleteTeacher(req: Request, res: Response): Promise<Response> {
    const id = req.params.teacherId;
    const conn = await connect();
    await conn.query('DELETE FROM teacher WHERE id = ?', [id]);
    return res.json({
        message: 'Teacher was deleted',
    });
}

export async function updateTeacher(req: Request, res: Response): Promise<Response> {
    const id = req.params.teacherId;
    const updatedTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('UPDATE teacher SET ? WHERE id = ?', [updatedTeacher, id]);
    return res.json({
        message: 'Teacher was updated',
    });
}