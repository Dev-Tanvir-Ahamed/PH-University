type TUser = {
  _id: string;
  id: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};

type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
};

type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
};

type TSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type TAcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type TAcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TStudent = {
  _id: string;
  id: string;
  user: TUser;
  name: TName;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string; // Assuming this should be bloodGroup
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  admissionSemester: TSemester;
  isDeleted: boolean;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  fullName: string;
};
