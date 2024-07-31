import React from "react";

const ProjectCard = ({ project }) => {
    const { name, description, img, demoLink, githubLink } = project;
    console.log(name);

    return (
        <div className="bg-myWhite rounded-lg overflow-hidden transform transition duration-300 border-myBg border-2 shadow-md">
            <img src={img} alt={name} className="w-full aspect-video object-cover pl-6 pr-6 pt-6 rounded-md" />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 font-otterco">{name}</h2>
                <p className="text-gray-700 mb-4 font-otterco">{description}</p>
                <div className="flex w-full items-center justify-start gap-3">
                    <a
                        href={demoLink}
                        className="text-md px-12 py-4 font-otterco bg-myBlack text-myWhite rounded-full border-myBg border-[1px] ">
                        Demo
                    </a>
                    <a
                        href={githubLink}
                        className="text-md px-12 py-4 font-otterco bg-myWhite text-myBlack rounded-full border-myBg border-2 ">
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
