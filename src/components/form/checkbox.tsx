import { FC, ChangeEventHandler } from 'react';
import Link from 'next/link';

export interface ICheckbox {
  label?: string;
  value?: string | number | readonly string[] | undefined;
  checked?: boolean;
  name: string;
  required?: boolean;
  error?: string;
  onChange?: ChangeEventHandler;
  link?: string;
  linkText?: string;
  linkClass?: string;
}

const Checkbox: FC<ICheckbox> = ({
  checked,
  value,
  label,
  name,
  error,
  onChange,
  link,
  linkText,
  linkClass,
}) => {
  return (
    <label className='checkbox-item-label'>
      <span className='checkbox-item'>
        <input
          type='checkbox'
          value={value}
          id={name}
          name={name}
          defaultChecked={checked}
          className={`checkbox-control ${error ? 'has-validation' : ''}`}
          onChange={onChange}
        />
        <i>&nbsp;</i>
      </span>
      <span>
        {label}
        {link ? (
          <>
            <br />
            <Link href={link}>
              <a target='_blank' className={linkClass}>
                {linkText}
              </a>
            </Link>
          </>
        ) : null}
        <br />
      </span>
    </label>
  );
};

export default Checkbox;
