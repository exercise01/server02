import {Request, Response} from 'express';
import {COURSES} from './db-data';

export var coursesKeyCounter = 10;

export function createCourse(req: Request, res: Response) {

  console.log("Creating new course ...");

  const changes = req.body;

  // const courseId = 1 + 1 ;

  // console.log(courseId);

  // coursesKeyCounter = courseId ;

  const newCourse = {
    id: coursesKeyCounter,
    //seqNo: coursesKeyCounter,
    ...changes
  };

  COURSES[newCourse.id] = newCourse;

  coursesKeyCounter += 1;

  setTimeout(() => {

    res.status(200).json(newCourse);

  }, 1500);

}
