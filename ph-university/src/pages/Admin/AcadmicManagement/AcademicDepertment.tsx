import { useGetAllAcademicDepertmentQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicDepertment = () => {
  const { data: depertmentData, isLoading } =
    useGetAllAcademicDepertmentQuery(undefined);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      {depertmentData?.data?.map((item) => (
        <div key={item._id}>
          {item.academicFaculty ? (
            <h4>{item.academicFaculty.name}</h4>
          ) : (
            <h1>No faculty assigned</h1>
          )}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AcademicDepertment;
