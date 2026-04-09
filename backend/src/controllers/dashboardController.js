import { totalStudents } from "./studentController.js";
import { allTeachers } from "./teacherController.js";

export const adminDashborad = async () => {
  const dashboardData = await Promise.all(totalStudents(), allTeachers());
};
