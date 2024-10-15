import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddAcademicDepertmentMutation,
  useGetAllAcademicFacultiyQuery,
} from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicDepertment = () => {
  const { data: academicFaculty, isFetching } =
    useGetAllAcademicFacultiyQuery(undefined);
  const [addDepertment, { data, error }] = useAddAcademicDepertmentMutation();
  //   console.log(data, error);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const DepertmentData = {
      name: data.name,
      academicFaculty: data.data.academicFaculty,
    };
    console.log(DepertmentData);
    try {
      const response = await addDepertment(DepertmentData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const facultyOptions = academicFaculty?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
  console.log(facultyOptions);

  return (
    <PHForm onSubmit={onSubmit}>
      <PHSelect
        label="Faculty"
        name="data.academicFaculty"
        options={facultyOptions}
        disabled={isFetching}
      />
      <InputForm type="text" label="Name OF Depertment" name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicDepertment;
