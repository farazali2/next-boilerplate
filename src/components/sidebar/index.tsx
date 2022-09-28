import Link from 'next/link';
import styles from './sidebar.module.scss';
import Animate from '@app/components/animations/animate';

interface sideBarData {
  icon: string;
  heading: string;
  description: string;
  btnText: string;
  link: string;
  separator: string;
  btnClass: string;
}

const Sidebar: React.FC<sideBarData> = ({
  icon,
  heading,
  description,
  btnText,
  link,
  separator,
  btnClass,
}) => {
  return (
    <>
      <div className={styles.loginBox}>
        <Animate type='formUp' delay={800}>
          <div className='fade-in-box formDown'>
            <div className={styles.loginIcon}>
              <i className={icon}></i>
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: heading }} />
            <hr className={`hr-line ${separator}`} />
            <p>{description}</p>
            <Link href={link}>
              <a href={link} className={`btn ${btnClass}`}>
                <span>{btnText}</span>
              </a>
            </Link>
          </div>
        </Animate>
      </div>
    </>
  );
};

export default Sidebar;
