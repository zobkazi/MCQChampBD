import * as Yup from "yup";

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

export default validationSchema;
