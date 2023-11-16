import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Required")
      .max(20, "Must be 20 characters or less"),
    lastName: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
  })
  .required();

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
          })}
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
        />
        {errors.firstName && (
          <div className="text-sm text-red-500">
            {errors?.firstName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
        />
        {errors.lastName && (
          <div className="text-sm text-red-500">
            {errors?.lastName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Email</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-100"
        />
        {errors.email && (
          <div className="text-sm text-red-500">{errors?.email?.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpFormHook;
