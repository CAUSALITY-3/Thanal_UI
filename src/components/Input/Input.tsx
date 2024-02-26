import { FC, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  formData: FormData;
  setFormData: Function;
}

interface FormData {
  label: string;
  key: string;
  value: string;
  validation: Function[];
  required: boolean;
  invalid: boolean;
  message: string;
}

export const Input: FC<Props> = ({ formData, setFormData }) => {
  const { label, key, value, message, required, invalid, validation } =
    formData;

  const handleChange = (fieldName: string, inputValue: string) => {
    if ("phone pincode".includes(fieldName)) {
      inputValue = inputValue.replace(/[^\d]/, "");
    }
    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value: inputValue,
      },
    }));
    invalid ? handleValidation(fieldName, inputValue) : null;
  };

  const handleBlur = (fieldName: string, inputValue: string) => {
    handleValidation(fieldName, inputValue);
  };

  const handleValidation = (fieldName: string, inputValue: string) => {
    if (required) {
      const isInValid = !!validation.find(
        (fn: any) => fn(inputValue) === false
      );
      if (isInValid) {
        setFormData((prevState: any) => ({
          ...prevState,
          [fieldName]: {
            ...prevState[fieldName],
            invalid: true,
          },
        }));
      } else {
        setFormData((prevState: any) => ({
          ...prevState,
          [fieldName]: {
            ...prevState[fieldName],
            invalid: false,
          },
        }));
      }
    }
  };

  const styles = stylex.create({
    formControl: {
      display: "flex",
      paddingTop: "16px",
      flexDirection: "column",
    },
    formlabel: {
      color: "grey",
    },
    formInvalidMessage: {
      color: "#F08080",
      fontSize: "12px",
      marginTop: "3px",
    },
    formInput: {
      width: "90%",
      height: "35px",
      marginTop: "8px",
      background: "rgba(0, 0, 0, .03)",
      "border-radius": "5px",
      border: "none",
      "-webkit-transition-property": "background, box-shadow",
      "-webkit-transition-duration": "400ms, 400ms ",
      ":focus": {
        "box-shadow": "0px 0px 1px 1px grey",
        background: "rgba(0, 0, 0, 0.1)",
        outline: "none",
      },
    },
  });

  return (
    <div {...stylex.props(styles.formControl)}>
      <label {...stylex.props(styles.formlabel)}>
        {label}
        {required && <span style={{ color: "#F08080" }}>*</span>}
      </label>
      {invalid && <p {...stylex.props(styles.formInvalidMessage)}>{message}</p>}
      <input
        {...stylex.props(styles.formInput)}
        type="text"
        value={value}
        onBlur={(e) => handleBlur(key, e.target.value)}
        onChange={(e) => handleChange(key, e.target.value)}
      />
    </div>
  );
};
