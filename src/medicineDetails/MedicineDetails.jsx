import { useParams } from "react-router";
import { useSingleMedicineQuery } from "../redux/medicine/medicinesApi";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";

const MedicineDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const { data, isLoading, error } = useSingleMedicineQuery(id);

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  // console.log(data);
  return (
    <div className="min-h-screen">
      <h1>This is medicine details</h1>
      <h1 className="text-2xl font-bold "> {data?.data?.medicine_name}</h1>
      <h1>Company: {data?.data?.company_name}</h1>
      <h1>Genric: {data?.data?.generic_name}</h1>
      <h1>Description: {data?.data?.description}</h1>
      <h1>Dose: {data?.data?.doses}</h1>
      <h1>Actions: {data?.data?.actions}</h1>
      <div className="flex ">
        <h1>Alernatives: </h1>
        <ul>
          {data?.data?.alt_medicines.map((alt, idx) => (
            <li key={idx}>
              {idx + 1}. {alt}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        <h1>Side Effects: </h1>
        <ul>
          {data?.data?.side_effects.map((alt, idx) => (
            <li key={idx}>
              {idx + 1}. {alt}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        <h1>Interactions: </h1>
        <ul>
          {data?.data?.interactions.map((alt, idx) => (
            <li key={idx}>
              {idx + 1}. {alt}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        <h1>Uses: </h1>
        <ul>
          {data?.data?.uses.map((alt, idx) => (
            <li key={idx}>
              {idx + 1}. {alt}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        <h1>Warnings: </h1>
        <ul>
          {data?.data?.warnings.map((alt, idx) => (
            <li key={idx}>
              {idx + 1}. {alt}
            </li>
          ))}
        </ul>
      </div>
      <NavLink
                className="border-2 rounded-md border-red-300 bg-orange-300"
                to={`/buyMedicine/${data?.data?._id}`}
              >
                Buy Now
              </NavLink>
      <hr />
      <span>{id}</span>
      <hr />
      <span>{data?.data?._id}</span>
    </div>
  );
};

export default MedicineDetails;
