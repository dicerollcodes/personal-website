import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  date: string;
}

export default function BlogCard({ title, description, slug, coverImage, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block w-full">
      <div className="bg-[#282828] p-4 rounded-lg hover:bg-[#383838] transition-colors">
        <div className="relative w-full aspect-square mb-4">
          {/* Use real image if it's first-computer.png, otherwise use placeholder */}
          {coverImage === "first-computer.png" ? (
            <img
              src="/images/first-computer.png"
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full object-cover rounded-md">
              <rect width="100" height="100" fill="#444" />
              <text x="50" y="50" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">
                {title}
              </text>
            </svg>
          )}
        </div>
        <h3 className="font-bold text-base md:text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{description}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </Link>
  );
} 