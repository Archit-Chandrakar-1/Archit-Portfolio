import Navbar from '@/components/ui/navbar';

export default function Blog() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, insights, and stories about technology and design
          </p>
          
          <div className="space-y-8 mt-16 max-w-4xl mx-auto text-left">
            {Array.from({ length: 5 }, (_, index) => (
              <article key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white mb-3">
                      Blog Post Title {index + 1}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="text-sm text-green-400">
                      Read more →
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}