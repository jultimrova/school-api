import {Request, Response} from 'express';

export default function indexWelcome(req: Request, res: Response): Response {
    return res.json('Welcome to school API');
}