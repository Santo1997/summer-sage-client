export const coursesAndTeachers = async () => {
  const coursesData = await fetch(
    `https://assign12-camp-server.vercel.app/courses`
  );
  const courses = await coursesData.json();

  return { courses };
};
