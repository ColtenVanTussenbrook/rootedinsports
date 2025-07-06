import Heading from '../components/heading';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
  return (
    <main className="px-4 py-8 lg:px-32 lg:py-16 bg-gray-100 text-black font-serif">  
      <div className="mt-8">
        {posts.map((post) => (
          <div key={post._raw.flattenedPath} className="mb-8 border-b border-gray-400 pb-4">
            <Link href={`/blog/${post._raw.flattenedPath}`} className="hover:text-gray-700">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-600 italic">{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
