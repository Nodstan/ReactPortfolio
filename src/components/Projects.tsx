import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Eye } from "lucide-react";

// Images
import healthhub from "../assets/Healthhub.png";
import springImage from "../assets/SpringBoot.jpg";
import Facebook from '../assets/facebook.png'
import Home from "../assets/crypto.jpg";
import Buycom from "../assets/buycom.png";
import estateflow from "../assets/estateflow.png";

const projects = [
  {
    id: 1,
    title: "HealthHub – Healthcare System",
    image: healthhub,
    description:
      "A modern and interactive platform for managing healthcare services, appointments, and patient information.",
    tags: ["React", "Spring Boot", "MongoDB", "CSS"],
    link: "https://health-care-systems-nine.vercel.app/",
    github: "https://github.com/NodStan/HealthCareSystems",
  },
  {
    id: 2,
    title: "Estate Flow",
    image: estateflow,
    description:
      "EstateFlow is a sleek, modern real-estate web application designed to help users browse, filter, and explore properties with a smooth and intuitive experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://real-estate-ashen-gamma.vercel.app/",
    github: "https://github.com/Nodstan/RealEstate.git",
  },
  {
    id: 3,
    title: "Facebook",
    image: Facebook,
    description:
      "A social media platform where users can create profiles, share posts, connect with friends, and engage through likes, comments, and messages — just like Facebook, but redesigned with a modern touch.",
    tags: ["HTML", "JavaScript", "CSS"],
    link: "https://facetextbook.pages.dev/",
    github: "https://github.com/Nodstan/Facebook.git",
  },
  {
    id: 4,
    title: "Nutrition Guide",
    image: springImage,
    description:
      "A web application that provides personalized nutrition plans and dietary recommendations.",
    tags: ["Spring Boot", "MongoDB"],
    link: "https://nutritional-guide.onrender.com",
    github: "https://github.com/Nodstan/NutritionGuide",
  },
  {
    id: 5,
    title: "Mood Tracker",
    image: springImage,
    description:
      "A Spring Boot application for tracking daily mood and overall emotional wellness.",
    tags: ["Spring Boot", "MongoDB"],
    link: "https://mood-tracker-1zvf.onrender.com",
    github: "https://github.com/emannnx/Mood-Tracker",
  },
  {
    id: 6,
    title: "CryptoDo - COMING SOON",
    image: Home,
    description:
      "A modern crypto platform that delivers real-time prices, market insights, secure wallet monitoring, and seamless tracking of all your digital assets — all in one place.",
    tags: ["React", "CSS", "Express.js", "JavaScript"],
    link: "",
    github: "https://github.com/Nodstan/BuyCom.git",
  },
  {
    id: 7,
    title: "BuyCom - COMING SOON",
    image: Buycom,
    description:
      "A modern eCommerce web application built with React, featuring product browsing, dynamic product pages, categories, cart system, responsive UI, and EmailJS-powered newsletter subscription.",
    tags: ["React", "JavaScript", "CSS", "Expess.js"],
    link: "",
    github: "https://github.com/Nodstan/BuyCom.git",
  },
];


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-transparent border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-56">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-portfolio-dark/80 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="font-semibold text-xl text-white mb-2">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <Github size={18} className="text-white" />
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="pt-5 px-2">
        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-portfolio-dark dark:to-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">
          My <span className="text-portfolio-primary">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="btn-secondary inline-flex items-center"
            >
              Load More Projects <Eye size={18} className="ml-2" />
            </button>
          </div>
        )}

        {/* GitHub Link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/NodStan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-portfolio-primary hover:text-portfolio-dark transition-colors font-medium"
          >
            View All Projects on GitHub <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
