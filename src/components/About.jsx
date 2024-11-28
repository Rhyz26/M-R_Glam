// import { MantineProvider } from "@mantine/core"; // Import MantineProvider
// import { Accordion, Card, Container, Grid, Image, Text, Title } from "@mantine/core";

// const AboutUs = () => {
//   const teamMembers = [
//     {
//       name: "Melissa Sharon Lokoroma",
//       position: "CEO & Founder, Head Designer",
//       image: "/team/melissa.jpg",
//       description: "Visionary behind M&R Glam, leading the brand with passion and innovation.",
//     },
//     {
//       name: "Raymond Njagala",
//       position: "CEO & Co-Founder",
//       image: "/team/john.jpg",
//       description: "Creates unique and stunning designs that define our brand.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Marketing Manager",
//       image: "/team/jane.jpg",
//       description: "Strategist ensuring our collections reach a global audience.",
//     },
//   ];

//   const faqs = [
//     {
//       question: "What does M&R Glam specialize in?",
//       answer: "We specialize in fashionable and eco-friendly apparel for modern individuals.",
//     },
//     {
//       question: "Do you offer custom tailoring?",
//       answer: "Yes, we provide custom tailoring services for select collections.",
//     },
//     {
//       question: "Can I visit your physical stores?",
//       answer: "Absolutely! We have branches in Namugongo, Kansanga, and Gayaza.",
//     },
//   ];

//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Container className="bg-[#fbceb1] p-10 rounded-lg shadow-lg">
//         {/* Section for Mission, Our Story, and FAQ in a side-by-side layout */}
//         <Grid>
//           <Grid.Col span={6}>
//             <section className="text-left mb-16">
//               <Title className="text-[#782116] text-4xl font-bold mb-4">Our Mission</Title>
//               <Text className="text-[#952517] text-lg leading-relaxed">
//                 At M&R Glam, our mission is to redefine fashion by blending elegance, comfort, 
//                 and sustainability. We aim to empower our customers to express their unique style 
//                 while caring for the planet.
//               </Text>
//             </section>
//           </Grid.Col>
//           <Grid.Col span={6}>
//             {/* Placeholder for image of model or product */}
//             <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
//               <Card.Section>
//                 <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
//               </Card.Section>
//             </Card>
//           </Grid.Col>
//         </Grid>

//         <Grid>
//           <Grid.Col span={6}>
//             <section className="text-left mb-16">
//               <Title className="text-[#e23d14] text-4xl font-bold mb-4">Our Story</Title>
//               <Text className="text-[#bb2c13] text-lg leading-relaxed">
//                 Established in 2024, M&R Glam was born from a passion for fashion and a commitment 
//                 to quality. What started as a small boutique has grown into a trusted brand serving 
//                 diverse communities. We’re proud of our journey and excited for the future.
//               </Text>
//             </section>
//           </Grid.Col>
//           <Grid.Col span={6}>
//             {/* Placeholder for image of model or product */}
//             <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
//               <Card.Section>
//                 <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
//               </Card.Section>
//             </Card>
//           </Grid.Col>
//         </Grid>

//         {/* FAQ Section */}
//         <Grid>
//           <Grid.Col span={6}>
//             <section className="text-left mb-16">
//               <Title className="text-[#f47a43] text-4xl font-bold mb-8">Frequently Asked Questions</Title>
//               <Accordion variant="separated" style={{ maxWidth: '350px', margin: '0 auto' }}>
//                 {faqs.map((faq, index) => (
//                   <Accordion.Item key={index} value={`faq-${index}`}>
//                     <Accordion.Control className="text-[#f0571f]">{faq.question}</Accordion.Control>
//                     <Accordion.Panel className="text-[#782116]">{faq.answer}</Accordion.Panel>
//                   </Accordion.Item>
//                 ))}
//               </Accordion>
//             </section>
//           </Grid.Col>
//           <Grid.Col span={6}>
//             {/* Placeholder for image of model or product */}
//             <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
//               <Card.Section>
//                 <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
//               </Card.Section>
//             </Card>
//           </Grid.Col>
//         </Grid>

