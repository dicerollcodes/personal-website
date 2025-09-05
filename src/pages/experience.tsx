import Layout from '@/components/Layout';
import FadeIn from '@/components/FadeIn';
import { useEffect, useState } from 'react';

export default function Experience() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Amazon",
      location: "TBD",
      date: "TBD",
      points: [
        "Internship secured for Summer 2026 through the Amazon Future Engineer scholarship."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Audible Future Leaders",
      location: "Newark, NJ",
      date: "Sept. 2024 - May 2025",
      points: [
        "Developed an internal chatbot using Python and NLP libraries to assist engineers with documentation queries, reducing onboarding time by 15%.",
        "Resolved 40+ front-end bugs across React components, reducing UI-related error reports by 25%.",
        "Contributed to 12+ production features and code changes, ensuring smooth deployments and improved platform stability."
      ]
    },
    {
      title: "Lead Programmer",
      company: "Team 752 & 714 , Newark Board of Education",
      location: "Newark, NJ",
      date: "Nov. 2022 - March 2025",
      points: [
        "Directed 2 programming teams (in Java and Python) to integrate advanced robotics controls",
        "Mentored team members on both practices and debugging, adding success in 15 matches",
        "Streamlined workflows to secure a 7th place finish at Mount Olive 2023 and advance to Regionals in 2024"
      ]
    },
    // Add other experiences...
  ];

  return (
    <Layout>
      <FadeIn delay={100}>
        <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
      </FadeIn>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={200 + (index * 100)}>
            <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333] hover:border-green-500/50 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-400">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-400">{exp.location}</p>
                  <p className="text-gray-400">{exp.date}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Layout>
  );
} 