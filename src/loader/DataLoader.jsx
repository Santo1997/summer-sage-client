export const coursesAndTeachers = async () => {
  const coursesData = await fetch(`http://localhost:5000/courses`);
  const courses = await coursesData.json();

  return { courses };
};
