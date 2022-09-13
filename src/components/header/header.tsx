import Link from 'next/link';

const Header = () => {
  return (
    <header className={`px-5 py-4 bg-white mb-5 text-primary`}>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <h4 className='m-0'>GLL</h4>
          </div>
          <div className='col-6'>
            <div className='d-flex justify-content-end'>
              <Link href='/' locale='en'>
                English
              </Link>
              <span className='mx-2'>/</span>
              <Link href='/' locale='ar'>
                Arabic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
