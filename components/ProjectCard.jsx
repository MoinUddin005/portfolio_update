import Image from "next/image";
import hospitalImg from "../public/project1img/hospital1.jpg";
import writtenImg from "../public/project2img/Bangla puzzle limited1.jpg";
import odvutsolutionImg from "../public/project3img/odvutsolutionImg1.jpg";
import CreativeAgencyImg from "../public/project3img/CreativeAgencyImg1.jpg";
import nike from "../public/project3img/HeroStroy.jpg";
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
      title: "Hero Stroy",
      description: "Hero Stroy Landing Page",
      link: "https://hero-stroy-s94k-9285rb1rv-moin368892-gmailcom.vercel.app/",
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
