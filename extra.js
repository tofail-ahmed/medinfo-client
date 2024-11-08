//! 1. MUI sx styling---------
import { Typography } from '@mui/material';

function StyledText() {
  return (
    <Typography
      sx={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'primary.main',
        textAlign: 'center',
        padding: '10px',
        textTransform: 'uppercase',
      }}
    >
      Stylish Text
    </Typography>
  );
}

export default StyledText;




 {/* <div className="carousel__cell   number-slide1 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[0].imgUrl}
                  alt=""
                />
                <span>{allUser && allUser[0].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[0].name}</span>
                  <span>--{allUser && allUser[0].email}</span>
                </div>
              </div>
            </div>
            <div className="carousel__cell   number-slide2 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[2].imgUrl}
                  alt=""
                />
                <span>{allUser && allUser[2].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[2].name}</span>
                  <span>--{allUser && allUser[2].email}</span>
                </div>
              </div>
            </div>
            <div className="carousel__cell   number-slide3 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[2].imgUrl}
                  alt=""
                />
                <span className="flex justify-center items-center flex-1">{allUser && allUser[2].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[2].name}</span>
                  <span>--{allUser && allUser[2].email}</span>
                </div>
              </div>
            </div>
            <div className="carousel__cell   number-slide4 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[3].imgUrl}
                  alt=""
                />
                <span>{allUser && allUser[3].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[3].name}</span>
                  <span>--{allUser && allUser[3].email}</span>
                </div>
              </div>
            </div>
            <div className="carousel__cell   number-slide5 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[4].imgUrl}
                  alt=""
                />
                <span>{allUser && allUser[4].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[4].name}</span>
                  <span>--{allUser && allUser[4].email}</span>
                </div>
              </div>
            </div>
            <div className="carousel__cell   number-slide6 ">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full mx-auto"
                  src={allUser && allUser[5].imgUrl}
                  alt=""
                />
                <span>{allUser && allUser[5].review}</span>
                <div className="flex flex-col justify-end items-end">
                  <span>--{allUser && allUser[5].name}</span>
                  <span>--{allUser && allUser[5].email}</span>
                </div>
              </div>
            </div> */}