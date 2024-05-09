import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

/**
 * `CallToAction` renders a call to action component within a styled widget wrapper.
 * It displays a title, a subtitle, and a CTA button that is only shown if a link is provided.
 *
 * Props:
 *  - `title` (string): The main text headline of the CTA.
 *  - `subtitle` (string): Additional descriptive text that supports the title.
 *  - `callToAction` (CallToActionType): The CTA details containing text and URL.
 *  - `id` (string | undefined): Optional identifier for the wrapper element.
 *  - `hasBackground` (boolean): Determines if the background styling should be applied. Defaults to false.
 */
const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = false }: CallToActionProps) => {
  // Destructuring text and href from the callToAction prop.
  const { text, href } = callToAction as CallToActionType;

  return (
    // WidgetWrapper adds a background and an optional ID to the component container.
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      {/* Card container for the CTA content */}
      <div className="card mx-auto max-w-3xl p-6 text-center">
        {/* Conditionally render the title if it exists */}
        {title && (
          <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">{title}</h2>
        )}
        {/* Conditionally render the subtitle if it exists */}
        {subtitle && <p className="text-xl text-gray-600 dark:text-secondary-400">{subtitle}</p>}
        {/* Display the CTA button only if both text and href are available */}
        {text && href && (
          <CTA
            callToAction={callToAction as CallToActionType}
            containerClass="mt-6 sm:mx-auto sm:w-fit"
            linkClass="btn btn-primary"
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
