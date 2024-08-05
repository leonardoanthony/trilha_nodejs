"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseService = void 0;
class CreateCourseService {
    static execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
}
exports.CreateCourseService = CreateCourseService;
