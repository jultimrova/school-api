import { Request, Response } from 'express';
import { Teacher } from '../models/Teacher';
import connect from '../db';

export async function getTeachers(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const gender = req.query.gender || 'F';
  const yearsOfExperience = req.query.yearsOfExperience || 10;
  const limit = req.query.limit || 10;
  const teachers = await conn.query(`SELECT teacher.id,
                                              first_name,
                                              last_name,
                                              gender,
                                              date_of_birth,
                                              subject_taught,
                                              years_of_experience
                                       FROM teacher
                                       WHERE gender = '${gender}'
                                         AND years_of_experience > '${yearsOfExperience}'
                                       ORDER BY id LIMIT ${limit}`);
  return res.json(teachers[0]);
}

export async function getTeacher(req: Request, res: Response): Promise<Response> {
  const id = req.params.teacherId;
  const yearsOfExperience = req.query.yearsOfExperience || 10;
  const conn = await connect();
  const teacher = await conn.query(`SELECT teacher.id,
                                             first_name,
                                             last_name,
                                             gender,
                                             date_of_birth,
                                             subject_taught,
                                             years_of_experience
                                      FROM teacher
                                      WHERE id = ?
                                        AND years_of_experience > '${yearsOfExperience}'
                                      ORDER BY last_name`, [id]);
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
  const conn = await connect();
  const mathTeacher = await conn.query(`SELECT t.id,
                                                 first_name,
                                                 last_name,
                                                 gender,
                                                 date_of_birth,
                                                 subject_taught,
                                                 years_of_experience
                                          FROM teacher t
                                                   INNER JOIN lesson l ON l.teacher_id = t.id
                                                   INNER JOIN classroom c ON l.classroom_id = c.id
                                          WHERE t.subject_taught = 'Math'
                                            AND t.years_of_experience > 10
                                            AND l.day_of_week = 'Thursday'
                                            AND l.time_from = '08:30:00'
                                            AND l.time_to = '14:30:00'
                                            AND c.name = '100'
                                          GROUP BY t.id`);

  return res.json(mathTeacher[0]);
}