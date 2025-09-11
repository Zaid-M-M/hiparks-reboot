import React from "react";
import { ReactLenis } from "lenis/react";
import WhoAreWe from "./_components/WhoAreWe";
import Milestone from "./_components/Milestone";
import BuildFuture from "./_components/BuildFuture";
import Culture from "./_components/Culture";
import ScrollFocusSections from "./_components/ScrollFocusSections";
import Thriving from "./_components/Thriving";
import ScrollFF from "./_components/ScrollFF";

const KnowUs = () => {
  return (
    <>
      <ReactLenis root>
        <WhoAreWe />
        <BuildFuture />
        <ScrollFF />
        <Milestone />
        <Thriving />
        {/* <Culture /> */}
      </ReactLenis>
    </>
  );
};

export default KnowUs;
