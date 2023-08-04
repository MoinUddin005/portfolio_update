import Image from "next/image";
import hospitalImg from "../public/project1img/hospital1.PNG";
import writtenImg from "../public/project2img/Capture.JPG";
import odvutsolutionImg from "../public/project3img/project-2.JPG";
import CreativeAgencyImg from "../public/project3img/project3.JPG";
import nike from "../public/project3img/project4.JPG";
import nft from "../public/project3img/project5.JPG";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: hospitalImg,
      title: "Attentive Hospital",
      description: "This is a hospital website ",
      link: "/work/AttentiveHospital",
      target: "_self",
    },
    {
      id: 2,
      image: odvutsolutionImg,
      title: "odvut solution",
      description: "This is company website",
      link: "/work/odvut_solution",
      target: "_self",
    },
    {
     
      id: 3,
      image: writtenImg,
      title: "Bangla puzzle limited",
      description: "This is a written website ",
      link: "/work/Bangla_puzzle_limited",
      target: "_self",
    },
    {
      id: 4,
      image: CreativeAgencyImg,
      title: "Creative Agency",
      description: "material ui Landing Page",
      link: "/work/CreativeAgency",
      target: "_self",
    },
    {
      id: 5,
      image: nike,
      title: "Nike Store",
      description: "Nike Store Landing Page",
      link: "https://nikestore-polly.netlify.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: nft,
      title: "NFT Page",
      description: "NFT Landing Page",
      link: "https://pranjalshikhar.github.io/nft-landing-page/",
      target: "_blank",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
