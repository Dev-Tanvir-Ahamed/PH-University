import { PlusOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { Form, Modal, Upload } from "antd";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UploadImageProps {
  name: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ name }) => {
  const { control } = useFormContext(); // Access useFormContext
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Form.Item label="Upload Image">
            <Upload
              listType="picture-card"
              maxCount={1}
              fileList={value || fileList}
              onPreview={handlePreview}
              onChange={({ fileList: newFileList }) => {
                setFileList(newFileList);
                onChange(newFileList); // Update react-hook-form value
              }}
              beforeUpload={() => false} // Prevent automatic upload
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
        )}
      />
      <Modal
        visible={previewOpen}
        title="Image Preview"
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImage;
