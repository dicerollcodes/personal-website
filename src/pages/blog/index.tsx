import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      title: "Building My First PC",
      description: "My first PC build that I could call my own",
      slug: "building-my-dream-pc",
      coverImage: "pc-build.jpg",
      date: "2022-02-28"
    },
    // Add more blog posts here
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.slug} 
            {...post} 
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </Layout>
  );
} 