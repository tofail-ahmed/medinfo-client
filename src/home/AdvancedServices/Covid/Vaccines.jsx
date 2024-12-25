import React, { useState } from "react";
import { useNavigate } from "react-router";

const Vaccines = () => {
  const [selectedVaccines, setSelectedVaccines] = useState([]);
  //   const [submitDisable, setSubmitDisble] = useState(true);

const navigate=useNavigate()



  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add vaccine to selected list
      setSelectedVaccines((prev) => [...prev, value]);
    } else {
      // Remove vaccine from selected list
      setSelectedVaccines((prev) =>
        prev.filter((vaccine) => vaccine !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const existingData = JSON.parse(localStorage.getItem("Vac-data"));

    // console.log("Selected Vaccines:", selectedVaccines);
    // console.log("existingData:", existingData);
    alert(`You have selected: ${selectedVaccines.join(", ")}`);
    const updatedData = { ...existingData, ...selectedVaccines };
    console.log(updatedData)
    localStorage.setItem("Vac-data", JSON.stringify(updatedData));

    navigate("/vac-appointment")
  };

  const vaccines = [
    {
      name: "COVID-19 Vaccine",
      note: "Provides protection against severe illness caused by the coronavirus.",
      caution: "May cause mild side effects like fatigue or fever.",
    },
    {
      name: "Flu Shot",
      note: "Protects against seasonal influenza viruses.",
      caution: "Not suitable for those with severe egg allergies.",
    },
    {
      name: "Hepatitis B",
      note: "Prevents hepatitis B infection, which affects the liver.",
      caution:
        "Ensure you're not allergic to yeast, commonly used in the vaccine.",
    },
    {
      name: "Measles, Mumps, Rubella (MMR)",
      note: "Prevents these three viral diseases.",
      caution: "Avoid if pregnant; consult a doctor for more details.",
    },
    {
      name: "Tetanus, Diphtheria, Pertussis (Tdap)",
      note: "Protects against bacterial infections causing severe symptoms.",
      caution:
        "May cause localized redness and swelling at the injection site.",
    },
    {
      name: "Polio Vaccine",
      note: "Prevents polio, a potentially paralyzing disease.",
      caution: "Rare allergic reactions may occur; consult with a provider.",
    },
    {
      name: "Varicella (Chickenpox)",
      note: "Protects against chickenpox and its complications.",
      caution:
        "Not suitable for pregnant individuals or those with weakened immune systems.",
    },
    {
      name: "HPV Vaccine",
      note: "Prevents cancers caused by human papillomavirus.",
      caution: "Best administered before exposure to the virus.",
    },
    {
      name: "Meningococcal Vaccine",
      note: "Protects against meningitis and bloodstream infections.",
      caution:
        "Mild side effects such as soreness at the injection site are possible.",
    },
    {
      name: "Pneumococcal Vaccine",
      note: "Prevents pneumonia and related infections.",
      caution:
        "Recommended for older adults and those with chronic conditions.",
    },
  ];

  return (
    <div className="my-24 max-w-[70%] lg:max-w-[50%] mx-auto">
      <div>
        <h1 className="font-extrabold text-md lg:text-3xl mb-8">
          Select up to 4 Vaccines
        </h1>

        <h1 className="mb-8">
          Below are the vaccinations the patient can schedule based on their age
          and location.
        </h1>

        <h1 className="mb-8">
          CDC says it’s safe to get multiple vaccinations at once.
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {vaccines.map((vaccine, index) => (
            <label key={index} className="flex flex-col items-start">
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  name="vaccines"
                  value={vaccine.name}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5"
                />
                <span className="font-semibold">{vaccine.name}</span>
              </div>
              <p className="text-sm text-gray-600">Note: {vaccine.note}</p>
              <p className="text-sm text-red-500">Caution: {vaccine.caution}</p>
            </label>
          ))}
        </div>
        <div className="my-8">
          Don't see the vaccine the patient needs? Based on their age and
          restrictions in their state, Walgreens can't administer some
          vaccines.Contact their health care provider with questions.
        </div>
        <div className="mb-2">
        
          If more than 4 vaccines are needed, please begin by selecting 4
          vaccines above and then speak to the pharmacist prior to the
          appointment about the additional vaccinations needed.
        </div>
        <div className="relative w-full">
  <hr 
    className="border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md" 
    style={{
      height: '5px',
      borderRadius: '5px',
      boxShadow: '0px 4px 6px rgba(123, 0, 231, 0.1)',
    }} 
  />
</div>

        <button
          type="submit"
          disabled={selectedVaccines.length === 0}
          className={`mt-8 py-2 px-4 flex justify-end rounded transition ml-auto ${
            selectedVaccines.length === 0
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Vaccines;
