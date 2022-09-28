import { FC } from 'react';

export interface ISpinner {}

const Spinner: FC<ISpinner> = () => {
  return (
    <div className='spinner-border spinner-border-sm p-0 m-0' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Spinner;
