import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import { getStrengthPercent } from '@app/utils/password/meter';

export interface IField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  error?: string;
  required?: boolean;
  onChange?: ChangeEventHandler;
  showStrengthMeter?: boolean;
}

const Field: FC<IField> = ({
  name,
  type,
  className,
  label,
  placeholder,
  value,
  error,
  required,
  showStrengthMeter,
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const fieldType = type === 'password' ? (show ? 'text' : 'password') : type;
  const [strength, setStrength] = useState('');
  const fieldChange = (
    e: ChangeEvent<HTMLInputElement>
  ): ChangeEventHandler<HTMLInputElement> | undefined => {
    if (showStrengthMeter) {
      const value = e.target.value || '';
      const calculatedStrength = value ? getStrengthPercent(value) : '';
      setStrength(calculatedStrength as string);
    }
    if (onChange) onChange(e);
    return undefined;
  };
  return (
    <div
      className={`form-group ${error ? 'has-validation' : ''} ${
        className || ''
      }`}
    >
      <label htmlFor={name}>
        {label}
        &nbsp;
        {required ? <span className='mandatoryStar'>*</span> : null}
      </label>
      <div className='position-relative'>
        <input
          id={name}
          name={name}
          type={fieldType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => fieldChange(e)}
          className='form-control'
        />
        {type === 'password' ? (
          <div className='toggle-pass-btn'>
            <i
              className={show ? 'icon-eye-open' : 'icon-eye-close'}
              onClick={() => setShow(!show)}
            ></i>
          </div>
        ) : null}
      </div>
      {showStrengthMeter === true ? (
        <div className='password-meter w-100'>
          <div id='passwordMeter' className={`h-100`}>
            <span className={`h-100 meter meter-${strength}`}></span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Field;
