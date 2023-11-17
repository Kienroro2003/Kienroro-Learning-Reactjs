import { Form, Formik } from "formik";
import * as yup from "yup";
import InputFormik from "../input/InputFormik";
import RadioFormik from "../radio/RadioFormik";
import DropdownFormik from "../dropdown/DropdownFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];

const validationSchema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //   {
      //     message:
      //       "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
      //   }
      // )
      .required("Please enter your password"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    gender: yup
      .string()
      .required("Please choose your gender")
      .oneOf(["male", "female"], "You must be select one value male or female"),
    terms: yup.bool().oneOf([true], "Terms must be checked"),
    // job: yup.string().required("Must be select your job"),
  })
  .required();

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        gender: "male",
        job: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        values,
        ...formikProps
        /* and other goodies */
      }) => {
        return (
          <Form className="w-[500px] mx-auto p-5">
            <InputFormik
              label={"Username"}
              name={"username"}
              id={"username"}
              placeholder={"Please enter your username"}
            ></InputFormik>
            <InputFormik
              label={"Password"}
              name={"password"}
              id={"password"}
              type={"password"}
              placeholder={"Please enter your password"}
            ></InputFormik>
            <InputFormik
              label={"Email"}
              name={"email"}
              id={"email"}
              placeholder={"Please enter your email"}
              type={"email"}
            ></InputFormik>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  checked={values.gender == "male"}
                  name="gender"
                  value="male"
                  label={"Male"}
                ></RadioFormik>
                <RadioFormik
                  checked={values.gender == "female"}
                  name="gender"
                  value="female"
                  label={"Female"}
                ></RadioFormik>
              </div>
              {errors && errors?.gender && (
                <p className="text-red-500 text-xs">{errors.gender.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <DropdownFormik
                name={"job"}
                data={dropdownData}
                setFieldValue={setFieldValue}
                labelText="Are you"
              ></DropdownFormik>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <CheckboxFormik
                text={"I accept the terms and conditions"}
                name={"terms"}
                id={"terms"}
              ></CheckboxFormik>
              {errors && errors?.terms && (
                <p className="text-red-500 text-xs">{errors.terms}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-blue-200 ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
