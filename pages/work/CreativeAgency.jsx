/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image1 from "../../public/project3img/CreativeAgencyImg1.jpg";
import image2 from "../../public/project3img/CreativeAgencyImg2.jpg";
import image3 from "../../public/project3img/CreativeAgencyImg3.jpg";

export default function Pokedex() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>odvut solution ✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
             Creative Agency
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center"></div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://spiffy-kringle-c1debe.netlify.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/MoinUddin005/simple-material-ui-project"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <h2
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Project Description
            </h2>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              CreativeAgency is a stunning and responsive portfolio website built using React.js and styled with the Material-UI CSS framework. This professional portfolio showcases the creative work and expertise of an individual or a team in a visually appealing manner.
            </h4>
            <h2
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Key Features
            </h2>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              <span className="">
                <b>1:Interactive Design: </b> CreativeAgency features an engaging and interactive design that captivates visitors from the moment they land on the website. The use of animations and smooth transitions enhances the user experience.
              </span>
              <br />
              <span className="">
                <b>2: Portfolio Showcase:</b>  The portfolio section showcases the best work of the individual or team, including web development projects, graphic designs, illustrations, and any other creative endeavors.
              </span>
              <br />
              <span className="">
                <b>3:Services Offered:</b> The website includes a section that highlights the range of services offered by the creative agency. It provides detailed information about each service, emphasizing the unique selling points.
              </span>
              <br />

              <span className="">
                <b>4: Responsive Design:</b> Testimonials: Satisfied clients' testimonials are prominently displayed to build trust and showcase the quality of services provided by the agency.
              </span>
              <br />

              <span className="">
                <b>5: Contact Information: </b> A clear and accessible contact section is available for potential clients to get in touch easily. It includes contact forms and relevant contact details for inquiries.
              </span>
              <br />

              <span className="">
                <b>6: About Us:</b>  A well-crafted "About Us" page introduces the team members, their expertise, and the agency's mission and values.
              </span>
              <br />

            
            </h4>
            <h2
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Technologies Used
            </h2>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              React.js: Used for building the interactive and dynamic user interface. <br />
              Material-UI: Employed for creating a visually appealing and responsive design with predefined UI components.<br/>
              CSS: Custom CSS styling to enhance the design and aesthetics of the website.<br/>
              HTML: Used for structuring the content and layout of the pages.<br />
              JavaScript: Used for interactivity and handling dynamic elements.<br/>
              Git: Version control system to track changes and collaborate with team members.

            </h4>
          </div>
          <Image
            loading="lazy"
            src={image1}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={image2}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={image3}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
