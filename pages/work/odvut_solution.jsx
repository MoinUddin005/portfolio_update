/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image1 from "../../public/project3img/odvutsolutionImg1.jpg";
import image2 from "../../public/project3img/odvutsolutionImg2.jpg";
import image3 from "../../public/project3img/odvutsolutionImg3.jpg";

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
              odvut solution
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center"></div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://odvut-solution-frontend-hfzt.vercel.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/MoinUddin005/odvut_solution_frontend"
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
              Odvut Solution Frontend is a cutting-edge web application
              developed using Next.js, a versatile framework for server-rendered
              React applications. The project incorporates Tailwind CSS for
              creating a responsive design and engaging animations to enhance
              user experience and interaction. This professional portfolio
              showcases the services and solutions offered by Odvut, creating a
              visually appealing and immersive platform for visitors.
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
                <b>1:Interactive Landing Page: </b>The website welcomes visitors
                with an interactive and visually stunning landing page that
                captures their attention instantly.
              </span>
              <br />
              <span className="">
                <b>2: Smooth Animations:</b> Utilizing animations thoughtfully,
                the website offers an engaging and dynamic experience, making it
                enjoyable to explore.
              </span>
              <br />
              <span className="">
                <b>3:Services Showcase:</b> A dedicated section highlights the
                comprehensive range of services and solutions provided by Odvut,
                complete with detailed descriptions and visually appealing
                elements.
              </span>
              <br />

              <span className="">
                <b>4: Responsive Design:</b> Powered by Tailwind CSS, the
                website seamlessly adapts to various screen sizes, ensuring a
                consistent and user-friendly experience across devices.
              </span>
              <br />

              <span className="">
                <b>5: Portfolio Display:</b> Showcase your successful projects
                and case studies with detailed information, images, and
                descriptions, providing insight into your expertise and
                accomplishments.
              </span>
              <br />

              <span className="">
                <b>6: About Us:</b> Introduce the Odvut team, their core values,
                mission, and company background, giving visitors a glimpse into
                the organization's culture and aspirations.
              </span>
              <br />

              <span className="">
                <b>7: Contact Form:</b> Facilitate communication with a
                user-friendly contact form, enabling visitors to inquire about
                services or collaborate with Odvut.
              </span>
              <br />
              <span className="">
                <b>8: Testimonials:</b> Strengthen credibility with testimonials
                from satisfied clients, affirming the quality and reliability of
                Odvut's solutions.
              </span>
              <br />
              <span className="">
                <b>9: Blog Section:</b> If applicable, incorporate a blog
                section featuring articles and insights relevant to Odvut's
                domain of expertise, establishing authority within the
                industry..
              </span>
              <br />
              <span className="">
                <b>10: Social Media Integration: </b>Provide links to Odvut's
                social media profiles, allowing visitors to stay updated and
                engaged with the latest news and announcements.
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
              Next.js: A powerful framework for server-rendered React
              applications, enabling smooth navigation and interactivity. <br />
              Tailwind CSS: A utility-first CSS framework, simplifying the
              creation of responsive and aesthetically pleasing designs.
              <br />
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
