import style from './login.module.scss';
import { FC } from 'react';

interface ILeftFixedImage {
  bgImage: string;
}

const LeftFixedImage: FC<ILeftFixedImage> = ({ bgImage }) => {
  const styles = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <>
      <div className={style.loginBg} style={styles}></div>
    </>
  );
};

export default LeftFixedImage;
