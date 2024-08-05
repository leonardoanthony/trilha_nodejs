"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = require("./CreateCourseService");
const createCourse = (req, res) => {
    CreateCourseService_1.CreateCourseService.execute({
        name: 'NodeJS',
        duration: 10,
        educator: 'Erick'
    });
    CreateCourseService_1.CreateCourseService.execute({
        name: 'ReactJS',
        educator: 'Diego'
    });
};
exports.createCourse = createCourse;
