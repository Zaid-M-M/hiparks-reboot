import CommunityPrograms from "@/components/social/Community";
import Community from "@/components/social/Community";
import Progress from "@/components/social/Progress";
import SocialTabs from "@/components/social/SocialTabSection";
import Spotlight from "@/components/social/Spotlight";
import React from "react";

const page = () => {
  return (
    <div>
      <Spotlight />
      <Progress />
      <SocialTabs />
      <CommunityPrograms />
    </div>
  );
};

export default page;
