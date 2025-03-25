import Link from 'next/link';
import InlineImage from './InlineImage';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  date: string;
}

export default function BlogCard({ title, description, slug, coverImage, date }: BlogCardProps) {
  // Check if this is one of our special images that needs inline handling
  const needsInlineImage = coverImage === 'pc-build.jpg' || coverImage === 'album-collage.png';
  const imageName = coverImage === 'pc-build.jpg' ? 'pc-build' : 'album-collage';

  return (
    <Link href={`/blog/${slug}`} className="group block w-full">
      <div className="bg-[#282828] p-4 rounded-lg hover:bg-[#383838] transition-colors">
        <div className="relative w-full aspect-square mb-4">
          {needsInlineImage ? (
            <InlineImage 
              imageName={imageName as 'pc-build' | 'album-collage'} 
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <img
              src={coverImage.startsWith('http') ? coverImage : `/${coverImage}`}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>
        <h3 className="font-bold text-base md:text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{description}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </Link>
  );
} 