import React from "react";
import ContCard from "./ContCard";
const contppl = [
  {
    name: "Rajesh Dalpade",
    number: "+91 32144 45887",
    email: "cajesh.d@hiparks.com",
  },
  {
    name: "Calvin Rogers",
    number: "+91 32144 45887",
    email: "calvin.r@hiparks.com",
  },
];
const ContMain = () => {
  return (
    <div className="bg-[url(/parkdetail/contact_bg.jpg)] w-full bg-cover bg-no-repeat xl:h-[285px] flex items-center">
      <div className="fix">
        <div className="lg:px-10 py-12 flex lg:flex-row flex-col w-full lg:gap-0 gap-5 lg:justify-around lg:items-center">
          <h2 className="lg:text-[32px] text-[30px] leading-[42px] bw-m uppercase text-white ">
            For Leasing
            <br />
            Enquiries
          </h2>
          <div className="flex xl:gap-10 gap-5 md:flex-row flex-col">
            {contppl.map((item, index) => (
              <div className="md:w-full xl:w-[420px]">
                <ContCard
                  name={item.name}
                  number={item.number}
                  email={item.email}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMain;
