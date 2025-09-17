"use client";
import Link from "next/link";
import React from "react";

const SPCard = ({
  park_name,
  state_name,
  development_potential,
  construction_status,
  land_usage,
  igbc_status,
  park_spotlight_image,
  slug,
  land_area,
}) => {
  return (
    <Link
      href={`/${slug}`}
      className="sp-card bg-white flex flex-col max-w-fit h-[435px] group cursor-pointer"
    >
      {/* Park Spotlight Image */}
      {park_spotlight_image && (
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={park_spotlight_image}
            alt={state_name || "Park Spotlight"}
            className="w-full h-[200px] object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>
      )}

      {/* Park Details */}
      <div className="flex-1 flex gap-2 flex-col py-[30px] px-6 border-x border-b border-[#CDCDCD]">
        {/* Top row: Name + Status */}
        <div className="flex items-center justify-between">
          {park_name && (
            <h3
              className="bw-sb text-[24px]"
              dangerouslySetInnerHTML={{ __html: park_name }}
            />
          )}
          {construction_status && (
            <span
              className={`${
                construction_status === "Active"
                  ? "text-green-500"
                  : "text-orange-500"
              } text-[16px] bw-sb`}
              dangerouslySetInnerHTML={{ __html: construction_status }}
            />
          )}
        </div>

        {/* Info rows */}
        <div className="space-y-2 text-sm">
          {land_area && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Area</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: land_area }}
              />
            </div>
          )}
          {development_potential && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Potential</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: development_potential }}
              />
            </div>
          )}
          {land_usage && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Usage</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: land_usage }}
              />
            </div>
          )}
          {igbc_status && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Certification</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: igbc_status }}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SPCard;
