"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormField from "./FormField";

const initialValues = {
  uid: "",
  workHours: "",
  title: "",
  specialCommitments: "",
  skills: "",
  salaryCurrency: "",
  responsibilities: "",
  qualifications: "",
  occupationalCategory: "",
  jobLocation: {
    address: "",
  },
  jobBenefits: "",
  industry: "",
  incentiveCompensation: "",
  experienceRequirements: "",
  employmentType: "",
  educationRequirements: "",
  description: "",
  companyInfo: {
    name: "",
    logo: "",
  },
  companyUrl: "",
  companyDescription: "",
  companySize: "",
  companyLocation: "",
  baseSalary: {
    currency: "",
    amount: "",
    unit: "",
    period: "",
    description: "",
    display: "",
  },
  contactInfo: {
    tel: "",
    email: "",
    address: {
      city: "",
      street: "",
      houseNumber: "",
    },
  },
};

const validationSchema = Yup.object().shape({
  uid: Yup.string().required("UID is required"),
  workHours: Yup.string().required("Work hours are required"),
  title: Yup.string().required("Title is required"),
  specialCommitments: Yup.string().required("Special commitments are required"),
  skills: Yup.string().required("Skills are required"),
  salaryCurrency: Yup.string().required("Salary currency is required"),
  responsibilities: Yup.string().required("Responsibilities are required"),
  qualifications: Yup.string().required("Qualifications are required"),
  occupationalCategory: Yup.string().required(
    "Occupational category is required"
  ),
  jobLocation: Yup.object().shape({
    address: Yup.string().required("Job location address is required"),
  }),
  jobBenefits: Yup.string().required("Job benefits are required"),
  industry: Yup.string().required("Industry is required"),
  incentiveCompensation: Yup.string().required(
    "Incentive compensation is required"
  ),
  experienceRequirements: Yup.string().required(
    "Experience requirements are required"
  ),
  employmentType: Yup.string().required("Employment type is required"),
  educationRequirements: Yup.string().required(
    "Education requirements are required"
  ),
  description: Yup.string().required("Description is required"),
  companyInfo: Yup.object().shape({
    name: Yup.string().required("Company name is required"),
    logo: Yup.string().required("Company logo is required"),
  }),
  companyUrl: Yup.string().required("Company URL is required"),
  companyDescription: Yup.string().required("Company description is required"),
  companySize: Yup.string().required("Company size is required"),
  companyLocation: Yup.string().required("Company location is required"),
  baseSalary: Yup.object().shape({
    currency: Yup.string().required("Base salary currency is required"),
    amount: Yup.string().required("Base salary amount is required"),
    unit: Yup.string().required("Base salary unit is required"),
    period: Yup.string().required("Base salary period is required"),
    description: Yup.string().required("Base salary description is required"),
    display: Yup.string().required("Base salary display is required"),
  }),
  contactInfo: Yup.object().shape({
    tel: Yup.string().required("Contact telephone is required"),
    email: Yup.string().required("Contact email is required"),
    address: Yup.object().shape({
      city: Yup.string().required("Contact address city is required"),
      street: Yup.string().required("Contact address street is required"),
      houseNumber: Yup.string().required(
        "Contact address house number is required"
      ),
    }),
  }),
});

const CreateJob = () => {
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      // Set submitting state to true
      setSubmitting(true);

      // Perform API request to save job data
      const response = await fetch("http://localhost:4007/auth/create-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Handle successful API request
        setSubmitting(true);

        console.log("Job created successfully");
      } else {
        // Handle API request errors
        setSubmitting(false);
        console.error("Failed to create job");
        setSubmissionError("Failed to create job");
      }
    } catch (error) {
      // Handle API request errors
      console.error("Error creating job:", error);
      setSubmitting(false);
      setSubmissionError("Failed to create job");
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create Job</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {submissionError && (
              <div className="text-red-500 mb-4">{submissionError}</div>
            )}
            <Field
              type="text"
              name="uid"
              placeholder="UID"
              className="form-input mb-2"
            />
            <ErrorMessage
              name="uid"
              component="div"
              className="text-red-500 mb-2"
            />
            {/* Add more fields here */}

            <FormField name="workHours" type="text" placeholder="Work hours" />

            <FormField name="title" type="text" placeholder="Title" />
            <FormField
              name="specialCommitments"
              type="text"
              placeholder="Special commitments"
            />

            <FormField name="skills" type="text" placeholder="Skills" />

            <FormField name="salaryCurrency" type="text" placeholder="Salary" />

            <FormField
              name="responsibilities"
              type="text"
              placeholder="Responsibilities"
            />

            <FormField
              name="qualifications"
              type="text"
              placeholder="Qualifications"
            />

            <FormField
              name="occupationalCategory"
              type="text"
              placeholder="Occupational category"
            />

            <FormField
              name="jobLocation.address"
              type="text"
              placeholder="Job location"
            />
            <FormField
              name="jobBenefits"
              type="text"
              placeholder="Job benefits"
            />
            <FormField name="industry" type="text" placeholder="Industry" />

            <FormField
              name="incentiveCompensation"
              type="text"
              placeholder="Incentive compensation"
            />

            <FormField
              name="experienceRequirements"
              type="text"
              placeholder="Experience requirements"
            />

            <FormField
              name="employmentType"
              type="text"
              placeholder="Employment type"
            />

            <FormField
              name="educationRequirements"
              type="text"
              placeholder="Education requirements"
            />

            <FormField
              name="description"
              type="text"
              placeholder="Description"
            />

            <FormField
              name="companyInfo.name"
              type="text"
              placeholder="Company name"
            />

            <FormField
              name="companyInfo.logo"
              type="text"
              placeholder="Company logo"
            />

            <FormField
              name="companyUrl"
              type="text"
              placeholder="Company URL"
            />

            <FormField
              name="companyLocation"
              type="text"
              placeholder="Company location"
            />

            <FormField
              name="baseSalary.currency"
              type="text"
              placeholder="Base salary currency"
            />

            <FormField
              name="baseSalary.amount"
              type="text"
              placeholder="Base salary amount"
            />

            <FormField
              name="baseSalary.unit"
              type="text"
              placeholder="Base salary unit"
            />
            <FormField
              name="baseSalary.period"
              type="period"
              placeholder="Base salary period"
            />
            <FormField
              name="baseSalary.description"
              type="text"
              placeholder="Base salary description"
            />
            <FormField
              name="baseSalary.display"
              type="text"
              placeholder="Base salary display"
            />

            <FormField
              name="contactInfo.tel"
              type="text"
              placeholder="Contact telephone"
            />

            <FormField
              name="contactInfo.email"
              type="text"
              placeholder="Contact email"
            />

            <FormField
              name="contactInfo.address.city"
              type="text"
              placeholder="Contact address city"
            />
            <FormField
              name="contactInfo.address.street"
              type="text"
              placeholder="Contact address street"
            />

            <FormField
              name="contactInfo.address.houseNumber"
              type="text"
              placeholder="Contact address house number"
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              {isSubmitting ? "Creating..." : "Create Job"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateJob;
