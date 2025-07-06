'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkWrapper = ({ children }: { children: JSX.Element }) => {
  const pathname = usePathname();
  const link = children.props.href ? children.props.href : '';
  return <li className={`mr-4 text-xl ${link === pathname && 'underline'}`}>{children}</li>;
};

const Navbar = () => (
  <nav className="relative mb-4 md:mb-8 border-b border-gray-400 pb-2">
    <ul className="inline-flex">
      <LinkWrapper>
        <Link href="/" className="hover:text-gray-700 font-bold">Home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/about" className="hover:text-gray-700 font-bold">About</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/blog" className="hover:text-gray-700 font-bold">Blog</Link>
      </LinkWrapper>
    </ul>
  </nav>
);

export default Navbar;
