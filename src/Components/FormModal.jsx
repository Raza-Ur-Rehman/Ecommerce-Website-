import React from "react";
import { useForm } from "react-hook-form";

const FormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted", data);
    reset();
  };
  console.log(errors);
  return (
    <div>
      <div className=" flex justify-center py-6 my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-xl rounded-md flex flex-col justify-center gap-4 w-[500px] h-[450px] p-4">
            <h1 className="text-4xl font-semibold text-center my-3">
              Contact Us
            </h1>
            <input
              type="text"
              placeholder="First Name"
              {...register("FirstName", { required: true, maxLength: 20 })}
              aria-invalid={errors.FirstName ? "true" : "false"}
              className={`p-2 ${
                errors.FirstName ? "error" : "border-gray-500"
              } border rounded`}
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("LastName", { required: true, maxLength: 20 })}
              aria-invalid={errors.FirstName ? "true" : "false"}
              className={`p-2 ${
                errors.FirstName ? "error" : "border-gray-500"
              } border rounded`}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              aria-invalid={errors.Email ? "true" : "false"}
              className={`p-2 ${
                errors.Email ? "error" : "border-gray-500"
              } border rounded`}
            />
            <div className="flex">
            <input
              {...register("Gender", { required: true })}
              type="radio"
              value="Male"
              aria-invalid={errors.Email ? "true" : "false"}
              className={`p-2 ${
                errors.Email ? "error" : "border-gray-500"
              } border rounded mt-4`}
            />
            <input
              {...register("Gender", { required: true })}
              type="radio"
              value="Female"
              aria-invalid={errors.Email ? "true" : "false"}
              className={`p-2 ${
                errors.Email ? "error" : "border-gray-500"
              } border rounded mt-4`}
            />
            </div>

            <input
              type="submit"
              className="mt-4 p-2 bg-[#1C2023] border-none text-white rounded-md cursor-pointer"
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
