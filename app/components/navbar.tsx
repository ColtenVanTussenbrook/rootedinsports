'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkWrapper = ({ children }: { children: JSX.Element }) => {
  const pathname = usePathname();
  const link = children.props.href ? children.props.href : '';
  return <li className={`mr-4 text-xl ${link === pathname && 'underline'}`}>{children}</li>;
};

const Navbar = () => (
  <nav className="relative pb-12">
    <ul className="inline-flex">
      <LinkWrapper>
        <Link href="/">Home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/about">About</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/blog">Blog</Link>
      </LinkWrapper>
    </ul>
  </nav>
);

export default Navbar;
