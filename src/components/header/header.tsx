import Link from 'next/link';
import Image from 'next/image';
import logo from '@public/svgs/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <Link href='/'>
              <a className='logo'>
                <Image src={logo} alt='logo' />
              </a>
            </Link>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
