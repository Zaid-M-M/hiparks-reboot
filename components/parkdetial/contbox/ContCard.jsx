import React from "react";

const ContCard = ({ name, number, email }) => {
  return (
    <div className="bg-white/30 py-4 xl:py-5 px-7">
      <div className="flex gap-5 lg:justify-start justify-center lg:gap-10">
        <img
          src="/parkdetail/user.svg"
          className="xl:w-20 lg:w-14 w-16 aspect-square"
          alt=""
        />
        <div className="text-white">
          <p className="xl:text-[24px] text-[20px] bw-sb leading-[120%]">
            {name}
          </p>
          <p className="bw-r text-[16px] xl:text-[20px] leading-[120%] pt-3">
            {number}
          </p>
          <p className="bw-r text-[16px] xl:text-[20px] leading-[120%]">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContCard;
