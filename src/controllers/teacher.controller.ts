import {Request, Response} from 'express';
import {Teacher} from '../models/Teacher';
import connect from '../db';

const teacherSql = 'SELECT t.id, t.first_name, t.last_name, t.gender, t.date_of_birth, t.subject_taught, t.years_of_experience FROM teacher t';

export async function getTeachers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    function buildWhereQuery(bReq: Request): string {
        const {gender} = bReq.query;
        const yearsOfExperience = bReq.query.yearsOfExperience || bReq.query.years_of_experience;
        const filters: Array<string> = [];

        if (gender) {
            filters.push(`t.gender = '${gender}'`);
        }

        if (yearsOfExperience) {
            filters.push(`t.years_of_experience > ${yearsOfExperience}`);
        }

        if (filters.length > 0) {
            let whereSubSql = '';

            for (let i = 0; i < filters.length; i += 1) {
                if (whereSubSql !== '') {
                    whereSubSql += ' AND ';
                }

                whereSubSql += filters[i];
            }

            return ` WHERE ${whereSubSql} `;
        }

        return '';
    }

    function buildLimitQuery(bReq: Request): string {
        const limit = bReq.query.limit || 10;

        return ` LIMIT ${limit}`;
    }

    const teachers = await conn.query(`${teacherSql} ${buildWhereQuery(req)} ORDER BY t.id ${buildLimitQuery(req)}`);

    return res.json(teachers[0] || []);
}

export async function getTeacher(req: Request, res: Response): Promise<Response> {
    const id = req.params.teacherId;
    const conn = await connect();
    const teacher = await conn.query(`${teacherSql} WHERE t.id = ? ORDER BY t.last_name`, [id]);

    return res.json(teacher[0]);
}

export async function createTeacher(req: Request, res: Response): Promise<Response> {
    const newTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO teacher SET ?', [newTeacher]);

    return res.json({
        message: `Teacher ${newTeacher.first_name} ${newTeacher.last_name} added`,
        body: {
            newTeacher,
        },
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
        body: {
            updatedTeacher,
        },
    });
}

export async function getTargetMathTeacher(req: Request, res: Response): Promise<Response> {
    const subjectTaught = req.query.subjectTaught || 'Math';
    const yearsOfExperience = req.query.yearsOfExperience || 10;
    const dayOfWeek = req.query.dayOfWeek || 'Thursday';
    const timeFrom = req.query.timeFrom || '08:30:00';
    const timeTo = req.query.timeTo || '14:30:00';
    const classroomName = req.query.classroomName || 100;
    const limit = req.query.limit || 10;
    const conn = await connect();
    const mathTeacher = await conn.query(
        `${teacherSql}
        INNER JOIN lesson l ON l.teacher_id = t.id
        INNER JOIN classroom c ON l.classroom_id = c.id
        WHERE t.subject_taught = '${subjectTaught}'
            AND t.years_of_experience > ${yearsOfExperience}
            AND l.day_of_week = '${dayOfWeek}'
            AND l.time_from = '${timeFrom}'
            AND l.time_to = '${timeTo}'
            AND c.name = '${classroomName}'
        GROUP BY t.id LIMIT ${limit}`,
    );

    return res.json(mathTeacher[0]);
}