import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHForm from "../../../components/form/PHForm";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicFaculty = () => {
  const [academicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    academicFaculty(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <InputForm label="Name of Faculty" name="name" type="text" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicFaculty;
