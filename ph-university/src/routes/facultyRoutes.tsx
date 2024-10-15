
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import UpdateMarks from "../pages/faculty/UpdateMarks";

export const facultyPath = [
    {
        name : "Dashboard",
        path : "dashboard",
        element : <FacultyDashboard/>
    },
    {
        name : "User Management",
        children : [
            {
                name : "My Courses",
                path : "my-courses",
                element : <MyCourses/>
            },
            {
                name : "Update Marks",
                path : "update-marks",
                element : <UpdateMarks/>
            },
        ]
    },
]