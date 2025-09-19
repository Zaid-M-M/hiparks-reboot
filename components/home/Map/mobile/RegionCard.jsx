import { ArrowUpRight } from "lucide-react";

export default function RegionCard({ park }) {
  return (
    <div className="min-w-[300px] min-h-[375px] bg-[#1A1A1A] rounded-none shadow-lg">
      <img
        src={park.image}
        alt={park.label}
        className="w-full h-[180px] object-cover rounded-none"
      />
      <div className="p-3">
        <h3 className="text-[25px] bw-r text-[#F47920]">
          <span dangerouslySetInnerHTML={{ __html: park.label }} />
          {park.city && (
            <span
              className="text-[18px] bw-r text-[#F47920]"
              dangerouslySetInnerHTML={{ __html: `, ${park.city}` }}
            />
          )}
        </h3>

        {park.purpose && (
          <p
            className="mb-1 text-[15px] text-gray-400"
            dangerouslySetInnerHTML={{ __html: park.purpose }}
          />
        )}

        <div className="w-full text-white/80 bg-[#3C3C3C] leading-[26px] mt-2.5 px-[7px] min-h-[94px] text-sm rounded-[4px] py-[8px]">
          {park.area && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Total Area:</p>
              <span
                className="bw-r text-[15px]"
                dangerouslySetInnerHTML={{ __html: park.area }}
              />
            </div>
          )}

          {park.potential && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Potential:</p>
              <span
                className="bw-r text-[15px]"
                dangerouslySetInnerHTML={{ __html: park.potential }}
              />
            </div>
          )}

          {park.certification && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Certification:</p>
              <span
                className="bw-r text-[14px] text-right leading-[20px]"
                dangerouslySetInnerHTML={{ __html: park.certification }}
              />
            </div>
          )}
        </div>

        <h3 className="text-[16px] pt-3 bw-r text-[#F47920] flex items-center">
          View Park <ArrowUpRight size={20} color="#F47920" />
        </h3>
      </div>
    </div>
  );
}
