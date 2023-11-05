import Heading from '../components/heading';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
  return (
    <main>
      <Heading>Blog</Heading>
      <div>
        {posts.map((post) => (
          <div key={post._raw.flattenedPath} className="mb-8">
            <Link href={`/blog/${post._raw.flattenedPath}`}>
              <h2 className="text-2xl">{post.title}</h2>
              <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
