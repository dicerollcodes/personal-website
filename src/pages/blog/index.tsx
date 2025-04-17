import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const blogPosts = [
    {
      title: "Building My First PC",
      description: "My first PC build that I could call my own",
      slug: "building-my-dream-pc",
      coverImage: "first-computer.png",
      date: "2022-02-28"
    },
    // Add more blog posts here
  ];

  return (
    <Layout>
      <FadeIn delay={100}>
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={200 + (index * 100)}>
            <BlogCard 
              {...post} 
              coverImage={post.coverImage}
            />
          </FadeIn>
        ))}
      </div>
    </Layout>
  );
} 