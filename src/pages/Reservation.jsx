import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());

  //   REACT HOOK FORM
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      date: "",
      name: "",
      email: "",
    },
  });

  // REACT HOOK FORM END

  // EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //   EMAIL JS END

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  console.log(isSubmitSuccessful);

  return (
    <div
      id="reservation"
      className="w-full pt-8 sm:pt-0 bg-primary sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center"
    >
      <div className="flex flex-col items-center justify-center pb-16 space-y-4 ">
        <h2 className="text-2xl sm:text-5xl">Reservierung</h2>
        <p>Reserviere dir doch gleich einen Tisch bei uns!</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-4 pb-16">
        <div className="w-full">
          <form
            autoComplete="off"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="max-w-2xl mx-auto space-y-2 text-black "
          >
            <Controller
              register
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  {...register("date", { required: true })}
                  placeholderText="Wähle ein Datum aus"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  showTimeSelect
                  dateFormat="Pp"
                  className="w-full px-3 py-2 text-black rounded-md cursor-pointer focus:outline-none"
                />
              )}
            />
            <p className="w-full text-center text-white">
              {errors.date && "Wähle ein Datum aus!"}
            </p>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Gib hier bitte deinen Namen ein"
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none"
            />
            <p className="w-full text-center text-white">
              {errors.name && "Ein Name ist erforderlich!"}
            </p>
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="Füge hier deine Email Adresse ein"
              className="w-full px-3 py-2 rounded-md focus:outline-none"
            />

            <p className="w-full text-center text-white">
              {errors.email && "Eine Email-Adresse ist erforderlich!"}
            </p>

            <input
              type="submit"
              value="Send"
              className={
                errors.date || errors.name || errors.email
                  ? "w-full px-3 py-2 text-white border-2 rounded-md cursor-pointer  focus:outline-none pointer-events-none border-red-500"
                  : "w-full px-3 py-2 text-white border-2 rounded-md cursor-pointer  focus:outline-none hover:border-green-500"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
