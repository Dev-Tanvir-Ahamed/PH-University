import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semister";

import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { academicSemesterSchema } from "../../../schemas/academicSemisterScjema";
import { TResponse } from "../../../types";

const CreateAcademicSemester = () => {
  const [addAcademicSemister] = useAddAcademicSemesterMutation();
  const currentYear = new Date().getFullYear();
  const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data.name) - 1].label;
    const academicSemesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      console.log(academicSemesterData);
      const res = (await addAcademicSemister(
        academicSemesterData
      )) as TResponse;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("semester created succesfully");
      }
    } catch (error) {
      toast.error("somthing went wrong");
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemesterSchema)}
          >
            <PHSelect name="name" label="Name" options={semesterOptions} />
            <PHSelect name="year" label="Year" options={yearOptions} />
            <PHSelect
              name="startMonth"
              label="Start Month"
              options={monthOptions}
            />
            <PHSelect
              name="endMonth"
              label="End Month"
              options={monthOptions}
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicSemester;
