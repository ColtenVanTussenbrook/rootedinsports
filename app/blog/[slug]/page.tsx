import Heading from '@/app/components/heading';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import backArrow from '../../../public/icons/back-arrow.svg';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = getMDXComponent(post?.body.code);

  return (
    <div className="px-4 py-8 lg:px-32 lg:py-16 bg-gray-100 text-black font-serif">
      <Heading>{post.title}</Heading>
      <div className="mt-8 text-gray-700 leading-relaxed">
        <MDXContent />
      </div>
      <Link href="/blog" className="flex mt-8 items-center hover:text-gray-700">
        <Image src={backArrow} alt="back arrow icon" width={34} className="pr-2" />
        <p className="underline">Back to blog</p>
      </Link>
    </div>
  );
}
