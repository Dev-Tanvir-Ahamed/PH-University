import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import UploadImage from "../../../components/form/UploadImage";
import { bloodGroupsOptions, genderOptions } from "../../../constants/global";
import {
  useGetAllAcademicDepertmentQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

const CreateStudent = () => {
  const studentData = {
    password: "student123",
    student: {
      name: {
        firstName: "I am ",
        middleName: "Student",
        lastName: "Number 1",
      },
      gender: "male",
      dateOfBirth: "1990-01-01",

      email: "student2@gmail.com",
      contactNo: "1235678",
      emergencyContactNo: "987-654-3210",
      bloogGroup: "A+",
      presentAddress: "123 Main St, Cityville",
      permanentAddress: "456 Oak St, Townsville",

      guardian: {
        fatherName: "James Doe",
        fatherOccupation: "Engineer",
        fatherContactNo: "111-222-3333",
        motherName: "Mary Doe",
        motherOccupation: "Teacher",
        motherContactNo: "444-555-6666",
      },
      localGuardian: {
        name: "Alice Johnson",
        occupation: "Doctor",
        contactNo: "777-888-9999",
        address: "789 Pine St, Villageton",
      },
      admissionSemester: "65b0104110b74fcbd7a25d92",
      academicDepartment: "65b00fb010b74fcbd7a25d8e",
    },
  };

  const defaultStudentData = {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    // dateOfBirth: "1990-01-01",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  };
  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log(data, error);

  const { data: semesterData, isLoading } =
    useGetAllAcademicSemesterQuery(undefined);
  const { data: depertmentData } = useGetAllAcademicDepertmentQuery(undefined);
  console.log(semesterData);

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const depertmentOptions = depertmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("data", data);

    const studentData = {
      password: "student123",
      student: data,
    };
    console.log("datstudentDataa", studentData);

    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    // Access the uploaded image
    const profileImg = data.profileImg?.[0]?.originFileObj;
    console.log("profileImg", profileImg);
    // Append the image file if it exists
    if (profileImg) {
      formData.append("file", profileImg);
    }
    // console.log(Object.fromEntries(formData));
    try {
      const response = await addStudent(formData).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultStudentData}>
          <Divider>Personal Info. </Divider>
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
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of birth" />
            </Col>
          </Row>
          <Divider>Contact Info. </Divider>
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
          <Divider>Guardian </Divider>
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
          <Divider>Local Gurdian</Divider>
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
                name="localGurdian.address"
                label="Address"
              />
            </Col>
          </Row>
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={semesterOptions}
                name="admissionSemester"
                label="Admission Semester"
                disabled={isLoading}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={depertmentOptions}
                name="academicDepartment"
                label="Academic Depertment"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
