import Image from 'next/image';
import Heading from '../components/heading';
import portrait from '../../public/images/me.jpg';

export default function About() {
  return (
    <main className="px-4 py-8 lg:px-32 lg:py-16 bg-gray-100 text-black font-serif">
      <Heading>About Rooted In Sports</Heading>
      <div className="md:flex mt-8">
        <div className="flex-1 mr-0 md:mr-8 mb-8 md:mb-0 text-gray-700 leading-relaxed">
          <p>
           I created Rooted In Sports as a space to discuss the impact sports have on our communities. As a lifelong sports fan in Salt Lake City, I've seen the impact
           the Utah Jazz, The Utes, and BYU have had on the local culture and economy. I wanted to create a platform that dives into the stories that connect us all.
          </p>
          <br />
          <p>
            I've always been fascinated by other cities and how their sports teams shape their identity. Sports have a unique way of bringing people together and creating a sense of belonging.
            Although it's the same sports and leagues across the country, each city has its own unique story to tell.
          </p>
        </div>
      </div>
    </main>
  );
}
