import React from 'react';
import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import formatContactInfo from '~/utils/formatContactInfo'; 
// import Image from 'next/image';
// import serviceAreaMap from '~/assets/images/serviceAreaMapSmall.png'; 

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-4" id="contact-form">
      <div className="w-full md:w-1/2">
        {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
        <ul className="mb-6 md:mb-0">
          {items &&
            items.map(({ title, description, icon: Icon }, index) => (
              <li key={`item-contact-${index}`} className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                  {description && (
                    <div className="text-gray-600 dark:text-slate-400">
                      {Array.isArray(description) ? (
                        description.map((desc, idx) => <p key={`desc-${idx}`}>{formatContactInfo(desc)}</p>)
                      ) : (
                        <p>{formatContactInfo(description)}</p>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
        {/* <div className="hidden md:block w-full">
          <Image
            src={serviceAreaMap}
            alt="Service Area Map"
            layout="responsive"
            width={250} 
            height={250} // Replace with your image's actual height to maintain the aspect ratio
            objectFit="contain" 
          />
        </div> */}
      </div>
      <div className="w-full md:w-1/2">
        <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" />
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
