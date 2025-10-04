import Navbar from '@/components/ui/navbar';

const projects = [
  {
    name: "Research User",
    url: "https://github.com/username/research-user",
    readme: "Interviewing key users for insight and feedback on core features.",
    color: "bg-blue-200",  // Solid unique tailwind color
  },
  {
    name: "Explore Design",
    url: "https://github.com/username/explore-design",
    readme: "Creating UI/UX designs and prototyping new product features.",
    color: "bg-purple-200",
  },
  {
    name: "Competitor Research",
    url: "https://github.com/username/competitor-research",
    readme: "Analyzing competing products for feature and pricing gaps.",
    color: "bg-pink-200",
  },
  {
    name: "Research User",
    url: "https://github.com/username/research-user",
    readme: "Interviewing key users for insight and feedback on core features.",
    color: "bg-blue-200",  // Solid unique tailwind color
  },
  {
    name: "Explore Design",
    url: "https://github.com/username/explore-design",
    readme: "Creating UI/UX designs and prototyping new product features.",
    color: "bg-purple-200",
  },
  {
    name: "Competitor Research",
    url: "https://github.com/username/competitor-research",
    readme: "Analyzing competing products for feature and pricing gaps.",
    color: "bg-pink-200",
  },
  {
    name: "Research User",
    url: "https://github.com/username/research-user",
    readme: "Interviewing key users for insight and feedback on core features.",
    color: "bg-blue-200",  // Solid unique tailwind color
  },
  {
    name: "Explore Design",
    url: "https://github.com/username/explore-design",
    readme: "Creating UI/UX designs and prototyping new product features.",
    color: "bg-purple-200",
  },
  {
    name: "Competitor Research",
    url: "https://github.com/username/competitor-research",
    readme: "Analyzing competing products for feature and pricing gaps.",
    color: "bg-pink-200",
  },
  // Add more projects with unique bg colors
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">My Projects</h1>
        <div className="flex gap-8 flex-wrap justify-center">
          {projects.map(({ name, url, readme, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} rounded-2xl shadow-lg p-8 w-80 cursor-pointer hover:brightness-110 transition`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
              <p className="text-gray-700 mb-4 break-words underline">{url}</p>
              <p className="text-gray-700">{readme}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
