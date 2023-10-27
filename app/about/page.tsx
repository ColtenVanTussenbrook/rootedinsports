import Heading from '../components/heading';

export default function About() {
  return (
    <main className="items-center">
      <Heading>About</Heading>
      <div>
        <p>
          Hey, I’m Colten. I’m a software engineer living in the Salt Lake City, UT. I’m currently a senior full stack engineer at{' '}
          <a href="https://blackriflecoffee.com" target="_blank">
            Black Rifle Coffee Company
          </a>
          .
        </p>
        <br />
        <p>
          I have professional working experience with JavaScript, TypeScript, PHP, React, Next.js, WordPress, CSS and Ruby on Rails. I’m
          always trying to learn more and I’m open to learning new frameworks and languages.
        </p>
        <br />
        <p>
          I pride myself on being a developer who can write good code but also be able to communicate across other teams and use those
          skills to help businesses move forward.
        </p>
        <br />
        <p>
          When I’m not coding, I enjoy CrossFit, fly fishing, snowboarding, backpacking and hanging out with my wife, little boy, and dog.
          If you’d like to reach out, you can contact me at coltenvantussenbrook@gmail.com, or through the social links below.
        </p>
      </div>
    </main>
  );
}
