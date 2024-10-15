import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
export type TPHSlectProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | "tags" | undefined;
};

const PHSelect = ({ label, name, options, disabled, mode }: TPHSlectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "400" }}
            {...field}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
