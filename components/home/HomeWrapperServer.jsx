import HomeWrapper from "./HomeWrapper";
import { fetchTestimonials } from "@/lib/fetchTestimonials";
import TestimonialsSchemaServer from "./ClientTestimonials/TestimonialsSchemaServer";

export default async function HomeWrapperServer() {
  // ✅ FETCH HERE
  const testimonials = await fetchTestimonials();

  return (
    <>
      {/* ✅ Pass fetched data to schema */}
      <TestimonialsSchemaServer
        testimonials={testimonials}
        siteName="Your Site Name"
      />
      {/* ✅ Pass testimonials down to HomeWrapper */}
      <HomeWrapper testimonials={testimonials} />
    </>
  );
}
