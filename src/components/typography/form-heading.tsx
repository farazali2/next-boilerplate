import { FC, ReactNode } from 'react';

export interface IFormHeading {
  children: ReactNode;
  line?: string;
}

const FormHeading: FC<IFormHeading> = ({ children, line }) => {
  const hrLine = line ? line : 'primary-line';
  return (
    <div className='form-group'>
      <h4>{children}</h4>
      <hr className={`hr-line ${hrLine}`} />
    </div>
  );
};

export default FormHeading;
