import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const ServiceCards = ({
  header,
  items,
  columns = 3,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = true,
}: FeaturesProps) => (
  <WidgetWrapper
    id={id || ''}
    hasBackground={hasBackground}
    containerClass={`max-w-6xl ${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${
      isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''
    }`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={3}
      panelClass="card h-full relative flex flex-col text-center p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-primary-100 dark:bg-base-800 rounded-lg border-primary-200 shadow-md"
      iconClass="h-20 w-20 flex justify-center items-center rounded-md dark:text-white text-secondary-800 mb-6 p-2 md:p-3 mx-auto"
      titleClass="mb-3 text-xl font-bold text-secondary-900 dark:text-secondary-300"
      descriptionClass="text-secondary-900 dark:text-secondary-400"
    />
  </WidgetWrapper>
);

export default ServiceCards;
