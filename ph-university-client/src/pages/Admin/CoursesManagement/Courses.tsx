import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagement.api";

const Course = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  console.log(courses);
  const dataSource = courses?.data?.map((item) => ({
    title: item.title,
    code: item.code,
  }));

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (item) => {
        return <CourseModal data={item} />;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

const CourseModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: faculties } = useGetAllFacultyQuery(undefined);
  console.log("faculties", faculties);
  const facultyOptions = faculties?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
        <PHForm onSubmit={handleSubmit}>
          <InputForm name="facultyId" label="Faculty" />
          <PHSelect
            name="facultyId"
            label="Faculty"
            mode="multiple"
            options={facultyOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Course;
