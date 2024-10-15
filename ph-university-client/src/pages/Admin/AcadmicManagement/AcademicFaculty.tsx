import { useGetAllAcademicFacultiyQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicFaculty = () => {
  const { data: academicFaculties, isLoading } =
    useGetAllAcademicFacultiyQuery(undefined);
  console.log(academicFaculties);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {academicFaculties?.data?.map((item) => (
        <h3 key={item._id}> {item.name}</h3>
      ))}
    </div>
  );
};

export default AcademicFaculty;
