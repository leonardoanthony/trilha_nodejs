/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number;
    educator: string;
}

export class CreateCourseService {
    static execute({name, duration = 8, educator}: Course){
        console.log(name, duration, educator);
    }
}