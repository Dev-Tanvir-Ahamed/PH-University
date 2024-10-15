import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TPreRequisiteCourse } from "../../../types";

const CreateCourses = () => {
  const { data: courseData } = useGetAllCoursesQuery(undefined);
  const [addCourse] = useAddCourseMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const course = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.prepreRequisiteCourses
        ? data.preRequisiteCourses?.map((item: TPreRequisiteCourse) => ({
            course: item._id,
            isDeleted: false,
          }))
        : [],
    };
    console.log(course);
    try {
      const res = await addCourse(course);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const courseOptions = courseData?.data?.map((course) => ({
    label: course.title,
    value: course.title,
  }));
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <InputForm name="title" label="Title" type="text" />
          <InputForm name="code" label="Code" type="number" />
          <InputForm name="credits" label="Credit" type="number" />
          <InputForm name="prefix" label="Prefix" type="text" />
          <PHSelect
            name="preRequisiteCourses"
            label="PreRequisiteCourses"
            options={courseOptions}
            mode="multiple"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourses;
