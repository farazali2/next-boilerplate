import { useEffect, useState } from 'react';
import ReactSelect, { MultiValue, SingleValue } from 'react-select';

export interface IOption {
  label: string;
  value: string;
}

export interface ISelect<T> {
  readonly label: string;
  readonly name: string;
  readonly options: Array<T>;
  readonly optionLabel: string;
  readonly optionValue: string;
  readonly className?: string;
  readonly onChange: (option: IOption | Array<IOption>) => void;
  readonly defaultValue?: IOption | Array<IOption>;
  readonly placeholder?: string;
  readonly error?: string;
  readonly required?: boolean;
  readonly isMulti?: boolean;
  readonly isClearable?: boolean;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly isSearchable?: boolean;
}

const Select = <T extends object>({
  label,
  name,
  className,
  options,
  optionLabel,
  optionValue,
  onChange,
  defaultValue,
  placeholder,
  error,
  required,
  isClearable,
  isDisabled,
  isMulti,
  isLoading,
  isSearchable,
}: ISelect<T>) => {
  const isRtl = false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = async (
    option: SingleValue<IOption> | MultiValue<IOption>
  ) => {
    const selected = await option;
    onChange(selected as IOption | Array<IOption>);
  };

  return (
    <div className={`form-group ${error ? 'has-validation' : ''} ${className}`}>
      <label htmlFor={name}>
        {label}
        &nbsp;
        {required ? <span className='mandatoryStar'>*</span> : null}
      </label>
      {mounted ? (
        <ReactSelect
          name={name}
          className='form-control p-0 px-3'
          placeholder={placeholder}
          options={options.map((item: T) => ({
            label: item[optionLabel as keyof T] as string,
            value: item[optionValue as keyof T] as string,
          }))}
          defaultValue={defaultValue}
          onChange={handleChange}
          isSearchable={isSearchable}
          isMulti={isMulti}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
        />
      ) : null}
    </div>
  );
};

//Setting component default props
Select.defaultProps = {
  label: '',
  name: '',
  options: [],
  className: '',
  required: false,
  isMulti: false,
  isClearable: false,
  isDisabled: false,
  isLoading: false,
  isSearchable: true,
};

//Exporting default module
export default Select;
