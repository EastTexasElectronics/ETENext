/**
 * Renders a Steps component.
 *
 * @component
 * @param {string} id - The ID of the Steps component.
 * @param {string} header - The header of the Steps component.
 * @param {Array} items - The array of items to be displayed in the Steps component.
 * @param {boolean} isImageDisplayed - Determines whether the image is displayed in the Steps component. Default is true.
 * @param {object} image - The image object to be displayed in the Steps component.
 * @param {boolean} isReversed - Determines whether the order of the Steps component is reversed. Default is false.
 * @param {boolean} hasBackground - Determines whether the Steps component has a background. Default is false.
 * @returns {JSX.Element} The rendered Steps component.
 */
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  image,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      }`}
    >
      <div
        className={`md:py-4 ${
          isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
        }`}
      >
        {header && (
          <Headline
            header={header}
            containerClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
            titleClass="text-3xl sm:text-4xl"
            subtitleClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
          />
        )}
        <Timeline items={items} defaultIcon={IconCheck} iconClass="text-primary border-primary-900" />
      </div>
      {isImageDisplayed && (
        <div className="relative md:basis-1/2">
          {image && (
            <Image
              src={image.src}
              width={400}
              height={768}
              alt={image.alt}
              placeholder="blur"
              className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-secondary-700"
              quality={50}
            />
          )}
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;

// Steps data on Home page
// export const stepsHome: StepsProps = {
//   id: 'steps-on-home',
//   hasBackground: false,
//   isReversed: false,
//   isImageDisplayed: true,
//   // image: {
//   //   src: gasImg,
//   //   alt: 'Steps image',
//   // },
//   header: {
//     title: 'Sed ac magna sit amet risus tristique interdum.',
//   },
//   items: [
//     {
//       title: 'Step 1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 2',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 3',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Ready!',
//     },
//   ],
// };
