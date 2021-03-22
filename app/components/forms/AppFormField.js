import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
function AppFormField({ name,width, ...otherProps }) {
  const { setFieldTouched,setFieldValue,values, handleChange, errors, touched,handleSubmit } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={text => setFieldValue(name,text)}
        values = {values[name]}
        onBlur={() => handleSubmit(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
