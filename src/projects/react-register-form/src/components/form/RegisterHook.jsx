import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      gender: "",
    },
  });
  const onSubmit = (data) => console.log(data);
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
        <p className="text-red-500 text-xs">Please enter your username</p>
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
        <p className="text-red-500 text-xs">Please enter your password</p>
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
        <p className="text-red-500 text-xs">Please enter your email</p>
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              // {...register("gender")}
              name="gender"
              control={control}
              value="male"
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              // {...register("gender")}
              name="gender"
              control={control}
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <div className="flex items-center gap-3">
          <CheckboxHook
            name="terms"
            id="terms"
            control={control}
          ></CheckboxHook>
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        <p className="text-red-500 text-xs">Please enter your email</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-blue-200"
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
