import type { NextPage } from 'next';
import Metadata from '../layouts/head';

const About: NextPage = () => {
  return (
    <>
      <Metadata
        title='About | Collective'
        description='This is about page'
        keywords='Collective, Traffic, GreenLightLabs'
      />
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vel
        perferendis pariatur et velit suscipit quod! Esse voluptatem ullam
        inventore dicta velit officiis voluptates vitae dolores, saepe et magnam
        veritatis.
      </p>
    </>
  );
};

export default About;
