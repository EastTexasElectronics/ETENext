import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <>
            {testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full ${
                  !callToAction && href
                    ? 'hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100'
                    : ''
                }`}
              >
                {!callToAction && href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <ItemTestimonial
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      isTestimonialUp={isTestimonialUp}
                      hasDividerLine={true}
                      startSlice={0}
                      endSlice={150}
                      image={image}
                      containerClass="h-full"
                      panelClass="justify-between items-stretch w-full h-full"
                      nameJobClass="text-left"
                      jobClass="text-sm"
                      imageClass="mr-4 h-10 w-10 rounded-full"
                    />
                  </Link>
                ) : (
                  <ItemTestimonial
                    name={name}
                    job={job}
                    testimonial={testimonial}
                    isTestimonialUp={isTestimonialUp}
                    hasDividerLine={true}
                    startSlice={0}
                    endSlice={150}
                    image={image}
                    containerClass="h-full"
                    panelClass="justify-between items-stretch w-full h-full"
                    nameJobClass="text-left"
                    jobClass="text-sm"
                    imageClass="mr-4 h-10 w-10 rounded-full"
                  />
                )}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
    {callToAction && (
      <CTA
        callToAction={callToAction}
        containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
        linkClass="btn"
      />
    )}
  </WidgetWrapper>
);

export default Testimonials;

// Testimonials data on Home page
// export const testimonialsHome: TestimonialsProps = {
//   id: 'testimonials-on-home',
//   hasBackground: true,
//   header: {
//     title: 'What our customers say about us',
//     subtitle:
//       'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
//   },
//   testimonials: [
//     {
//       name: 'Tayla Kirsten',
//       job: 'Marketing Manager',
//       testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Tayla Kirsten',
//       },
//       href: '/',
//     },
//     {
//       name: 'Silver Jordan',
//       job: 'Senior Marketer',
//       testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Silver Jordan',
//       },
//       href: '/',
//     },
//     {
//       name: 'Kelsey Arden',
//       job: 'Co-Founder & CEO',
//       testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Kelsey Arden',
//       },
//       href: '/',
//     },
//     {
//       name: 'Sarah Johnson',
//       job: 'Business Owner',
//       testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Sarah Johnson',
//       },
//       href: '/',
//     },
//     {
//       name: 'Keith Young',
//       job: 'Freelance Developer',
//       testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Keith Young',
//       },
//       href: '/',
//     },
//     {
//       name: 'Lisa Gordon',
//       job: 'Project Manager',
//       testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Lisa Gordon',
//       },
//       href: '/',
//     },
//   ],
// };