import {
  Github,
  Clipboard,
  Envelope,
  Code,
  Link45deg,
  Dot,
  Telephone,
  X,
} from "react-bootstrap-icons";
import movies from "./assets/images/movies.png";
import dashboard from "./assets/images/dashboard.png";
import react from "./assets/images/react.svg";
import css from "./assets/images/css3.svg";
import tailwind from "./assets/images/tailwind.svg";
import clover from "./assets/images/clover.png";
import html from "./assets/images/html.svg";
import javascript from "./assets/images/javascript.svg";
import git from "./assets/images/git.svg";
import netlify from "./assets/images/netlify.svg";
import resume from "./assets/files/ryan-thomas-resume.pdf";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App bg-radial min-h-screen bg-fixed tracking-wide">
      <p className="text-center text-white font-thin text-2xl pt-10">
        Welcome to My Portfolio
      </p>
      <p className="text-center pt-2 text-6xl text-white font-thin">
        Ryan Thomas
      </p>
      <div className="justify-center pt-8 flex flex-col mobile:flex-row pl-4 pr-4">
        <a
          href="https://github.com/rmthomas98"
          rel="noreferrer"
          target="_blank"
          className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all flex items-center justify-center mb-2 mobile:mr-2 mobile:mb-0"
        >
          <Github className="mr-2" />
          Github
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all cursor-pointer flex items-center justify-center mb-2 mobile:mr-2 mobile:mb-0"
        >
          <Clipboard className="mr-2" />
          Resume
        </a>
        <p
          className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <Envelope className="mr-2" />
          Contact
        </p>
      </div>
      <div className="pt-16 mobile:pt-20 pl-4 pr-4">
        <p className="text-center text-white font-thin text-3xl border-b border-slate-500/50 pb-2 max-w-sm mx-auto">
          Personal Projects
        </p>
        <div className="pt-10 flex flex-col justify-center tablet:flex-row">
          <div className="rounded-lg bg-white/10 p-4 shadow-xl shadow-slate-800 mx-auto mb-6 tablet:mr-6 tablet:-mx-0 tablet:mb-0">
            <img
              src={movies}
              alt="movie explorer"
              className="w-96 rounded-lg"
            />
            <p className="text-white font-base text-2xl pt-2 pb-1">
              Movie Explorer
            </p>
            <p className="text-white font-thin flex items-center pb-2 max-w-sm border-b border-slate-500/50 mb-2 ">
              Find the perfect movie for any occasion. Look through different
              genres, see what the most popular movies are, and much more.
            </p>
            <p className="text-white mb-2 font-medium">Technicals</p>
            <p className="text-white font-thin flex items-center pb-1">
              <Dot />
              <img src={react} alt="react" className="h-4 mr-1" />
              React | <img src={css} alt="css" className="h-4 mr-1 ml-1" />
              CSS Modules
            </p>
            <p className="text-white font-thin pb-4 flex items-center">
              <Dot />
              Info from IMDb REST API
            </p>
            <div className="pb-2 flex">
              <a
                href="https://github.com/rmthomas98/movies"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg mr-2 flex items-center hover:bg-black/40 transition-all"
              >
                <Code className="mr-2" />
                Code
              </a>
              <a
                href="https://affectionate-hypatia-176903.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg flex items-center hover:bg-black/40 transition-all"
              >
                <Link45deg className="mr-2" />
                Live
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-4 shadow-xl shadow-slate-800 mx-auto tablet:-mx-0">
            <img
              src={dashboard}
              alt="Admin Dashboard"
              className="w-96 rounded-lg"
            />
            <p className="text-white font-base text-2xl pt-2 pb-2">
              Admin Dashboard
            </p>
            <p className="text-white font-thin flex items-center pb-2 max-w-sm border-b border-slate-500/50 mb-2">
              Admin dashboard to see your personal account information for
              sales, transactions, and other visualized data.
            </p>
            <p className="text-white mb-2 font-medium">Technicals</p>
            <p className="text-white font-thin flex items-center pb-1">
              <Dot />
              <img src={react} alt="react" className="h-4 mr-1" />
              React |{" "}
              <img src={tailwind} alt="tailwindcss" className="h-3 mr-1 ml-1" />
              Tailwind CSS
            </p>
            <p className="text-white font-thin pb-4 flex items-center">
              <Dot />
              UI Focused
            </p>
            <div className=" flex">
              <a
                href="https://github.com/rmthomas98/dashboard"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg mr-2 flex items-center hover:bg-black/40 transition-all"
              >
                <Code className="mr-2" />
                Code
              </a>
              <a
                href="https://adoring-cray-0da24f.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg flex items-center hover:bg-black/40 transition-all"
              >
                <Link45deg className="mr-2" />
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 mobile:pt-20 pl-4 pr-4">
        <p className="text-center text-white font-thin text-3xl border-b border-slate-500/50 pb-2 max-w-sm mx-auto">
          Freelance Work
        </p>
        <div className="flex justify-center pt-10">
          <div className="rounded-lg bg-white/10 p-4 shadow-xl shadow-slate-800">
            <img
              src={clover}
              alt="mini golden doodles"
              className="w-96 rounded-lg"
            />
            <p className="text-white font-base text-2xl pt-2 pb-2">
              Mini Golden Doodles
            </p>
            <p className="text-white font-thin flex items-center pb-2 border-b border-slate-500/50 mb-2 max-w-sm">
              Showcased info about the clients puppies so they could be sold.
              They asked for pictures of the dogs to be on display along with
              info about them.
            </p>
            <p className="text-white mb-2 font-medium">Technicals</p>
            <p className="text-white font-thin flex items-center pb-1">
              <Dot />
              <img src={react} alt="react" className="h-4 mr-1" />
              React | <img src={css} alt="css" className="h-4 mr-1 ml-1" />
              CSS
            </p>
            <p className="text-white font-thin pb-4 flex items-center">
              <Dot />
              Contact form through emailJs
            </p>
            <div className=" flex">
              <a
                href="https://github.com/rmthomas98/cloversminigoldendoodles"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg mr-2 flex items-center hover:bg-black/40 transition-all"
              >
                <Code className="mr-2" />
                Code
              </a>
              <a
                href="https://www.cloversminigoldendoodles.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white font-thin bg-black/25 pt-2 pb-2 pr-6 pl-6 rounded-lg flex items-center hover:bg-black/40 transition-all"
              >
                <Link45deg className="mr-2" />
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-16 mobile:pt-20 pl-4 pr-4">
        <p className="text-center text-white font-thin text-3xl border-b border-slate-500/50 pb-2 max-w-sm mx-auto">
          Skills
        </p>
        <div className="pt-10 flex-wrap items-center skills-column:flex skills-column:justify-center ">
          <div className="flex-col flex skills:flex-row">
            <div className="skills-column:border-r border-slate-500/50 p-4 mx-auto tablet:mx-0 border-b w-72 skills:border-b-0">
              <p className="text-center text-white pb-4 font-medium text-lg">
                Frameworks/Libraries
              </p>
              <div className="flex justify-center">
                <div className="p-4">
                  <img src={react} alt="react" className="h-10" />
                  <p className="text-center text-white font-thin mt-2">React</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <img src={tailwind} alt="tailwind" className="h-10" />
                  <p className="text-center text-white font-thin mt-2">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="border-slate-500/50 p-4 mx-auto tablet:mx-0 border-r-0 border-b w-72 skills:border-b-0 skills-column:border-r skills-column:border-b-0">
              <p className="text-center text-white pb-4 font-medium text-lg w-64">
                Languages
              </p>
              <div className="flex justify-center">
                <div className="p-4 flex flex-col items-center">
                  <img src={javascript} alt="javascript" className="h-10" />
                  <p className="text-center text-white font-thin mt-2">
                    Javascript
                  </p>
                </div>
                <div className="p-4">
                  <img src={css} alt="css" className="h-10" />
                  <p className="text-center text-white font-thin mt-2">CSS</p>
                </div>
                <div className="p-4">
                  <img src={html} alt="html" className="h-10" />
                  <p className="text-center text-white font-thin mt-2">HTML</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col flex skills:flex-row">
            <div className="skills:border-r border-slate-500/50 p-4 mx-auto tablet:mx-0 border-b w-72 skills:border-b-0">
              <p className="text-center text-white pb-4 font-medium text-lg">
                Version Control
              </p>
              <div className="p-4 flex flex-col items-center">
                <img src={git} alt="git" className="h-10" />
                <p className="text-center text-white font-thin mt-2">Git</p>
              </div>
            </div>
            <div className="p-4 w-72 mx-auto">
              <p className="text-center text-white font-medium text-lg pb-4 mx-auto">
                Hosting
              </p>
              <div className="p-4 flex flex-col items-center">
                <img src={netlify} alt="netlify" className="h-10" />
                <p className="text-center text-white font-thin mt-2">Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-500/50 bg-slate-900/50 w-full p-8 text-white ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <p className="uppercase font-thin ">Ryan Thomas</p>
          <div className="flex">
            <a
              href="https://github.com/rmthomas98"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-4 hover:text-cyan-500 transition-all cursor-pointer" />
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              <Clipboard className="mr-4 hover:text-cyan-500 transition-all cursor-pointer" />
            </a>
            <p onClick={() => setIsOpen(true)}>
              <Envelope className="hover:text-cyan-500 transition-all cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full backdrop-blur transition-all duration-200 ${
          isOpen ? "opacity-1 z-10" : "opacity-0 z-modal"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`h-36 w-72 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg p-4 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isOpen ? "opacity-1 z-20" : "opacity-0 z-modal"
        }`}
      >
        <div className="flex justify-between text-white items-center pb-2">
          <p className="font-medium text-lg">Contact</p>
          <X
            className="cursor-pointer text-3xl text-white/75 hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex items-center">
          <Envelope className="mr-2" />
          <a
            href="mailto:ryanmthomas01@gmail.com"
            className="font-thin text-white/75 hover:text-white transition-all"
          >
            ryanmthomas01@gmail.com
          </a>
        </div>
        <div className="flex items-center mt-4">
          <Telephone className="mr-2" />
          <a
            href="tel:9373218714"
            className="font-thin text-white/75 hover:text-white transition-all"
          >
            (937)-321-8714
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
