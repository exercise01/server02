import * as express from 'express';
import {Application} from "express";
import {getAllCourses } from "./get-courses.route";//getCourseById
import {loginUser} from './login.route';
import {saveCourse} from './save-course.route';
import {createCourse} from "./create-course.route";
import {deleteCourse} from "./delete-course.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({origin: true}));

app.route('/api/courses').get(getAllCourses);

app.route('/api/login').post(loginUser);//post

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/courses').post(createCourse);

app.route('/api/courses/:id').delete(deleteCourse);

const httpServer = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});


//import {saveCourse} from './save-course.route';
//import {loginUser} from './login.route';
//import {createCourse} from "./create-course.route";
//import {deleteCourse} from "./delete-course.route";

//import {searchLessons} from "./search-lessons.route";
//import {saveLesson} from "./save-lesson.route";

//app.route('/api/courses').post(createCourse);

//app.route('/api/courses/:id').get(getCourseById);

//app.route('/api/courses/:id').put(saveCourse);

//app.route('/api/courses/:id').delete(deleteCourse);

//app.route('/api/login').post(loginUser);


//app.route('/api/search-lessons').get(searchLessons);

//app.route('/api/lessons/:id').put(saveLesson);


