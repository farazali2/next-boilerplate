import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
  keywords: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Metadata;
