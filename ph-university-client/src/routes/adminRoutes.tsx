import AcademicDepertment from "../pages/Admin/AcadmicManagement/AcademicDepertment";
import AcademicFaculty from "../pages/Admin/AcadmicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/AcadmicManagement/AcademicSemester";
import CreateAcademicDepertment from "../pages/Admin/AcadmicManagement/CreateAcademicDepertment";
import CreateAcademicFaculty from "../pages/Admin/AcadmicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/Admin/AcadmicManagement/CreateAcademicSemister";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Course from "../pages/Admin/CoursesManagement/Courses";
import CreateCourses from "../pages/Admin/CoursesManagement/CreateCourses";
import OfferedCourses from "../pages/Admin/CoursesManagement/OfferedCourses";
import RegisteredSemester from "../pages/Admin/CoursesManagement/RegisteredSemester";
import SemesterRegistration from "../pages/Admin/CoursesManagement/SemesterRegistration";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/UserManagement/CreateStudent";
import StudentDataTable from "../pages/Admin/UserManagement/StudentDataTable";
import StudentUpdate from "../pages/Admin/UserManagement/StudentUpdate";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Depertment",
        path: "create-academic-depertment",
        element: <CreateAcademicDepertment />,
      },
      {
        name: "Academic Deperment",
        path: "academic-depertment",
        element: <AcademicDepertment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Student Data",
        path: "student-data",
        element: <StudentDataTable />,
      },
      {
        path: "student-update/:studentId",
        element: <StudentUpdate />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Courses",
        path: "create-courses",
        element: <CreateCourses />,
      },
    ],
  },
  {
    name: "Courses Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semester",
        path: "registered-semester",
        element: <RegisteredSemester />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Course />,
      },
      {
        name: "Create Courses",
        path: "create-courses",
        element: <CreateCourses />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourses />,
      },
    ],
  },
];

// export const adminRoutes = adminPath.reduce((acc : TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//            path : item.path,
//            element : item.element
//        })
//    }
//    if (item.childern) {
//        item.childern.forEach((child) => {
//          acc.push({
//            path : child.path,
//            element : child.element
//          })
//        })}
//     return acc
// }, [])

// export const adminSidebarItems = adminPath.reduce((acc : TItems[], item) => {

//     if (item.name && item.path) {
//          acc.push({
//                 key : item.name,
//                 label : <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }
//     if (item.children) {
//         acc.push({
//             key : item.name,
//             label : item.name,
//             children : item.children.map((child) => ({
//                 key : child.name,
//                 label : <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//             }))
//     })
//     }

//     return acc;
// }, [])

// export const adminPath = [
//     {
//         path : "dashboard",
//         element : <AdminDashboard/>
//     },
//     {
//         path : "create-student",
//         element : <CreateStudent/>
//     },
//     {
//         path : "create-faculty",
//         element : <CreateFaculty/>
//     },
//     {
//         path : "create-Courses",
//         element : <CreateCourses/>
//     },
//     {
//         path : "create-semester",
//         element : <CreateSemester/>
//     }
// ]
