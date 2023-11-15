import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinalV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Please enter your first name"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Please enter your last name"),
        email: Yup.string()
          .email("Your email is invalid")
          .required("Please enter your email"),
        intro: Yup.string(),
        job: Yup.string(),
        terms: Yup.bool().oneOf([true], "Field must be checked"),
      })}
      onSubmit={async (values, formik) => {
        console.log(
          "🚀 ~ file: SignUpFormFinalV2.js:31 ~ SignUpFormFinalV2 ~ action:",
          formik
        );
        await setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          formik.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          formik.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First name"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              label="Last name"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            <MyInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></MyInput>
            <MyTextarea
              label="Intro"
              name="intro"
              id="intro"
              type="textarea"
              placeholder="Introduce yourself..."
            ></MyTextarea>
            <MySelect
              label="Job"
              name="job"
              id="job"
              placeholder="Enter your job"
            >
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </MySelect>
            <MyCheckbox
              name="terms"
              id="terms"
              type="checkbox"
              children=" I accept the terms and conditions"
            ></MyCheckbox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label
        htmlFor={props.id || props.name}
        className="flex items-center gap-2"
      >
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px]"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      ></select>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default SignUpFormFinalV2;
