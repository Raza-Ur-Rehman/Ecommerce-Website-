import { useEffect } from "react";
import Header from "../Components/Header";
import { useForm } from "react-hook-form";

const Contact = () => {
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
      <div className="my-3">
        <Header />
      </div>
      <div className=" flex justify-center py-6 my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-xl rounded-md flex flex-col justify-center gap-4 w-[500px] h-[450px] p-4">
            <h1 className="text-4xl font-semibold text-center my-3">Contact Us</h1>
            <input
              type="text"
              placeholder="First name"
              {...register("FirstName", { required: true, maxLength: 20 })}
              aria-invalid={errors.FirstName ? "true" : "false"}
              className={`p-2 ${errors.FirstName ? "error" : "border-gray-500"} border rounded`}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              aria-invalid={errors.Email ? "true" : "false"}
              className={`p-2 ${errors.Email ? "error" : "border-gray-500"} border rounded mt-4`}
            />
            <textarea
              placeholder="Massage"
              {...register("Massage", { required: true, maxLength: 100 })}
              aria-invalid={errors.Massage ? "true" : "false"}
              className={`p-2 ${
                errors.Massage ? "error" : "border-gray-500"
              } border rounded mt-4`}
            />
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

export default Contact;
