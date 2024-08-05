
import {Request, Response} from 'express';
import { CreateCourseService } from './CreateCourseService';

export const createCourse = (req: Request, res: Response) => {
    CreateCourseService.execute({
        name: 'NodeJS',
        duration: 10,
        educator: 'Erick'
    });
    CreateCourseService.execute({
        name: 'ReactJS',
        educator: 'Diego'
    });

    return res.json({message: 'Hello World'});
}