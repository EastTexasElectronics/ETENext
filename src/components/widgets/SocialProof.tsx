/**
 * Renders a social proof widget with a list of images and links.
 *
 * @component
 * @param {SocialProofProps} props - The props for the SocialProof component.
 * @param {Array<{ src: string, alt: string, link: string }>} props.images - The array of images to display.
 * @param {string} [props.id] - The optional ID for the widget.
 * @param {boolean} [props.hasBackground=false] - Indicates whether the widget has a background.
 * @returns {JSX.Element} The rendered SocialProof component.
 */

import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex items-center justify-center gap-6 md:gap-9">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div key={`item-social-proof-${index}`}>
            <a href={link} target="_blank" rel="noopener">
              <Image
                src={src}
                alt={alt}
                className="h-auto w-12 opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
                object-fit="contain"
                width={64}
                height={64}
              />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;

// SocialProof data on Home page *******************
// export const socialProofHome: SocialProofProps = {
//   id: 'socialProof-on-home',
//   hasBackground: false,
//   images: [
//     {
//       link: 'https://nextjs.org/',
//       src: nextJsLogo,
//       alt: 'NextJs Logo',
//     },
//     {
//       link: 'https://react.dev/',
//       src: reactLogo,
//       alt: 'React Logo',
//     },
//     {
//       link: 'https://tailwindcss.com/',
//       src: tailwindCssLogo,
//       alt: 'Tailwind CSS Logo',
//     },
//     {
//       link: 'https://www.typescriptlang.org/',
//       src: typescriptLogo,
//       alt: 'Typescript Logo',
//     },
//   ],
// };
