import React from 'react'

const Appointment = () => {
      const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));
      console.log(vaccineData)
  return (
    <div className="mt-20" >

      <h1 className="text-center text-4xl text-green-500 font-bold">This is Appointment page</h1>
      <h1 className="text-3xl ">Name:{vaccineData?.data?.name}</h1>
      <h1 className="text-3xl ">Name:{vaccineData?.data?.email}</h1>
      <h1 className="text-3xl ">Name:{vaccineData?.data?.location}</h1>
      <h1 className="text-3xl ">Name:{vaccineData?.data?.phone}</h1>
      <h1 className="text-3xl ">Name:{vaccineData?.data?.option}</h1>
    </div>
  )
}

export default Appointment