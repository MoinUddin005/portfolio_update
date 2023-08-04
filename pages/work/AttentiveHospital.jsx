/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import hospitalImg from "../../public/project1img/hospital1.PNG";
import hospitalImg2 from "../../public/project1img/hospital2.PNG";
import hospitalImg3 from "../../public/project1img/hospital3.PNG";

export default function AttentiveHospital() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>AttentiveHospital ✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              AttentiveHospital
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Code Visualization
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://attentive-hospital.web.app/home/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/MoinUddin005/hospital-website"
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
              This Hospital Website project is a comprehensive web application
              developed using a stack that includes React.js, React Router,
              Bootstrap, Node.js, Express.js, MongoDB, Firebase, and deployed on
              Heroku. The website offers a professional and user-friendly
              interface for patients, medical staff, and administrators to
              interact with the hospital's services and information.
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
                <b>1: Authentication System:</b> The website uses Firebase
                Authentication to securely manage user registration, login, and
                password reset functionalities. Users can create accounts, log
                in, and access their private data securely.
              </span>
              <br />
              <span className="">
                <b>2: Private Routes:</b> Certain sections of the website, such
                as patient records, medical reports, or appointment details,
                require users to be logged in. Unauthorized users are redirected
                to the login page when attempting to access private routes.
              </span>
              <br />
              <span className="">
                <b>3:Home Page:</b> Upon successful login or registration, users
                are automatically redirected to a personalized home page. The
                home page displays relevant information, such as upcoming
                appointments, patient status, or other customizable widgets
                based on the user's preferences.
              </span>
              <br />

              <span className="">
                <b>4: Responsive Design:</b> The website is designed to be
                responsive, ensuring optimal user experience on various devices,
                including desktops, laptops, tablets, and smartphones.
              </span>
              <br />

              <span className="">
                <b>5: User Profile:</b> Each user has a profile page where they
                can view and edit their personal information, update contact
                details, and manage account settings.
              </span>
              <br />

              <span className="">
                <b>6: Medical Services:</b>The website provides comprehensive
                information about medical services offered by the hospital.
                Users can access details about different departments, medical
                staff, and treatments available.
              </span>
              <br />

              <span className="">
                <b>7: Contact and Support:</b> The website features a contact
                form or chat functionality to allow users to get in touch with
                the hospital for inquiries, feedback, or support.
              </span>
              <br />

              <span className="">
                <b>8:News and Updates:</b> The website may include a section to
                publish news, articles, and updates related to the medical
                field, health tips, and hospital events.
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
              React.js: JavaScript library for building user interfaces. <br />React
              Router: For managing routing and navigation within the
              application. <br />Bootstrap: Front-end framework for responsive and
              mobile-friendly design. <br /> Node.js: Server-side JavaScript runtime
              environment. <br /> Express.js: Web application framework for Node.js,
              used to create the server. <br /> MongoDB: NoSQL database for storing and
              managing application data. Firebase <br /> Authentication: To handle
              secure user authentication. <br /> Heroku: Cloud platform for deploying
              and hosting the web application.
            </h4>
          </div>
          <Image
            loading="lazy"
            src={hospitalImg}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={hospitalImg2}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={hospitalImg3}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
