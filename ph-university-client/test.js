const adminPath2 = [
    {
        name : "Dashboard",
        path : "dashboard",
        element : "AdminDashboard"
    },
    {
        name : "User Management",
        childern : [
            {
                name : "Create Student",
                path : "create-student",
                element : "CreateStudent"
            },
                {
                    name : "Create Faculty",
                    path : "create-faculty",
                    element : "CreateFaculty"
                    },
                    {
                        name : "Create Courses",
                        path : "create-courses",
                        element : "CreateCourses"
                        },
                        {
                            name : "Create Semester",
                            path : "create-semester",
                            element : "CreteSemester"
                            },
        ]
    },
]


const adminRoutes = adminPath2.reduce((acc, item) => {
    if (item.path && item.element) {
         acc.push({
            path : item.path,
            element : item.element
        })
    }
    if (item.childern) {
        item.childern.forEach((child) => {
          acc.push({
            path : child.path,
            element : child.element
          })
        })
    }
    return acc
}, [])

console.log("adminROutes", adminRoutes);




const items  = [
    {
        key : "Dashboard",
        label : `<NavLink to="/admin/dashboard">Dashboard</NavLink>`
    },
    {
      key : "User Management",
      label : "User Management",
      children : [
        {
          key : "Create Student",
          label : `<NavLink to="/admin/create-student">Create Student</NavLink>`
      },
      {
        key : "Faculty",
        label : `<NavLink to="/admin/create-faculty">Faculty</NavLink>`
    },
    {
      key : "Create Semester",
      label : `<NavLink to="/admin/create-semester">Create Semester</NavLink>`
    },
      ]
    }
]

const adminSidebarItems = adminPath2.reduce((acc, item) => {

    if (item.name && item.path) {
         acc.push({
                key : item.name,
                label : "NavLink"
        })
    }
    if (item.childern) {
        acc.push({
            key : item.name,
            label : item.name,
            children : item.childern.map((child) => ({
                key : child.key,
                label : "NavLink"   
            }))
    })
    }

    return acc;
}, [])

console.log("adminSidebarItems", adminSidebarItems);
