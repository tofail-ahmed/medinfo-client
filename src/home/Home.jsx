
import { useAllMedicinesQuery } from "../redux/medicine/medicinesApi";

const Home = () => {
 
  const {data,isLoading}=useAllMedicinesQuery("")
if(isLoading){
      return <h1>Loading...</h1>
}
console.log(data.data)
  return (
    <div className="mx-10">
      <ul>
        {data.data.map((medicine, index) => (
          <div className="bg-slate-400/30 rounded-md my-4 px-10" key={index}>
            <li className="text-2xl" >{index+1}. {medicine.medicine_name}</li>
            <li className="text-sm" ><span className="text-fuchsia-800 font-semibold">Genric:</span> {medicine.generic_name}</li>
            <p className="text-sm" ><span className="text-fuchsia-800 font-semibold">Descriptions:</span> {medicine.description}</p>
            <p className="text-sm" ><span className="text-fuchsia-800 font-semibold">Actions:</span> {medicine.actions}</p>
            <div className="flex gap-4">
            <h1>Alternative Medicines</h1>
           <div>
           {
                 
                 medicine.alt_medicines.map((m,i)=>(
                       <li className="text-lg" key={i}>{i+1}. {m}</li>
                 ))
           }
           </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
