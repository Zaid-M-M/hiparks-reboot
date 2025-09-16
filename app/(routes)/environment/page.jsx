import Built from "@/components/Environment/Built";
import EnvironmentM from "@/components/Environment/EnvironmentM";
import HeroEnv from "@/components/Environment/HeroEnv";
import React from "react";

const page = () => {
  return (
    <>
      <HeroEnv />
      <Built />
      <EnvironmentM />
    </>
  );
};

export default page;
