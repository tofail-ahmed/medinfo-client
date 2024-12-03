import React, { useState } from "react";
import vaccine_img from "../../../../public/assets/vaccine_nurse.png";
import logo from "../../../../public/assets/medinfo.png";
import { GiLoveInjection } from "react-icons/gi";

const Covid = () => {
  const [formData, setFormData] = useState({
    location: "",
    option: "",
    name: "",
    email: "",
    phone: "",
   
    terms: false,
  });

  const [errors, setErrors] = useState({
    location: "Location is required.",
    option: "Please select an option.",
    name: "Name is required.",
    email: "Email is required.",
    phone: "Phone is required.",
   
    terms: "You must accept the terms.",
  });

  const validate = (name, value) => {
    if (name === "location" && value.trim() === "") {
      return "Location is required.";
    }
    if (name === "option" && value === "") {
      return "Please select an option.";
    }
    if (name === "name" && value.trim() === "") {
      return "Name is required.";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required.";
      if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format.";
    }
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required.";
       // Validate at least 10 digits
  const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
  if (digitsOnly.length < 10) return "Phone must contain at least 10 digits.";
    }
    
    if (name === "terms" && !value) {
      return "You must accept the terms.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    const error = validate(name, fieldValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isSubmitDisabled = () => {
    if (!formData.location || !formData.option) return true;
    if (formData.option === "first") {
      return (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.terms ||
        errors.name ||
        errors.email ||
        errors.phone ||
        errors.terms
      );
    }
     else if (formData.option === "second") {
      return !formData.terms || errors.terms;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mt-20">
      {/* <h1 className="text-4xl text-center my-20 text-red-700 font-extrabold">
        This is covid emergency service page{" "}
      </h1> */}
      <div className=" bg-green-600  rounded-t-md flex justify-around items-center w-[70%]  mx-auto lg:h-[150px] h-[100px]">
        <h1 className=" text-white lg:text-3xl text-xl font-extrabold w-[50%]">
          Schedule Vaccination Appointments
        </h1>
        <span>
          <img
            className="w-[200px] lg:h-[150px] h-[100px] "
            src={vaccine_img}
            alt=""
          />
        </span>
      </div>
      <span className="flex justify-center items-center gap-[4px]">
            <span className="text-2xl font-bold " >
<GiLoveInjection/>
            </span>
            <button className="text-lg hover:text-blue-600 font-bold hover:underline">
            Get vaccination information, including records and appointments
            </button>
      </span>
      <div className=" bg-slate-100  my-12 rounded-t-md flex justify-around items-center w-[60%]  mx-auto lg:h-[120px] h-[100px]">
        
        <span>
          <img
            className="w-[200px] lg:h-[100px] h-[100px] "
            src={logo}
            alt=""
          />
        </span>
        <h1 className=" text-slate-900 lg:text-lg text-sm font-bold w-[60%]">
        Get your flu shot or any vaccine and get a coupon for 20% off your next purchase of $20 or more up to $100 as a myWalgreens member2
        </h1>
      </div>
      <div className="my-8 w-[70%] mx-auto">


        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Location Field */}
          <div>
            <label className="font-bold">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
            {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
          </div>

          {/* Select Option */}
          <div>
            <label className="font-bold">Select an Option:</label>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
            >
              <option value="">-- Select --</option>
              <option value="first">An Individual(All Options)</option>
              <option value="second">A group of upto 4 peoples(flu and COVID-19 vaccine only) </option>
            </select>
            {errors.option && <p className="text-red-600 text-sm">{errors.option}</p>}
          </div>

          {/* Additional Fields for First Option */}
          {formData.option === "first" && (
            <>
              <div>
                <label className="font-bold">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded px-2 py-1"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="font-bold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded px-2 py-1"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="font-bold">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded px-2 py-1"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  Accept Terms and Conditions
                </label>
                {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
              </div>
            </>
          )}

          {/* Message Field for Second Option */}
          {formData.option === "second" && (
            <div>
              {/* <label className="font-bold">Message:</label> */}
              {/* <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>} */}
              <div className="my-8">
     
      <div className="bg-green-100 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Scheduling for a Group</h2>
        <p className="mb-2">
          <strong>Flu Shot:</strong> Anyone aged <strong>3 years or older</strong> can be scheduled for the flu shot.
        </p>
        <p>
          <strong>COVID-19 Vaccine:</strong>
          <ul className="list-disc pl-5">
            <li>Patients must be aged <strong>5 years or older</strong> to be scheduled for the COVID-19 vaccine as part of a group.</li>
            <li>To schedule the COVID-19 vaccine for patients aged <strong>3-4 years</strong>, select the <strong>individual option</strong>.</li>
          </ul>
        </p>
      </div>
      <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  Accept Terms and Conditions
                </label>
                {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
              </div>
    </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitDisabled()}
            className={`px-4 py-2 font-bold rounded ${
              isSubmitDisabled() ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 text-white"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Covid;
