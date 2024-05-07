/* eslint-disable @next/next/no-img-element */
/**
 * Renders an announcement component with a title and optional call-to-action links.
 *
 * @returns The rendered announcement component.
 */


import { announcementData } from '~/shared/data/global.data';

const Announcement = () => {
  const { title, callToAction, callToAction2 } = announcementData;

  return (
    <div className="hidden overflow-hidden text-ellipsis whitespace-nowrap border-b border-blue-900 bg-blue-900 px-3 py-2 text-sm text-gray-200 md:block">
      <span className="bg-blue-800 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
      {callToAction && callToAction.text && callToAction.href && (
        <a
          href={callToAction.href}
          target="_blank"
          rel="noreferrer noopened"
          className="cursor-pointer text-gray-100 hover:underline"
        >
          {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
        </a>
      )}
      {callToAction2 && callToAction2.text && callToAction2.href && (
        <a
          href={callToAction2.href}
          target="_blank"
          rel="noreferrer"
          className="float-right"
          title={callToAction2.text}
        >
          <img
            src="https://img.shields.io/twitter/url/https/twitter.com/onwidget.svg?style=social&amp;label=Follow%20%40onWidget"
            alt="Follow @onWidget"
            width="125"
            height="20"
          />
        </a>
      )}
    </div>
  );
};

export default Announcement;

/**
 * The `Announcement` component is used to render an announcement with a title and optional call-to-action links.
 *
 * It receives the following props:
 * - `title`: The title of the announcement.
 * - `callToAction`: An object containing the text and href of the first call-to-action link.
 * - `callToAction2`: An object containing the text and href of the second call-to-action link.
 *
 * Example usage:
 * ```tsx
 * <Announcement
 *   title="New Feature Announcement"
 *   callToAction={{ text: "Learn More", href: "/features" }}
 *   callToAction2={{ text: "Follow us on Twitter", href: "https://twitter.com/onWidget" }}
 * />
 * ```
 */
