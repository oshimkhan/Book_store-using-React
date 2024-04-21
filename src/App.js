import React, { useState } from "react";
import "./App.css";
const JobApplicationForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "" },
  ]);
  const [workExperience, setWorkExperience] = useState([
    { company: "", position: "", duration: "" },
  ]);
  const [coverLetter, setCoverLetter] = useState("");
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };
  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][name] = value;
    setWorkExperience(updatedWorkExperience);
  };
  const handleAddEducation = () => {
    setEducation([...education, {
      institution: "",
      degree: "", year: ""
    }]);
  };
  const handleAddWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { company: "", position: "", duration: "" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      personalInfo,
      education,
      workExperience,
      coverLetter,
    });
  };
  return (
    <div className="job-application-form">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Personal Information</h2>
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handlePersonalInfoChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
            placeholder="Phone"
          />
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={handlePersonalInfoChange}
            placeholder="Address"
          />
        </div>
        <div className="section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                name="institution"
                value={edu.institution}
                onChange={(e) =>
                  handleEducationChange(index, e)}
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, e)}
                placeholder="Degree"
              />
              <input
                type="text"
                name="year"
                value={edu.year}
                onChange={(e) =>
                  handleEducationChange(index, e)}
                placeholder="Year"
              />
            </div>
          ))}
          <button type="button"
            onClick={handleAddEducation}>
            Add Education
          </button>
        </div>
        <div className="section">
          <h2>Work Experience</h2>
          {workExperience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) =>
                  handleWorkExperienceChange(index, e)}
                placeholder="Company"
              />
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) =>
                  handleWorkExperienceChange(index, e)}
                placeholder="Position"
              />
              <input
                type="text"
                name="duration"
                value={exp.duration}
                onChange={(e) =>
                  handleWorkExperienceChange(index, e)}
                placeholder="Duration"
              />
            </div>
          ))}
          <button type="button"
            onClick={handleAddWorkExperience}>
            Add Work Experience
          </button>
        </div>
        <div className="section">
          <h2>Cover Letter</h2>
          <textarea
            value={coverLetter}
            onChange={(e) =>
              setCoverLetter(e.target.value)}
            placeholder="Write your cover letter here..."
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};
export default JobApplicationForm;