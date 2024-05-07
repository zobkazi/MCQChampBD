"use client";

import React, { useState } from "react";
import FormField from "./FormField";
import initialValues from "./initialValues";

const JobCreateForm = () => {
  type FormData = typeof initialValues;

  const [formData, setFormData] = useState<FormData>(initialValues);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4003/api/v1/create-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        console.log("Data posted successfully");
        // Optionally, you can reset the form after successful submission
        setFormData(initialValues);
      } else {
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-6 md:grid-cols-3">
        <form onSubmit={handleSubmit} className="">
          <div>
            <FormField
              name="uid"
              type="text"
              placeholder="Enter uid"
              value={formData.uid}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="workHours"
              type="text"
              placeholder="Enter title"
              value={formData.workHours}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="title"
              type="text"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormField
              name="specialCommitments"
              type="text"
              placeholder="Enter specialCommitments"
              value={formData.specialCommitments}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormField
              name="skills"
              type="text"
              placeholder="Enter Skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormField
              name="salaryCurrency"
              type="text"
              placeholder="Enter salaryCurrency"
              value={formData.salaryCurrency}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="responsibilities"
              type="text"
              placeholder="Enter responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="qualifications"
              type="text"
              placeholder="Enter qualifications"
              value={formData.qualifications}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="occupationalCategory"
              type="text"
              placeholder="Enter occupationalCategory"
              value={formData.occupationalCategory}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="jobLocation.address"
              type="text"
              placeholder="Enter jobLocation.address"
              value={formData.jobLocation.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="jobBenefits"
              type="text"
              placeholder="Enter jobBenefits"
              value={formData.jobBenefits}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="industry"
              type="text"
              placeholder="Enter industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="incentiveCompensation"
              type="text"
              placeholder="Enter incentiveCompensation"
              value={formData.incentiveCompensation}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="experienceRequirements"
              type="text"
              placeholder="Enter experienceRequirements"
              value={formData.experienceRequirements}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="employmentType"
              type="text"
              placeholder="Enter employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="educationRequirements"
              type="text"
              placeholder="Enter educationRequirements"
              value={formData.educationRequirements}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="description"
              type="text"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companyInfo.name"
              type="text"
              placeholder="Enter companyInfo.name"
              value={formData.companyInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companyInfo.logo"
              type="text"
              placeholder="Enter companyInfo.logo"
              value={formData.companyInfo.logo}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companyUrl"
              type="text"
              placeholder="Enter companyUrl"
              value={formData.companyUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companyDescription"
              type="text"
              placeholder="Enter companyDescription"
              value={formData.companyDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companySize"
              type="text"
              placeholder="Enter companySize"
              value={formData.companySize}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companySize"
              type="text"
              placeholder="Enter companySize"
              value={formData.companySize}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="companyLocation"
              type="text"
              placeholder="Enter companyLocation"
              value={formData.companyLocation}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.currency"
              type="text"
              placeholder="Enter baseSalary.currency"
              value={formData.baseSalary.currency}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.amount"
              type="text"
              placeholder="Enter baseSalary.amount"
              value={formData.baseSalary.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.unit"
              type="text"
              placeholder="Enter aseSalary.unit"
              value={formData.baseSalary.unit}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.period"
              type="text"
              placeholder="Enter baseSalary.period"
              value={formData.baseSalary.period}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.description"
              type="text"
              placeholder="Enter baseSalary.description"
              value={formData.baseSalary.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="baseSalary.display"
              type="text"
              placeholder="Enter baseSalary.display"
              value={formData.baseSalary.display}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="contactInfo.tel"
              type="text"
              placeholder="Enter contactInfo.tel"
              value={formData.contactInfo.tel}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="contactInfo.email"
              type="text"
              placeholder="Enter contactInfo.email"
              value={formData.contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="contactInfo.address.city"
              type="text"
              placeholder="Enter contactInfo.address.city"
              value={formData.contactInfo.address.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="contactInfo.address.street"
              type="text"
              placeholder="Enter contactInfo.address.street"
              value={formData.contactInfo.address.street}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              name="contactInfo.address.houseNumber"
              type="text"
              placeholder="Enter salaryCurrency"
              value={formData.contactInfo.address.houseNumber}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobCreateForm;
