import { ChangeEvent, ReactNode } from 'react';

export interface ISelect<T> {
  label: string;
  name: string;
  options: Array<T>;
  className?: string;
  render: (item: T, index: number) => ReactNode;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

const Select = <T extends object>({
  label,
  name,
  className,
  options,
  render,
  onChange,
  disabled,
  defaultValue,
  placeholder,
  error,
  required,
}: ISelect<T>) => {
  return (
    <div className={`form-group ${error ? 'has-validation' : ''} ${className}`}>
      <label htmlFor={name}>
        {label}
        &nbsp;
        {required ? <span className='mandatoryStar'>*</span> : null}
      </label>
      <select
        id={name}
        name={name}
        className='form-control p-0 px-3'
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
      >
        {placeholder ? (
          <option disabled={true} value=''>
            {placeholder}
          </option>
        ) : null}
        {options.map(render)}
      </select>
    </div>
  );
};

export default Select;
