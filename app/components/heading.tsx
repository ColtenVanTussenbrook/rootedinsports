import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

const Heading = ({ children }: { children: string }) => (
  <div className="relative flex place-items-center">
    <h1 className={`${robotoMono.className} text-5xl font-bold text-gray-800`}>{children}</h1>
  </div>
);

export default Heading;
