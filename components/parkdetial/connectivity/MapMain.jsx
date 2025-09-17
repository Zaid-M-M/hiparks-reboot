"use client";
import React, { useEffect, useState } from "react";
import MapHead from "./MapHead";
import MainTabAcc from "./tabsacc/MainTabAcc";
import MapGLFF from "./MapGLFF";

const MapMain = ({
  main_access,
  industrial_clusters_nearby,
  connectivity,
  map_button_url,
  fromcoord,
  park_name,
}) => {
  // Grab the first point from connectivity if available

  const defaultLat = connectivity?.[0]?.c_latitude || 0;
  const defaultLon = connectivity?.[0]?.c_longitude || 0;
  const defaultsp = connectivity?.[0]?.location_name || "";
  const defaultep =
    connectivity?.[0]?.location_name.replace(/\s*\|\s*$/, "") || "";
  // State for current latitude and longitude
  const [clat, setClat] = useState(defaultLat);
  const [clon, setClon] = useState(defaultLon);

  const [sp, setSp] = useState(defaultsp);
  const [ep, setEp] = useState(defaultep);
  // If connectivity changes, reset defaults
  useEffect(() => {
    if (connectivity && connectivity.length > 0) {
      setClat(connectivity[0].c_latitude);
      setClon(connectivity[0].c_longitude);
    }
  }, [connectivity]);
  console.log(connectivity);
  console.log(main_access);
  console.log(industrial_clusters_nearby);

  return (
    <div className="flex lg:flex-row flex-col-reverse w-full min-h-screen">
      {/* Left column */}
      <div className="flex flex-col flex-1">
        <div className="lg:flex hidden">
          <MapHead />
        </div>
        <div className="flex-1 xl:h-full relative">
          <MapGLFF
            connectivity={connectivity}
            industrial_clusters_nearby={industrial_clusters_nearby}
            main_access={main_access}
            clat={clat}
            clon={clon}
            sp={sp}
            map_button_url={map_button_url}
            ep={ep}
            park_name={park_name}
            fromcoord={fromcoord}
          />
        </div>
      </div>

      {/* Right column */}
      <div className="lg:w-[37%] xl:pr-0 pr-[max(5%,calc((100vw-1340px)/2))] 1920:w-[39%] pl-[5%] xl:pl-[50px] 1366:pl-[70px] flex items-center bg-black">
        <MainTabAcc
          connectivity={connectivity}
          industrial_clusters_nearby={industrial_clusters_nearby}
          main_access={main_access}
          sp={sp}
          ep={ep}
          setSp={setSp}
          setEp={setEp}
          clat={clat}
          clon={clon}
          setClat={setClat}
          park_name={park_name}
          setClon={setClon}
        />
      </div>

      <div className="lg:hidden flex">
        <MapHead />
      </div>
    </div>
  );
};

export default MapMain;
