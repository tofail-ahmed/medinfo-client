import { useEffect, useState } from "react";

const Home = () => {
  const [medicines, setMedicines] = useState();
console.log(medicines.data)
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/medicines')
      .then(response => response.json())
      .then(data => setMedicines(data));
  }, []);
if(!medicines){
      return <h1>Loading...</h1>
}
  return (
    <div>
      <h1>This is Home page</h1>
      <ul>
        {medicines && medicines.data.map((medicine, index) => (
          <li key={index}>{medicine.company_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
