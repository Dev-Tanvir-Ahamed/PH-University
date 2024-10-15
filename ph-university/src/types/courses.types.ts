import { TAcademicManagementData } from "./academicManagement.types";

// export type TSemesterRegistration = {
//   academicSemester: TAcademicManagementData;
//   status: string;
//   startDate: string;
//   endDate: string;
//   minCredit: number;
//   maxCredit: number;
// };

export type TRegisteredSemester = {
  _id: string;
  academicSemester: TAcademicManagementData;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string;
};

export type TCreateCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted: boolean;
  preRequisiteCourses: TPreRequisiteCourse[];
};

export type TPreRequisiteCourse = {
  _id: string;
  course: string;
  isDeleted: boolean;
};
