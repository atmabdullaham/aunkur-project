import React, { useState } from "react";

const EvaluationAndSelection = () => {
  const steps = [
    {
      title: "Preliminary Assessment",
      description: "Initial review of applications for eligibility.",
    },
    { title: "Tests", description: "Academic and aptitude tests." },
    { title: "Expert Evaluation", description: "Evaluation by field experts." },
    { title: "Final Assessment", description: "Final decision and approval." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Evaluation and <span className="text-green-500">Selection</span>{" "}
          Process
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Applications for Aunkur Scholarships are considered according to the
          candidate's academic success, <br />
          social activities, and motivation related to the chosen field.
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white p-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-content-${index}`}
              >
                <span>{step.title}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`accordion-content-${index}`}
                className={`overflow-hidden transition-max-height duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50 p-4 text-gray-600">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvaluationAndSelection;
