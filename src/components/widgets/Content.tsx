/**
 * Represents a content widget component.
 *
 * @component
 * @param {ContentProps} props - The props for the Content component.
 * @param {string} props.header - The header of the content.
 * @param {string} props.content - The content text.
 * @param {Array<{ title: string, description?: string }>} props.items - The array of items to be displayed.
 * @param {object} props.image - The image object containing the source and alt text.
 * @param {boolean} props.isReversed - Indicates whether the content and image should be reversed.
 * @param {boolean} props.isAfterContent - Indicates whether the image should be displayed after the content.
 * @param {string} props.id - The ID of the content widget.
 * @param {boolean} props.hasBackground - Indicates whether the content widget has a background.
 * @returns {JSX.Element} The rendered Content component.
 */
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Content = ({ // Destructuring the props
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => ( // Content component
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
        <div className="self-center md:basis-1/2">
          
          {content && <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-secondary-400">{content}</div>} 
          <ItemGrid
            items={items}
            columns={1}
            defaultIcon={IconCheck}
            containerClass="gap-4 md:gap-y-6"
            panelClass="flex max-w-full"
            titleClass="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2"
            descriptionClass="mt-1 text-gray-600 dark:text-secondary-400"
            iconClass="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 mt-1 p-1"
          />
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {image && (
            <div className="relative m-auto max-w-4xl">
              <Image
                className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-secondary-700"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;

// Content data on Home page
// export const contentHomeTwo: ContentProps = {
//   id: 'contentOne-on-home-two',
//   hasBackground: true,
//   content:
//     'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
//   items: [
//     {
//       title: 'Per ei quaeque sensibus',
//     },
//     {
//       title: 'Cu imperdiet posidonium sed',
//     },
//     {
//       title: 'Nulla omittam sadipscing mel ne',
//     },
//     {
//       title: 'Per ei quaeque sensibus',
//     },
//     {
//       title: 'Cu imperdiet posidonium sed',
//     },
//     {
//       title: 'Nulla omittam sadipscing mel ne',
//     },
//   ],
//   // image: {
//   //   src: cameraBackImg,
//   //   alt: 'Colorful Image',
//   // },
//   isReversed: true,
//   isAfterContent: true,
// };

// Content data on Home page
// export const contentHomeOne: ContentProps = {
//   id: 'contentOne-on-home-one',
//   hasBackground: true,
//   header: {
//     title: 'Aliquip definiebas ad est',
//     subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
//     tagline: 'Content',
//   },
//   content:
//     'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
//   items: [
//     {
//       title: 'Per ei quaeque sensibus',
//       description:
//         'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
//     },
//     {
//       title: 'Cu imperdiet posidonium sed',
//       description:
//         'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
//     },
//     {
//       title: 'Nulla omittam sadipscing mel ne',
//       description:
//         'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
//     },
//   ],
//   // image: {
//   //   src: cameraFrontImg,
//   //   alt: 'Colorful Image',
//   // },
//   isReversed: false,
//   isAfterContent: false,
// };
