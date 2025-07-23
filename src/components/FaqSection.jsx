"use client"
import { useState } from "react";

const faqs = [
  {
    question: "What is a biometric attendance system?",
    answer:
      "A biometric attendance system uses face, fingerprint, or IRIS recognition to track employee attendance accurately and prevent proxy entries.",
  },
  {
    question: "Does TimeWatch HRMS support payroll integration?",
    answer:
      "Yes, TimeWatch HRMS links attendance and leave data with payroll, making salary processing automatic and error-free.",
  },
  {
    question: "Can employees mark attendance remotely?",
    answer:
      "With the TimeWatch mobile app, employees can mark attendance with geo-fencing, apply for leave, and check payslips securely.",
  },
  {
    question: "What industries can use TimeWatch biometric attendance system?",
    answer:
      "Industries including manufacturing, hospitals, schools, corporates, and retail can use our system to manage attendance and HR efficiently.",
  },
  {
    question: "What are the benefits of using IRIS biometric devices for attendance?",
    answer:
      "IRIS biometric devices provide fast, contactless, and hygienic attendance tracking, making them ideal for hospitals, labs, and high-security areas. They work accurately even in low light and when employees wear masks or gloves, ensuring safe and reliable attendance without physical contact.",
  },
  {
    question: "Does TimeWatch work in the UAE and the Middle East?",
    answer:
      "Yes, TimeWatch provides biometric attendance devices and HRMS software for businesses in Dubai, Abu Dhabi, Qatar, Oman, Saudi Arabia, and across the Middle East.",
  },
  {
    question: "Can your system handle multiple branches across countries?",
    answer:
      "Yes, our cloud HRMS and biometric systems sync data across all your locations, whether in India, UAE, Qatar, or other regions, for centralized attendance and payroll management.",
  },
  {
    question: "Does TimeWatch HRMS integrate with payroll?",
    answer:
      "Yes, our system uses attendance and leave data for accurate, automated payroll processing.",
  },
  {
    question: "Is a mobile app available for attendance?",
    answer:
      "Yes, employees can mark attendance, apply for leave, and download payslips using the TimeWatch mobile app, available on Android and iOS.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
     <div className="">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-7 cursor-pointer">
              <button
                className="flex justify-between w-full items-center text-left text-base font-medium text-gray-900 hover:text-red focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="pt-3 pb-0 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
  );
}
