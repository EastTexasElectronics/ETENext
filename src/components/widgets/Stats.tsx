/**
 * Renders a Stats component that displays statistical information.
 *
 * @component
 * @param {StatsProps} props - The props object containing the items, id, and hasBackground properties.
 * @param {Array<{ title: number, description: string }>} props.items - The array of items to display, each containing a title and description.
 * @param {string} [props.id] - The optional ID for the component.
 * @param {boolean} [props.hasBackground=false] - Determines if the component has a background.
 * @returns {JSX.Element} The rendered Stats component.
 */
import { StatsProps } from '~/shared/types';
import { getSuffixNumber } from '~/utils/utils';
import WidgetWrapper from '../common/WidgetWrapper';

const Stats = ({ items, id, hasBackground = false }: StatsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">
      {items.map(({ title, description }, index) => (
        <div
          key={`item-stat-${index}`}
          className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-secondary-500"
        >
          <div className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
            {getSuffixNumber(title as number)}
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-secondary-400 lg:text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Stats;
