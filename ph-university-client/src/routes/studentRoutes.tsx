import CreateEnrolledCourses from "../pages/student/CreateEnrolledCourses";
import MyOfferedCourses from "../pages/student/MyOfferedCourses";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPath = [
    {
        name : "Dashboard",
        path : "dashboard",
        element : <StudentDashboard/>
    },
    {
        name : "User Management",
        children : [
            {
                name : "Enrolled Courses",
                path : "Enrolled-courses",
                element : <CreateEnrolledCourses/>
            },
            {
                name : "offered courses",
                path : "offered-coursees",
                element : <MyOfferedCourses/>
            },
        ]
    },
]