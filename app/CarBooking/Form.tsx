import BookingCreatedFlagContextType from "@/context-models/BookingCreatedFlagContextType";
import StoreLocationsContextType from "@/context-models/StoreLocationsContextType";
import { BookingCreatedFlagContext } from "@/context/BookingCreatedFlagContext";
import { StoreLocationsContext } from "@/context/StoreLocationsContext";
import Address from "@/models/Address";
import Car from "@/models/Car";
import { FormDataModel } from "@/models/FormDataModel";
import { createBooking } from "@/services";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AddToCart from "../Cart/add-to-cart";

interface FormProps {
  car: Car;
} 

function Form({ car }: FormProps) {
  const [formValue, setFormValue] = useState<FormDataModel>({
    location: "",
    pickUpDate: new Date(),
    dropOffDate: new Date(),
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "",
    carId: "",
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    clearErrors,
    reset,
    getValues,
  } = useForm<FormDataModel>({
    mode: "onChange",
    defaultValues: {
      location: "",
      pickUpDate: new Date(),
      dropOffDate: new Date(),
      pickUpTime: "",
      dropOffTime: "",
      contactNumber: "",
      userName: "",
      carId: "",
    },
  });

  const { showToastMsg, setShowToastMsg, toastMsg, setToastMsg } = useContext(
    BookingCreatedFlagContext
  ) as BookingCreatedFlagContextType;

  const { storesLocs } = useContext(
    StoreLocationsContext
  ) as StoreLocationsContextType;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValue({
      ...formValue,
      carId: car.id,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async () => {
    setFormValue({ ...getValues(), carId: car.id });

    const responseObj = await createBooking({ ...getValues(), carId: car.id });

    (window as any).booking_modal.close();
    if (responseObj) {
      setShowToastMsg(true);
      setToastMsg("Item added to cart successfully!");
    }
    clearErrors();
    reset();
  };

  const handleClose = () => {
    (window as any).booking_modal.close();
    setIsModalOpen(false);
    clearErrors();
    reset();
  };

  return (
    storesLocs[0] && (
      <div>
        <div className="tw-flex tw-flex-col tw-w-full tw-mb-5">
          <label className="tw-text-gray-400">Pick Up Location</label>
          <select
            className="tw-select tw-select-bordered tw-w-full tw-max-w-lg"
            {...register("location", {
              required: "Pick Up location is required",
            })}
            defaultValue={storesLocs[0].location}
          >
            <option key={0} value={storesLocs[0].location}>
              {storesLocs[0].location}
            </option>
            {storesLocs &&
              storesLocs.slice(1).map((address: Address, index: number) => (
                <option key={index + 1} value={address?.location}>
                  {address?.location}
                </option>
              ))}
          </select>
          {errors.location && (
            <small role="alert" className="tw-text-red-700">
              {errors.location.message}
            </small>
          )}
        </div>
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-5 tw-mb-5">
          <div className="tw-flex tw-flex-col tw-w-full">
            <label className="tw-text-gray-400">Pick Up Date</label>
            <input
              type="date"
              placeholder="Type here"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
              {...register("pickUpDate", {
                required: "Pick up date is required",
              })}
              // onChange={handleChange}
            />
            {errors.pickUpDate && (
              <small role="alert" className="tw-text-red-700">
                {errors.pickUpDate.message}
              </small>
            )}
          </div>
          <div className="tw-flex tw-flex-col tw-w-full">
            <label className="tw-text-gray-400">Drop off Date</label>
            <input
              type="date"
              placeholder="Type here"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
              {...register("dropOffDate", {
                required: "Drop off date is required",
              })}
              // onChange={handleChange}
            />
            {errors.dropOffDate && (
              <small role="alert" className="tw-text-red-700">
                {errors.dropOffDate.message}
              </small>
            )}
          </div>
        </div>
        <div className="tw-flex tw-gap-5 tw-mb-5">
          <div className="tw-flex tw-flex-col tw-w-full">
            <label className="tw-text-gray-400">Pick Up Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
              {...register("pickUpTime", {
                required: "Pick up time is required",
              })}
              // onChange={handleChange}
            />
            {errors.pickUpTime && (
              <small role="alert" className="tw-text-red-700">
                {errors.pickUpTime.message}
              </small>
            )}
          </div>
          <div className="tw-flex tw-flex-col tw-w-full">
            <label className="tw-text-gray-400">Drop Off Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
              {...register("dropOffTime", {
                required: "Drop off time is required",
              })}
              // onChange={handleChange}
            />
            {errors.dropOffTime && (
              <small role="alert" className="tw-text-red-700">
                {errors.dropOffTime.message}
              </small>
            )}
          </div>
        </div>
        <div className="tw-w-full tw-mb-5">
          <label className="tw-text-gray-400">User Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
            {...register("userName", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Username must contains letters and spaces only"
              },
              minLength: {
                value: 6,
                message: "Minimum length of username is 6 characters"
              },
              maxLength: {
                value: 65,
                message: "Maximum length of username is 65 characters"
              },
            })}
            // onChange={handleChange}
          />
          {errors.userName && (
            <small role="alert" className="tw-text-red-700">
              {errors.userName.message}
            </small>
          )}
        </div>
        <div className="tw-w-full tw-mb-5">
          <label className="tw-text-gray-400">Contact Number</label>
          <input
            type="text"
            placeholder="Type here"
            className="tw-input tw-input-bordered tw-w-full tw-max-w-lg"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "Invalid mobile number (Only US or Canadaian numbers are accepted)"
              }
              // pattern: /^\(\d{3}\) \d{3}-\d{4}/,
            })}
            // onChange={handleChange}
          />
          {errors.contactNumber && (
            <small role="alert" className="tw-text-red-700">
              {errors.contactNumber.message}
            </small>
          )}
        </div>
        <div className="tw-modal-action tw-justify-start tw-flex tw-flex-col md:tw-flex-row">
          <form method="dialog">
            <button onClick={handleClose} className="tw-btn tw-w-[96%] tw-mr-20 tw-mb-4">
              Close
            </button>
          </form>
          <AddToCart addToCart={handleSubmit(onSubmit)}  data={{
            car: car,
            formData: formValue
          }} isModalOpen={isModalOpen} />
          {/* <button
            className="tw-btn tw-bg-blue-500 tw-text-white hover:tw-bg-blue-800 tw-gap-6"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button> */}
        </div>
      </div>
    )
  );
}

export default Form;
