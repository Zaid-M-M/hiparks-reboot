// import { notFound } from "next/navigation";

// import HeroSection from "@/components/state/HeroSection";
// import MakeIndia from "@/components/state/MakeIndia";
// import HorizonParks from "@/components/state/HorizonParks";
// import FAQSection from "@/components/state/FAQSection";
// import RelatedLinks from "@/components/state/RelatedLinks";
// import HorizonRegion from "@/components/state/HorizonRegion";
// // import Indicators from "@/components/state/Indicators";

// import PDMain from "@/components/parkdetial/PDMain";
// import { fetchState } from "@/lib/wp/fetchStatePage";
// import IndustrialLandScape from "@/components/state/IndustrialLandScape";
// import IndicatorsF from "@/components/state/IndicatorsF";

// async function fetchAllParks() {
//   const baseUrl =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";
//   let allParks = [];
//   let page = 1;
//   let totalPages = 1;

//   do {
//     const res = await fetch(`${baseUrl}?per_page=100&page=${page}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch parks (page ${page})`);
//     }

//     const data = await res.json();
//     allParks = [...allParks, ...data];

//     totalPages = parseInt(res.headers.get("X-WP-TotalPages")) || 1;
//     page++;
//   } while (page <= totalPages);

//   return allParks;
// }

// export default async function CombinedPage({ params }) {
//   const { slug } = params;

//   // Try to fetch as a state first
//   const stateData = await fetchState(slug);
//   console.log("Statedata", stateData);
//   if (stateData) {
//     return (
//       <main>
//         <HeroSection data={stateData.hero} />
//         <MakeIndia data={stateData.makeindia} />
//         <IndustrialLandScape data={stateData.industrialLandscape} />
//         <IndicatorsF data={stateData.indicators} />
//         <HorizonParks data={stateData.parks} />
//         <FAQSection data={stateData.faqs} />
//         <HorizonRegion data={stateData.regionSlider} />
//         <RelatedLinks slug={slug} />
//       </main>
//     );
//   }

//   // If not a state, try parks
//   const allParks = await fetchAllParks();
//   const park = allParks.find((p) => p.slug === slug);

//   if (park) {
//     return <PDMain allParks={allParks} park={park} />;
//   }

//   // Neither state nor park → 404
//   notFound();
// }
import { notFound } from "next/navigation";

import HeroSection from "@/components/state/HeroSection";
import MakeIndia from "@/components/state/MakeIndia";
import HorizonParks from "@/components/state/HorizonParks";
import FAQSection from "@/components/state/FAQSection";
import RelatedLinks from "@/components/state/RelatedLinks";
import HorizonRegion from "@/components/state/HorizonRegion";
import PDMain from "@/components/parkdetial/PDMain";
// import { fetchState } from "@/lib/wp/fetchStatePage";
import IndustrialLandScape from "@/components/state/IndustrialLandScape";
import IndicatorsF from "@/components/state/IndicatorsF";
import { formatStatePage } from "@/utils/formatters/formatStatePage";

async function fetchAllParks() {
  const baseUrl = "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";
  let allParks = [];
  let page = 1;
  let totalPages = 1;

  do {
    const res = await fetch(`${baseUrl}?per_page=100&page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`fetchAllParks failed: Status ${res.status} ${res.statusText}, page ${page}`);
      throw new Error(`Failed to fetch parks (page ${page})`);
    }

    const data = await res.json();
    allParks = [...allParks, ...data];

    totalPages = parseInt(res.headers.get("X-WP-TotalPages")) || 1;
    page++;
  } while (page <= totalPages);

  console.log(`fetchAllParks: Retrieved ${allParks.length} parks`);
  return allParks;
}
const BASE = "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

async function fetchState(slug) {
  try {
    const res = await fetch(`${BASE}/states?slug=${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch state");

    const json = await res.json();
    if (!json?.length) return null;
    console.log(json)

    // ✅ find exact match
    const match = json.find((item) => item.slug === slug);
    if (!match) return null;
    console.log(json);

    // console.log("WP response:", JSON.stringify(json, null, 2));

    return formatStatePage(match);
  } catch (err) {
    console.error("fetchState error:", err);
    return null;
  }
}

export default async function CombinedPage({ params }) {
  const { slug } = params;
  console.log(`Processing slug: ${slug}`);

  // Try to fetch as a state first
  const stateData = await fetchState(slug);
  console.log(`fetchState result for ${slug}:`, JSON.stringify(stateData, null, 2));
  if (stateData) {
    return (
      <main>
        <HeroSection data={stateData.hero} />
        <MakeIndia data={stateData.makeindia} />
        <IndustrialLandScape data={stateData.industrialLandscape} />
        <IndicatorsF data={stateData.indicators} />
        <HorizonParks data={stateData.parks} />
        <FAQSection data={stateData.faqs} />
        <HorizonRegion data={stateData.regionSlider} />
        <RelatedLinks slug={slug} />
      </main>
    );
  }

  console.log(`No state found for ${slug}, trying parks...`);
  // If not a state, try parks
  const allParks = await fetchAllParks();
  console.log(`fetchAllParks result: ${allParks.length} parks found`);
  const park = allParks.find((p) => p.slug === slug);

  if (park) {
    console.log(`Park found for slug: ${slug}`);
    return <PDMain allParks={allParks} park={park} />;
  }

  console.log(`No state or park found for slug: ${slug}`);
  // Neither state nor park → 404
  notFound();
}