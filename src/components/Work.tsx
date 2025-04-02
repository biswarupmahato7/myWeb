import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  let projects = [
    {
      name: "Redefine",
      category: "Frontend",
      tools: ["JavaScript", "Tailwind CSS", "React", "Three.js"],
      image: "./assets/gaming.png",
    },
    {
      name: "Innovate",
      category: "Full Stack",
      tools: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      image: "",
    },
    {
      name: "Visionary",
      category: "UI/UX",
      tools: ["Figma", "CSS", "Framer Motion"],
      image: "",
    },
    {
      name: "Optimizer",
      category: "Backend",
      tools: ["Express.js", "PostgreSQL", "Redis"],
      image: "",
    },
    {
      name: "Automate",
      category: "AI/ML",
      tools: ["Python", "TensorFlow", "OpenAI API"],
      image: "",
    },
  ];

  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document.querySelector(".work-container")?.getBoundingClientRect()?.left || 0;
      if (box.length > 0) {
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement?.getBoundingClientRect().width || 0;
        let padding = parseFloat(window.getComputedStyle(box[0]).padding) || 0;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools.join(", ")}</p>
              </div>
              <WorkImage image={project.image} alt={`${project.name} image`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
