import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputForm from "../../../components/form/InputForm";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import UploadImage from "../../../components/form/UploadImage";
import { bloodGroupsOptions, genderOptions } from "../../../constants/global";
import {
  useGetAllAcademicDepertmentQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement.api";
import {
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
} from "../../../redux/features/admin/userManagement.api";

const StudentUpdate = () => {
  const { studentId } = useParams<{ studentId: string }>(); // Get studentId from URL
  const { data: studentData, isLoading: studentLoading } =
    useGetSingleStudentQuery(studentId);
  console.log(studentData);
  // Fetch the student data
  const [updateStudent, { data }] = useUpdateStudentMutation(); // For updating the student
  // console.log("updated data", data);

  const { data: semesterData, isLoading: semesterLoading } =
    useGetAllAcademicSemesterQuery(undefined);
  const { data: departmentData } = useGetAllAcademicDepertmentQuery(undefined);

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatedData = {
      ...data,
    };
    console.log("onsubmit", updatedData);

    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData));

    // Handle profile image update if any
    // const profileImg = data.profileImg?.[0]?.originFileObj;
    // if (profileImg) {
    //   formData.append("file", profileImg);
    // }

    try {
      // const response = await updateStudent({ studentId, formData }).unwrap();
      // console.log("Updated student", response);
    } catch (error) {
      console.log("Error updating student", error);
    }
  };

  if (studentLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentData.data}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UploadImage name="profileImg" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect name="gender" label="Gender" options={genderOptions} />
            </Col>
            {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col> */}
          </Row>

          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm type="text" name="contactNo" label="Contact No." />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloogGroup"
                label="Blood Group"
                options={bloodGroupsOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Divider>Guardian Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No"
              />
            </Col>
          </Row>

          <Divider>Local Guardian Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="localGuardian.contactNo"
                label="Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <InputForm
                type="text"
                name="localGuardian.address"
                label="Address"
              />
            </Col>
          </Row>

          <Divider>Academic Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={semesterOptions}
                name="admissionSemester"
                label="Admission Semester"
                disabled={semesterLoading}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                name="academicDepartment"
                label="Academic Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Update</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default StudentUpdate;
