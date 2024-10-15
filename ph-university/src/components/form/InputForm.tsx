import { Form } from "antd";
import Input from "antd/es/input/Input";
import React from "react";
import { Controller } from "react-hook-form";

interface InputFormProps {
  name: string;
  label?: string;
  type?: string;
}

const InputForm: React.FC<InputFormProps> = ({ name, label, type }) => {
  // const { register } = useFormContext(); // Accessing useFormContext

  return (
    <div>
      {/* {label && <label htmlFor={name}>{label}</label>} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} name={name} id={name} type={type} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputForm;
