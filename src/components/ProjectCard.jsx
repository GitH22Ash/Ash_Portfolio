import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const ProjectCard = ({ project }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black-100 relative group/card border-black-50 w-full h-auto rounded-xl p-6 border hover:shadow-2xl hover:shadow-blue-500/[0.1] transition-shadow duration-300">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-white mb-2"
        >
          {project.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-white-50 text-sm max-w-sm mb-4"
        >
          {project.description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mb-4">
          <img
            src={project.imgPath}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
            alt={project.title}
          />
        </CardItem>

        <CardItem translateZ="50" className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-black-200 text-white-50 rounded-full border border-black-50"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardItem>

        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            as="a"
            href={project.demoLink}
            className="px-4 py-2 rounded-xl text-sm font-normal text-white-50 hover:text-white transition-colors"
          >
            View Demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={project.link}
            className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white-50 transition-colors"
          >
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
