import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
        }
      )
      .required("Please enter your password"),
    email: yup.string().email("").required("Please enter your email"),
    gender: yup
      .string()
      .required("Please choose your gender")
      .oneOf(["male", "female"], "You must be select one value male or female"),
    terms: yup.bool().oneOf([true], "Terms must be checked"),
    job: yup.string().required("Must be select your job"),
  })
  .required();

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

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      gender: "male",
      job: "",
      terms: false,
    },
  });
  const onSubmit = async (data) => {
    if (isValid) {
      await new Promise((res) => {
        setTimeout(() => {
          console.log("isSubmitting");
          res();
        }, 3000);
      });
      reset();
    }
  };
  const radioField = watch("gender");
  console.log("render");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] mx-auto p-5">
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="username">Username</label>
        <InputHook
          control={control}
          id="username"
          name="username"
          placeholder="Enter your username"
        />
        {errors && errors?.username && (
          <p className="text-red-500 text-xs">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="password">Password</label>
        <InputHook
          control={control}
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        {errors && errors?.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="email">Email address</label>
        <InputHook
          control={control}
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {errors && errors?.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              checked={radioField === "male"}
              name="gender"
              control={control}
              value="male"
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              checked={radioField === "female"}
              name="gender"
              control={control}
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors && errors?.gender && (
          <p className="text-red-500 text-xs">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="job">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name={"job"}
          data={dropdownData}
        ></DropdownHook>
        {errors && errors?.job && (
          <p className="text-red-500 text-xs">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <div className="flex items-center gap-3">
          <CheckboxHook
            name="terms"
            id="terms"
            control={control}
            text={"I accept the terms and conditions"}
          ></CheckboxHook>
        </div>
        {errors && errors?.terms && (
          <p className="text-red-500 text-xs">{errors.terms.message}</p>
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
    </form>
  );
};

export default RegisterHook;
