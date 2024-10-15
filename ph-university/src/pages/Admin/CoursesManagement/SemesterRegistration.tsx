import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semister";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement.api";

const SemesterRegistration = () => {
  const { data: semesterData } = useGetAllAcademicSemesterQuery([
    {
      name: "sort",
      value: "year",
    },
  ]);
  const [registeredCourse] = useAddSemesterRegistrationMutation();
  console.log(semesterData);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const registerCourseData = {
      academicSemester: data.academicSemester,
      status: data.status,
      startDate: data.startDate,
      endDate: data.endDate,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    try {
      const response = await registeredCourse(registerCourseData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const semesterOptions = semesterData?.data?.map((item) => ({
    label: `${item.name} ${item.year}`,
    value: item._id,
  }));
  const semesterStatusOption = semesterStatusOptions?.map((item) => ({
    label: item.label,
    value: item.value,
  }));
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="academicSemester"
            label="Academic Semester"
            options={semesterOptions}
          />
          <PHSelect
            name="status"
            label="Semester Status"
            options={semesterStatusOption}
          />
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <InputForm type="number" name="minCredit" label="Min Credit" />
          <InputForm type="number" name="maxCredit" label="Max Credit" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
