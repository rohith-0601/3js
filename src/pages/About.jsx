import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../components/Footer";


function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Rohith
        </span>
      </h1>

      <div className="mt-5 flex-col gap-3 text-slate-500">
        <p>
          A passionate 2nd-year Engineering Science student at IIT Hyderabad.
          Aspiring full-stack web developer and AI enthusiast.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl transition-all duration-300">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-black-500 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
  <h3 className="subhead-text mb-10 text-center">Experience</h3>
  <VerticalTimeline>
    {experiences.map((exp, index) => (
      <VerticalTimelineElement
        key={index}
        contentStyle={{ background: exp.iconBg || '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #ccc' }}
        date={exp.date}
        iconStyle={{ background: exp.iconBg || '#000', color: '#fff' }}
        icon={
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={exp.icon}
              alt={exp.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <h4 className="text-lg font-semibold">{exp.title}</h4>
        <p className="text-sm text-slate-700 mb-2">{exp.company_name}</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</div>
    </section>
    
  );
}

export default About;
