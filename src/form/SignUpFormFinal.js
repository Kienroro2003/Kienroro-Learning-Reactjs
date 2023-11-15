import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <MyInput
          label={"First name"}
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
        ></MyInput>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last name</label>
          <Field
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email address</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Intro</label>
          <Field
            name="intro"
            id="intro"
            type="text"
            placeholder="Introduce yourself..."
            className="p-4 rounded-md border border-gray-100 h-[150px]"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Job</label>
          <Field
            name="job"
            id="job"
            type="text"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex gap-x-3">
            <Field
              name="terms"
              id="terms"
              type="checkbox"
              className="p-4 rounded-md border border-gray-100"
            ></Field>
            <label htmlFor="terms" className="text-sm text-black">
              I accept the terms and conditions
            </label>
          </div>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("🚀 ~ file: SignUpFormFinal.js:130 ~ MyInput ~ field:", field);
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

export default SignUpFormV2;
