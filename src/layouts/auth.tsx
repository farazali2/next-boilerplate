import { FC } from 'react';
import LeftFixedImage from '@app/components/leftfixedimage';
import Sidebar from '@app/components/sidebar';
import { IAuthInfographic } from '@app/types/authinfographic.type';
import Animate from '@app/components/animations/animate';

export interface IAuthLayout {
  children: React.ReactNode;
  bgImage: string;
  infographic?: IAuthInfographic;
  sidebar?: boolean;
  position?: string;
}

const AuthLayout: FC<IAuthLayout> = ({
  children,
  bgImage,
  sidebar,
  position,
  infographic,
}) => {
  const sidebarPosition = infographic ? infographic.position : position;
  const sidebarMarkup = (
    <div className='col-12 col-md-4 col-xl-3 order-last order-md-0 p-0 d-none d-md-flex'>
      {infographic && sidebar !== false ? (
        <Sidebar
          icon={infographic.icon}
          heading={infographic.heading}
          separator={'white-line'}
          description={infographic.description}
          btnClass={'btn-white'}
          link={infographic.link}
          btnText={infographic.linkText}
        />
      ) : null}
    </div>
  );

  return (
    <>
      <LeftFixedImage bgImage={bgImage} />
      <section className='loginSection'>
        <div className='container-fluid p-0 overflow-hidden'>
          <div className='row m-0'>
            {sidebarPosition === 'left' ? sidebarMarkup : null}
            <div className='col-12 col-md-8 col-xl-9 order-first order-md-0 p-0'>
              <div className='loginContent'>
                <Animate
                  type={
                    sidebarPosition === 'right' ? 'slideInLeft' : 'slideInRight'
                  }
                  delay={0}
                >
                  <div className='white-bg-animate right-animate'></div>
                </Animate>
                <div className='login-inner fade-in-box'>
                  <Animate type='formUp' delay={800}>
                    <div className='form-wrapper formDown'>{children}</div>
                  </Animate>
                </div>
              </div>
            </div>
            {sidebarPosition === 'right' ? sidebarMarkup : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
