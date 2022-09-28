import Link from 'next/link';

interface anchorSetting {
  btnText: string;
  link: string;
  btnClass: string;
}

const Anchor: React.FC<anchorSetting> = ({ btnText, link, btnClass }) => {
  return (
    <>
      <Link href={link}>
        <a href={link} className={`btn ${btnClass}`}>
          <span>{btnText}</span>
        </a>
      </Link>
    </>
  );
};

export default Anchor;
