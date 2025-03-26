import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

type ParagraphSection = {
  type: 'paragraph';
  text: string;
};

type SpecsSection = {
  type: 'specs';
  items: string[];
};

type Section = ParagraphSection | SpecsSection;

type BlogPost = {
  title: string;
  date: string;
  coverImage: string;
  content: Section[];
};

const blogPosts: Record<string, BlogPost> = {
  'building-my-dream-pc': {
    title: "Building My First PC",
    date: "February 28, 2022",
    coverImage: "first-computer.png",
    content: [
      {
        type: 'paragraph',
        text: "I had been building computers for almost a year, helping friends and fixing up old rigs, but I had never had one of my own. My laptop struggled with even the simplest games, and while I enjoyed working on other people's builds, I wanted something I could call mine, a system that would let me play games with my friends without constant lag or crashes. The problem was that new parts were expensive, and I didn't have the money for a full build. So, I started picking up components wherever I could find them,old GPUs from friends upgrading their setups, discarded motherboards that just needed a BIOS update, RAM sticks sitting forgotten in a drawer. Little by little, I pieced together something functional."
      },
      {
        type: 'specs',
        items: [
          "CPU: Ryzen 5 3600",
          "RAM: 16GB DDR4",
          "GPU: RX 580",
          "Motherboard: B550",
          "Storage: 256GB NVMe"
        ]
      },
      {
        type: 'paragraph',
        text: "After months of collecting and troubleshooting, I finally had all the parts I needed. My build wasn't cutting-edge, but it was mine. As I tightened the last screw and hit the power button, I held my breath, waiting to see if all my scavenged parts would work together. The BIOS screen flashed on, and a wave of relief hit me. I had done it. I had built something from almost nothing, and it was finally mine. One of the best feelings was looking to my left and seeing my fans spin, a quiet but constant reminder that all my effort had come to life. One day, I hope to throw some RGB in there, make it really feel like the builds I used to watch on YouTube."
      },
      {
        type: 'paragraph',
        text: "That computer became more than just a way to play games with my friends. It was the machine I used to dive into programming, where I wrote my first lines of code, experimented with different projects, and even built tools to help my robotics team. It showed me that technology wasn't just about having the newest and best hardware, it was about making the most of what you had, solving problems, and constantly learning. What started as a way to play games became a tool that fueled my curiosity and set me on a path toward something much bigger."
      }
    ]
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  const post = blogPosts[slug as string];

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const renderSection = (section: Section, index: number) => {
    if (section.type === 'paragraph') {
      return (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {section.text}
        </p>
      );
    }
    
    if (section.type === 'specs') {
      return (
        <div key={index} className="bg-[#282828] p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4 text-green-400">Build Specs</h3>
          <ul className="list-none space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <Layout>
      <article className="max-w-3xl mx-auto">
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          {/* Display the actual image instead of SVG placeholder */}
          <img 
            src={`/images/${post.coverImage}`} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 mb-8">{post.date}</div>
        <div className="prose prose-invert max-w-none">
          {post.content.map((section, index) => renderSection(section, index))}
        </div>
      </article>
    </Layout>
  );
} 