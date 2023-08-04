/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image1 from "../../public/project2img/Bangla puzzle limited1.jpg";
import image2 from "../../public/project2img/Bangla puzzle limited2.jpg";
import image3 from "../../public/project2img/Bangla puzzle limited3.jpg";

export default function Bangla_puzzle_limited() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Bangla_puzzle_limited ✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Bangla puzzle limited
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://frabjous-basbousa-3bf926.netlify.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/MoinUddin005/Bangla_puzzle_limited"
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
              This Professional Portfolio Landing Page is a visually appealing and modern website developed using React.js and React Router for navigation, along with HTML, CSS, and Tailwind CSS for styling. The website serves as a showcase for your skills, projects, and experiences, aiming to impress potential employers, clients, or visitors with your professional profile.
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
                <b>1: Elegant Landing Page:</b> The website features an elegant and captivating landing page that immediately grabs the attention of visitors. A well-designed hero section introduces you with a brief and impactful introduction.
              </span>
              <br />
              <span className="">
                <b>2:Portfolio Showcase:</b>  The portfolio section highlights your projects, displaying their names, descriptions, and images. Visitors can click on individual projects to view detailed information and screenshots.
              </span>
              <br />
              <span className="">
                <b>3:Work Experience:</b>  A section dedicated to your work experience showcases your professional journey, including the companies you worked for, your roles, and key accomplishments.
              </span>
              <br />

              <span className="">
                <b>4: Responsive Design:</b> The website is designed to be
                responsive, ensuring optimal user experience on various devices,
                including desktops, laptops, tablets, and smartphones.
              </span>
              <br />

              <span className="">
                <b>5: Responsive Design::</b> The website is designed with a responsive layout using Tailwind CSS, ensuring a seamless user experience across various devices and screen sizes.
              </span>
              <br />

              <span className="">
                <b>6: Contact Form:</b> Include a user-friendly contact form that allows visitors to get in touch with you directly. This form could collect their name, email address, subject, and message.
              </span>
              <br />

              <span className="">
                <b>7: Clean and Professional Design:</b>  The website's design is clean, professional, and aesthetically pleasing, reflecting your commitment to excellence and attention to detail.
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
              React.js: JavaScript library for building a dynamic and interactive user interface. <br />React Router: For handling navigation and routing within the single-page application.<br />HTML: For the website's structure and content. <br /> CSS: For styling and layout. <br /> Tailwind CSS: A utility-first CSS framework for creating stylish and responsive designs with ease.
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
