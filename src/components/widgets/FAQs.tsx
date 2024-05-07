
import { FAQsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { IconArrowDownRight } from '@tabler/icons-react';

const FAQs = ({ header, items, columns, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
    <ItemGrid
      items={items}
      columns={columns}
      defaultColumns={2}
      defaultIcon={IconArrowDownRight}
      containerClass="mt-12"
      panelClass="flex max-w-full"
      titleClass="text-lg font-semibold mb-2"
      descriptionClass="mt-0.5"
      iconClass="flex-shrink-0 mr-2 mt-1 w-6 h-6 text-primary-800 dark:text-primary-600"
    />
  </WidgetWrapper>
);

export default FAQs;

// FAQS data on Home page *******************
// export const faqs2Home: FAQsProps = {
//   id: 'faqsTwo-on-home',
//   hasBackground: false,
//   header: {
//     title: 'Frequently Asked Questions',
//     subtitle:
//       'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
//     tagline: 'FAQS',
//   },
//   items: [
//     {
//       title: 'What do I need to start?',
//       description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
//     },
//     {
//       title: 'How to install the NextJS + Tailwind CSS template?',
//       description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
//     },
//     {
//       title: "What's something that you completely don't understand?",
//       description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
//     },
//     {
//       title: "What's an example of when you changed your mind?",
//       description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
//     },
//     {
//       title: 'What is something that you would really like to try again?',
//       description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
//     },
//     {
//       title: 'If you could only ask one question to each person you meet, what would that question be?',
//       description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
//     },
//   ],
// };

