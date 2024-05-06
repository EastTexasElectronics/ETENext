'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';
import { useContactForm } from '~/utils/hooks/contactPage';

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  preferredContact,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  containerClass,
}: FormProps) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes?.length).fill(false));

  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useContactForm();

  // Update checkbox state
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = !newValues[index];
      return newValues;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contactForm" className={twMerge('', containerClass)}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        {inputs && inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
          <div key={`item-input-${index}`} className="mb-4">
            <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
              {label}
            </label>
            <input
              type={type}
              id={name}
              {...register(name)}
              autoComplete={autocomplete}
              placeholder={placeholder}
              className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-md"
            />
            {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
          </div>
        ))}
        {radioBtns && (
          <div className="mb-3">
            <span className="pb-1 text-xs uppercase tracking-wider">{radioBtns.label}</span>
            <div className="flex flex-wrap">
              {radioBtns.radios.map((radio, index) => (
                <div key={`radio-btn-${index}`} className="flex items-baseline mr-4">
                  <input
                    {...register(radioBtns.name)}
                    type="radio"
                    id={radio.label}
                    value={radio.value}
                    className="cursor-pointer"
                  />
                  <label htmlFor={radio.label} className="ml-2">{radio.label}</label>
                </div>
              ))}
            </div>
          </div>
        )}
        {textarea && (
          <div className="mb-4">
            <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              {textarea.label}
            </label>
            <textarea
              {...register(textarea.name)}
              cols={textarea.cols}
              rows={textarea.rows}
              placeholder={textarea.placeholder}
              className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-md"
            />
          </div>
        )}
        {checkboxes && (
          <div className="mb-4">
            {checkboxes.map((checkbox, index) => (
              <div key={`checkbox-${index}`} className="flex items-baseline my-1">
                <input
                  {...register(checkbox.name)}
                  type="checkbox"
                  id={checkbox.label}
                  checked={checkedState[index]}
                  onChange={() => changeCheckboxHandler(index)}
                  className="cursor-pointer"
                />
                <label htmlFor={checkbox.label} className="ml-2">{checkbox.label}</label>
              </div>
            ))}
          </div>
        )}
        {btn && (
          <div className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}>
            <button type={btn.type || 'button'} className="btn btn-primary">{btn.title}</button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
