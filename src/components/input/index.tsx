import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { forwardRef } from "react";

type IProps = {
  control: any;
  name: string;
  label: string | undefined | any;
};

export const Input = forwardRef(({ control, name, label }: IProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <TextField
      label={label}
      inputRef={ref}
      {...inputProps}
      error={!!error}
    //   helperText={error ? error.message : ""}
      variant="standard"
      InputLabelProps={{
        style: {
          color: error ? "#f16565" : "#7C808A",
          paddingLeft: "20px",
          fontSize: error ? '12px' : '14px',
        },
      }}
      color="error"
      sx={{
        padding: "0",
        fontFamily: "Arial",
        fontSize: "16px",
        height: "35px",
      }}
    />
  );
});
