/**
 * Renders a widget that displays frequently asked questions in a collapsible format.
 *
 * @component
 * @param {FAQsProps} props - The props for the FAQs3 component.
 * @param {string} props.header - The header text for the FAQs widget.
 * @param {Item[]} props.items - An array of items representing the frequently asked questions.
 * @param {CallToActionType} props.callToAction - The call to action for the FAQs widget.
 * @param {string} [props.id] - The optional ID for the FAQs widget.
 * @param {boolean} [props.hasBackground=false] - Indicates whether the FAQs widget has a background.
 * @returns {JSX.Element} The rendered FAQs3 component.
 **/
import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { CallToActionType, FAQsProps, Item } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs3 = ({ header, items, callToAction, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex items-stretch justify-center">
      <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
        <div className="block h-full sm:flex sm:items-center sm:justify-between md:mt-10 md:block">
          {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
          {callToAction && (
            <CTA
              callToAction={callToAction as CallToActionType}
              linkClass="btn btn-primary mb-8 sm:w-auto sm:justify-start"
            />
          )}
        </div>
        <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4">
          <Collapse
            items={items as Item[]}
            classCollapseItem="border-b border-solid border-secondary-300 dark:border-secondary-500 py-5"
            iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-secondary-200" />}
            iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-secondary-200" />}
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default FAQs3;
