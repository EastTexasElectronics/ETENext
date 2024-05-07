/**
 * Renders a widget with 4 features.
 *
 * @param {FeaturesProps} props - The component props.
 * @param {string} props.header - The header text.
 * @param {Array<FeatureItem>} props.items - The array of feature items.
 * @param {number} [props.columns=2] - The number of columns to display the feature items.
 * @param {ImageProps} props.image - The image to display.
 * @param {boolean} [props.isBeforeContent] - Whether to display content before the widget.
 * @param {boolean} [props.isAfterContent] - Whether to display content after the widget.
 * @param {string} [props.id] - The ID of the widget.
 * @param {boolean} [props.hasBackground=false] - Whether the widget has a background.
 * @param {boolean} [props.isImageDisplayed=true] - Whether the image is displayed.
 * @returns {JSX.Element} The rendered widget.
 */
import Image from 'next/image';
import { FeaturesProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';

const Features4 = ({
  header,
  items,
  columns = 2,
  image,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = false,
  isImageDisplayed = true,
}: FeaturesProps) => (
  <WidgetWrapper
    id={id}
    hasBackground={hasBackground}
    containerClass={`${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    {isImageDisplayed && (
      <div aria-hidden="true" className="aspect-w-16 aspect-h-7">
        {image && (
          <Image
            className="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"
            src={image.src}
            alt={image.alt}
            width={728}
            height={320}
            sizes="(max-width: 64rem) 100vw, 1024px"
          />
        )}
      </div>
    )}
    <ItemGrid
      items={items}
      columns={columns}
      defaultColumns={4}
      containerClass={`mt-12 ${columns === 2 ? 'max-w-5xl' : ''}`}
      panelClass={`flex max-w-full ${columns === 2 ? ' sm:max-w-md mx-auto' : ''}`}
      titleClass="text-lg font-semibold mb-2"
      descriptionClass="mt-0.5"
      iconClass="flex-shrink-0 mr-4 mt-1 w-6 h-6 text-primary-800 dark:text-primary-600"
    />
  </WidgetWrapper>
);

export default Features4;
