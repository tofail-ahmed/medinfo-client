{/* //search result */}
     {/* <div>

     {isLoading && <Loader />}
      {error && <p>Error fetching data</p>}

      <div className="mx-4">
      {searchTerm && data?.data.length === 0 && (
          <Typography variant="h6" color="error" align="center">
            No medicine found. Provide valid medicine Name
          </Typography>
        )}

        {
          data?.data.length!=0 && data&&(
            <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex justify-center items-center gap-2">
            Search Results
          </h1>
          )
        }
        <ul>
          {data ? (
           
            data.data.map((medicine, index) => (
              <div className="bg-slate-400/30 rounded-md my-2 p-4 " key={index}>
               <div className="flex items-center justify-between lg:flex-row flex-col gap-2">
               <div className="">
               <span className="flex items-center text-2xl">
               {index+1}. <li
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(medicine?.medicine_name, query),
                  }}
                ></li>
               </span>
              <span className="flex items-center gap-2">
                <h1>Generic: </h1>
              <li
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    // __html: `<span class="text-fuchsia-800 font-semibold">Generic:</span> ${highlightMatch(medicine?.generic_name, query)}`,
                     __html: highlightMatch(medicine?.generic_name, query),
                  }}
                ></li>
              </span>
                <span className="flex items-center gap-2">
                  <h1>Compnay: </h1>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    // __html: `<span class="text-fuchsia-800 font-semibold">Company:</span> ${highlightMatch(medicine?.company_name, query)}`,
                    __html: highlightMatch(medicine?.company_name, query),
                    
                  }}
                ></p>
                </span>
               </div>

                <div className="flex flex-col  gap-2 w-full lg:w-2/12 ">
             

      <Grid item xs={12} sm={6}>
    {/* Details button */}
        {/* <Button
                     onClick={() => navigate(`/medicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#6366F1",
                      borderColor: "#6366F1",
                      "&:hover": {
                        backgroundColor: "#14919B",
                        borderColor: "#6366F1",
                        color:"#FFF"
                      },
                    }}
                  >
                    Deatils
                  </Button>
      </Grid> */}

      {/* Buy Now Button */}
      {/* <Grid item xs={12} sm={6}>
      <Button
                     onClick={() => navigate(`/buyMedicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#22C55E",
                      borderColor: "#22C55E",
                      "&:hover": {
                        backgroundColor: "#059669",
                        borderColor: "#22C55E",
                        color:"#fff"
                      },
                    }}
                  >
                    Purchase Now
                  </Button>
      </Grid> */}
    {/* </Grid> */}
  
                {/* </div>
               </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center"> */}
              {/* <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex items-center gap-2">
                Search your Medicine by name, company, or group
      //         </h1> */}
      {/* //       </div> */}
      //     )}
      {/* //   </ul> */}
      {/* // </div> */}
      {/* // <span className="flex justify-center"> */}
      // {
      //   data?.data.length!=0&& data&&(<h1 className="text-2xl text-red-500 font-semibold  my-6 flex items-center gap-2 ">
      //     X------------End of search rtesult------------X
      //    </h1>)
      // }
      // </span>
    //  </div>   */}
     
    // </div>