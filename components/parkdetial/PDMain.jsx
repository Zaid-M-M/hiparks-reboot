import HCF from "../industry/imgtabs/HCF";
import MapGL from "./connectivity/MapGL";
// import MapGLF from "./connectivity/MapGLF";
import MapMain from "./connectivity/MapMain";
import ContMain from "./contbox/ContMain";
import FormSec from "./FormSec";
import PhVdslider from "./gallery/PhVdslider";
import HeaderMain from "./header/HeaderMain";
import PDSec2 from "./PDSec2";
import SPMain from "./stateparks/SPMain";

export default function PDMain({ park, allParks }) {
  // ✅ Destructure top-level fields
  const {
    id,
    slug,
    title,
    content,
    link,
    date,
    modified,
    acf = {}, // fallback if acf is undefined
  } = park;

  // ✅ Destructure ACF fields
  const {
    photo = [],
    park_spotlight_image,
    land_area,
    development_potential,
    land_usage,
    construction_status,
    park_hd_para,
    park_para1,
    connectivity = [],
    site_plan = [],
    video = [],
    zone_name,
    state_name,
    industrial_clusters_nearby = [],
    main_access = [],
    park_status,
    video_vimeo_link = [],
    meta_title,
    meta_description,
    h1_tag,
    park_name,
    map_button_text,
    map_button_url,
    coordinates_no,
    coordinates_url,
    faq_list = [],
    faq_list_2 = [],
    igbc_status,
    igbc_logo,
    read_more_para_park,
    svg_x,
    svg_y,
    pin_color,
    parks_schema,
    c_latitude,
    c_longitude,
  } = acf;
  // ✅ Convert coordinates_no string to array of floats
  let fromcoord = null;
  if (coordinates_no) {
    const parts = coordinates_no.split(",").map((n) => parseFloat(n.trim()));
    // Flip order to [lon, lat] if Mapbox expects that
    fromcoord = [parts[1], parts[0]];
  }
  console.log(fromcoord);
  return (
    <>
      <HeaderMain
        title={title?.rendered}
        h1={h1_tag}
        spotlightImage={park_spotlight_image}
        metaTitle={meta_title}
        metaDescription={meta_description}
        igbcLogo={igbc_logo}
        igbcStatus={igbc_status}
        park_name={park_name}
        stats={[
          { label: "LAND AREA", value: land_area },
          { label: "LEASABLE AREA", value: development_potential },
          { label: "LAND USAGE", value: land_usage },
          { label: "GREEN RATING", value: igbc_status },
        ]}
      />

      {/*  */}

      <PDSec2
        hdPara={park_hd_para}
        para1={park_para1}
        para2={content.rendered}
      />

      {/*  */}

      <MapMain
        connectivity={connectivity}
        industrial_clusters_nearby={industrial_clusters_nearby}
        main_access={main_access}
        fromcoord={fromcoord}
        map_button_url={map_button_url}
        park_name={park_name}
      />

      {/*  */}

      <ContMain />

      {/*  */}

      <HCF />

      {/*  */}

      <PhVdslider pht={photo} splan={site_plan} vid={video} />

      {/*  */}

      <SPMain
        {...{
          state_name,
          development_potential,
          construction_status,
          allParks,
          slug,
          park_spotlight_image,
          land_usage,
          igbc_status,
        }}
      />

      {/*  */}

      <FormSec />
    </>
  );
}