//         {/* Branches and Team Sections */}
//         <Grid>
//           <Grid.Col span={6}>
//             <section className="text-left mb-16">
//               <Title className="text-[#f8a879] text-4xl font-bold mb-4">Our Branches</Title>
//               <Text className="text-[#952517] text-lg leading-relaxed">
//                 Visit us at any of our locations:
//               </Text>
//               <ul className="list-disc list-inside text-[#782116]">
//                 <li>Namugongo</li>
//                 <li>Kansanga</li>
//                 <li>Gayaza</li>
//               </ul>
//             </section>
//           </Grid.Col>
//           <Grid.Col span={6}>
//             {/* Placeholder for image of model or store */}
//             <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
//               <Card.Section>
//                 <Image src="/path-to-your-image.jpg" alt="Store Image" height={200} />
//               </Card.Section>
//             </Card>
//           </Grid.Col>
//         </Grid>

//         {/* Team Members Section */}
//         <section className="mb-16">
//           <Title className="text-[#bb2c13] text-4xl font-bold mb-8 text-center">Our Team</Title>
//           <Grid>
//             {teamMembers.map((member, index) => (
//               <Grid.Col key={index} span={4}>
//                 <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
//                   <Card.Section>
//                     <Image src={member.image} alt={member.name} height={160} />
//                   </Card.Section>
//                   <Text weight={500} size="lg" className="mt-4">
//                     {member.name}
//                   </Text>
//                   <Text size="sm" className="italic mb-2">
//                     {member.position}
//                   </Text>
//                   <Text size="sm">{member.description}</Text>
//                 </Card>
//               </Grid.Col>
//             ))}
//           </Grid>
//         </section>
//       </Container>
//     </MantineProvider>
//   );
// };

// export default AboutUs;





import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Base Swiper CSS
import 'swiper/css/pagination'; // Pagination CSS
import { Autoplay, Pagination } from 'swiper/modules'; // Necessary Swiper modules
import { Container, MantineProvider, Card, Text, Image, Title } from '@mantine/core'; // For Mantine components

const AboutUs = () => {
  const testimonials = [
    {
      quote: "Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus.",
      author: "Saul Goodman",
      role: "Ceo & Founder",
      image: "assets/img/testimonials/testimonials-1.jpg",
    },
    {
      quote: "Export tempor illum tamen malis eram quae irure esse labore quem cillum quid malis quorum velit fore.",
      author: "Sara Wilsson",
      role: "Designer",
      image: "assets/img/testimonials/testimonials-2.jpg",
    },
    {
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim.",
      author: "Jena Karlis",
      role: "Store Owner",
      image: "assets/img/testimonials/testimonials-3.jpg",
    },
    {
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat duis veniam.",
      author: "Matt Brandon",
      role: "Freelancer",
      image: "assets/img/testimonials/testimonials-4.jpg",
    },
    {
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa.",
      author: "John Larem",
      role: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-5.jpg",
    },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container className="bg-[#fbceb1] p-10 rounded-lg shadow-lg">
        <section id="testimonials" className="testimonials section light-background">
          <div className="container section-title" data-aos="fade-up">
            <Title className="text-[#782116] text-4xl font-bold mb-4 text-center">
              Testimonials
            </Title>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              loop={true}
              speed={600}
              autoplay={{
                delay: 5000,
              }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
              }}
              modules={[Autoplay, Pagination]}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="testimonial-item bg-[#f47a43] text-white shadow-md rounded-md p-4">
                    <Text className="italic">
                      <i className="bi bi-quote quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </Text>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="testimonial-img mx-auto mt-4 rounded-full"
                      height={100}
                      width={100}
                      radius={50}
                    />
                    <Text className="text-lg font-bold mt-2">{testimonial.author}</Text>
                    <Text className="text-sm italic">{testimonial.role}</Text>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Container>
    </MantineProvider>
  );
};

export default AboutUs;

