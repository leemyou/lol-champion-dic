import React from "react";
import {
  Checkbox,
  type CheckboxProps,
  FormControlLabel,
  type FormControlLabelProps,
} from "@mui/material";

type LabelCheckboxProps = Omit<FormControlLabelProps, "control"> & {
  checkboxColor?: CheckboxProps["color"];
  isDefaultChecked?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const LabelCheckbox: React.FC<LabelCheckboxProps> = ({
  label = "label",
  checkboxColor = "default",
  isDefaultChecked = false,
  isRequired = false,
  isDisabled = false,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={isDefaultChecked}
          required={isRequired}
          disabled={isDisabled}
          color={checkboxColor}
        />
      }
      label={label}
    />
  );
};
