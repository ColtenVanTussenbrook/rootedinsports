import Heading from './components/heading';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-8 bg-amber-50 text-gray-900">
      <div className="w-full text-center mb-12">
        <Heading>
          Rooted In Sports
        </Heading>
        <div className="text-sm uppercase tracking-widest mt-2 border-t border-b border-gray-800 py-1 max-w-md">
          Est. 2025 • Hometown Roots
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Placeholder for newspaper content sections */}
        <div className="border-r border-gray-400 pr-4">
          <h2 className="text-xl font-bold mb-2">Latest Stories</h2>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold border-b border-gray-400 pb-2 mb-4">Featured Article</h2>
        </div>
      </div>
    </main>
  );
}
