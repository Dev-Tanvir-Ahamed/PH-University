import { DatePicker, Form } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label?: string;
}

const PHDatePicker: React.FC<DatePickerProps> = ({ name, label }) => {
  // const { register } = useFormContext(); // Accessing useFormContext

  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
