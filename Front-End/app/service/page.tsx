import Navbar from '@/components/ui/navbar';

export default function Service() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            My Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional services tailored to bring your digital vision to life
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies",
                icon: "🌐"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design solutions that create meaningful experiences",
                icon: "🎨"
              },
              {
                title: "Digital Strategy",
                description: "Strategic planning and consultation for digital transformation",
                icon: "💡"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}