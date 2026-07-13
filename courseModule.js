import fs from 'node:fs';

const jsonData = fs.readFileSync('cs_courses.json');
const courseData = JSON.parse(jsonData);
console.log("Read", courseData.courses.length, "courses");

export const lookupByCourseId =  (id) => {
	console.log("\nLookup by CourseId", id);
	let result;
	// fill the code

	let pattern = new RegExp(id);
	result = courseData.courses.filter(course => pattern.test(course.course_id));

	return result;
};

export const lookupByCourseName= (name) => {
  console.log("\nLookup by CourseName", name);
	let result;
	// fill the code
	
	result = courseData.courses.filter(course => course.course_name.toLowerCase().includes(name.toLowerCase()));
	
	return result;
};

export const getRandomCourse = () => {
	console.log("\nA Random Course");
	let result;
	// fill the code
	
	let index = Math.floor(Math.random() * courseData.courses.length);
	result = courseData.courses[index];

	return result;
};