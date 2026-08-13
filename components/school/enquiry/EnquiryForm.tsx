"use client";

import { FormEvent, useState } from "react";

const admissionOptions = [
  "Pre-Primary / KG",
  "Classes 1–5",
  "Classes 6–8",
  "Classes 9–10",
  "Classes 11–12",
];

const academicYears = ["2026–27", "2027–28", "2028–29"];

const contactMethods = [
  {
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.8 18.2 4.5 22l3.9-1.2A9 9 0 1 0 3 12a8.8 8.8 0 0 0 2.8 6.2Z" />
        <path d="M8.7 8.7c.2 3.4 3.1 6 6.6 6.6l1-1.4c.2-.3.6-.4.9-.3l1.5.7" />
      </svg>
    ),
  },
  {
    label: "Phone Call",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 4.5 9 4l2 5-1.7 1.1a10 10 0 0 0 4.6 4.6L15 13l5 2-.5 2.5c-.2 1-1.1 1.7-2.1 1.6C10.5 18.6 5.4 13.5 4.9 6.6c-.1-1 .6-1.9 1.6-2.1Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

type EnquiryValues = {
  parentName: string;
  mobile: string;
  email: string;
  studentName: string;
  admissionFor: string;
  academicYear: string;
  contactMethod: string;
  message: string;
};

type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const initialValues: EnquiryValues = {
  parentName: "",
  mobile: "",
  email: "",
  studentName: "",
  admissionFor: "",
  academicYear: "2026–27",
  contactMethod: "",
  message: "",
};

function validate(values: EnquiryValues) {
  const errors: EnquiryErrors = {};

  if (!values.parentName.trim()) {
    errors.parentName = "Parent / guardian name is required.";
  }

  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^[6-9]\d{9}$/.test(values.mobile.replace(/\D/g, ""))) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.studentName.trim()) {
    errors.studentName = "Student name is required.";
  }

  if (!values.admissionFor) {
    errors.admissionFor = "Choose the admission stage.";
  }

  if (!values.academicYear) {
    errors.academicYear = "Academic year is required.";
  }

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export default function EnquiryForm({ onSuccess }: { onSuccess: () => void }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});

  const updateValue = (key: keyof EnquiryValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSuccess();
    }
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="field">
          <span>Parent / Guardian Name *</span>
          <input
            value={values.parentName}
            onChange={(event) => updateValue("parentName", event.target.value)}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={
              errors.parentName ? "parentName-error" : undefined
            }
            autoComplete="name"
          />
          {errors.parentName && (
            <em id="parentName-error">{errors.parentName}</em>
          )}
        </label>

        <label className="field">
          <span>Mobile Number *</span>
          <div className="phone-field">
            <strong>+91</strong>
            <input
              type="tel"
              inputMode="tel"
              value={values.mobile}
              onChange={(event) => updateValue("mobile", event.target.value)}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? "mobile-error" : undefined}
              autoComplete="tel-national"
            />
          </div>
          {errors.mobile && <em id="mobile-error">{errors.mobile}</em>}
        </label>

        <label className="field">
          <span>Email Address</span>
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && <em id="email-error">{errors.email}</em>}
        </label>

        <label className="field">
          <span>Student Name *</span>
          <input
            value={values.studentName}
            onChange={(event) => updateValue("studentName", event.target.value)}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={
              errors.studentName ? "studentName-error" : undefined
            }
            autoComplete="off"
          />
          {errors.studentName && (
            <em id="studentName-error">{errors.studentName}</em>
          )}
        </label>
      </div>
      <div className="form-grid compact-grid">
        <label className="field">
          <span>Admission For *</span>
          <select
            value={values.admissionFor}
            onChange={(event) =>
              updateValue("admissionFor", event.target.value)
            }
            aria-invalid={Boolean(errors.admissionFor)}
            aria-describedby={
              errors.admissionFor ? "admissionFor-error" : undefined
            }>
            {admissionOptions.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.admissionFor && (
            <em id="admissionFor-error">{errors.admissionFor}</em>
          )}
        </label>

        <label className="field">
          <span>Academic Year *</span>
          <select
            value={values.academicYear}
            onChange={(event) =>
              updateValue("academicYear", event.target.value)
            }
            aria-invalid={Boolean(errors.academicYear)}
            aria-describedby={
              errors.academicYear ? "academicYear-error" : undefined
            }>
            {academicYears.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.academicYear && (
            <em id="academicYear-error">{errors.academicYear}</em>
          )}
        </label>

        <fieldset className="contact-method">
          <legend>Preferred Contact Method</legend>
          <div className="contact-method-options">
            {contactMethods.map((method) => (
              <label
                className={
                  values.contactMethod === method.label ? "is-selected" : ""
                }
                key={method.label}>
                <input
                  type="radio"
                  name="contactMethod"
                  value={method.label}
                  checked={values.contactMethod === method.label}
                  onChange={(event) =>
                    updateValue("contactMethod", event.target.value)
                  }
                />
                {method.icon}
                <span>{method.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <label className="field message-field">
        <span>Anything you'd like us to know?</span>
        <textarea
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          rows={3}
        />
      </label>

      <button className="enquiry-submit" type="submit">
        SEND ENQUIRY
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
