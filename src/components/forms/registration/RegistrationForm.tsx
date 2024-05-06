"use client";
import { useState } from "react";
import axios from "axios";
import ImagesUpload from "./ImagesUpload";

interface FormErrors {
  name?: string[];
  bn_name?: string[];
  email?: string[];
  phone?: string[];
  address?: string[];
  nid?: string[];
  gender?: string[];
  file?: string[];
}

interface FormData {
  name: string;
  bn_name: string;
  email: string;
  phone: string;
  address: string;
  nid: string;
  gender: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    bn_name: "",
    email: "",
    phone: "",
    address: "",
    nid: "",
    gender: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data

    const emptyFields = Object.keys(formData).filter(
      (key) => !formData[key as keyof typeof formData]
    );
    if (emptyFields.length > 0) {
      const errorObj: any = {};
      emptyFields.forEach((field) => {
        errorObj[field] = ["This field is required."];
      });
      setErrors(errorObj);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4007/auth/create-registration",
        formData
      );
      setFormData({
        name: "",
        bn_name: "",
        email: "",
        phone: "",
        address: "",
        nid: "",
        gender: "",
      });

      setSuccessMessage("Your registration was successful. Thank you!");
    } catch (error: any) {
      setErrorMessage(
        error.response.data.message ||
          "Your registration was not successful. Please try again."
      );
      setErrors(error.response.data.errors || {});
    }
  };

  const inputClass =
    "mt-2 px-2 py-2 bg-gray-100 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300";

  return (
    <div className="container mx-auto px-2">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        encType="multipart/form-data"
      >
        <div className="">
          <input
            type="text"
            name="name"
            required
            results={5}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <input
          type="text"
          name="bn_name"
          required
          placeholder="Bengali Name"
          value={formData.bn_name}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="text"
          name="phone"
          required
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="text"
          name="address"
          required
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="text"
          name="nid"
          required
          placeholder="National ID"
          value={formData.nid}
          onChange={handleChange}
          className={inputClass}
        />

        <div className="mb-4">
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            className={inputClass}
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 justify-center items-center m-auto"
        >
          Submit
        </button>
        {successMessage && (
          <p className="mt-4 text-green-500 text-3xl">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-3xl">{errorMessage}</p>
        )}
      </form>

      <div>
        <ImagesUpload />
      </div>
    </div>
  );
};

export default RegistrationForm;
