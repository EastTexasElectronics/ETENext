/**
 * Represents a feature section with a grid layout.
 *
 * @component
 * @param {FeaturesProps} props - The component props.
 * @param {string} props.header - The header text for the section.
 * @param {Array<FeatureItem>} props.items - The array of feature items to display in the grid.
 * @param {number} [props.columns=3] - The number of columns in the grid.
 * @param {string} props.id - The unique identifier for the section.
 * @returns {JSX.Element} The rendered component.
 */
import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';

const Features2 = ({ header, items, columns = 3, id }: FeaturesProps) => (
  <section className="relative mx-auto py-12 md:py-16 lg:py-20" id="features2">
    <div className="pointer-events-none absolute inset-0 mb-36 bg-primary-50 dark:bg-secondary-800"></div>
    <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
      {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
      <ItemGrid
        id={id}
        items={items}
        columns={columns}
        defaultColumns={3}
        panelClass="card flex flex-start min-w-screen-sm items-stretch h-full"
        iconClass="h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
        titleClass="text-xl font-bold"
        descriptionClass="text-md text-gray-500 dark:text-gray-400"
        actionClass="justify-start"
      />
    </div>
  </section>
);

export default Features2;
