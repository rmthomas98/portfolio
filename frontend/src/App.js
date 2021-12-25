import {
  Github,
  Clipboard,
  Envelope,
  Code,
  Link45deg,
  Dot,
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

const App = () => {
  return (
    <div className="App bg-radial min-h-screen bg-fixed tracking-wide">
      <p className="text-center text-white font-thin text-2xl pt-10">
        Welcome to My Portfolio
      </p>
      <p className="text-center pt-2 text-6xl text-white font-thin">
        Ryan Thomas
      </p>
      <div className="justify-center pt-8 flex">
        <a
          href="https://github.com/rmthomas98"
          rel="noreferrer"
          target="_blank"
          className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all mr-2 flex items-center"
        >
          <Github className="mr-2" />
          Github
        </a>
        <p
          href="/"
          className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all mr-2 cursor-pointer flex items-center"
        >
          <Clipboard className="mr-2" />
          Resume
        </p>
        <p className="text-white font-thin bg-black/25 rounded-lg pt-2 pb-2 pl-6 pr-6 hover:bg-black/40 transition-all cursor-pointer flex items-center">
          <Envelope className="mr-2" />
          Contact
        </p>
      </div>
      <div className="pt-20">
        <p className="text-center text-white font-thin text-3xl border-b border-slate-500/50 pb-2 max-w-sm mx-auto">
          Personal Projects
        </p>
        <div className="pt-10 flex justify-center">
          <div className="rounded-lg bg-white/10 p-4 mr-6 shadow-xl shadow-slate-800">
            <img
              src={movies}
              alt="movie explorer"
              className="w-96 rounded-lg"
            />
            <p className="text-white font-base text-2xl pt-2 pb-1">
              Movie Explorer
            </p>
            <p className="text-white font-thin flex items-center pb-2 max-w-fit border-b border-slate-500/50 mb-2 ">
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
          <div className="rounded-lg bg-white/10 p-4 shadow-xl shadow-slate-800">
            <img
              src={dashboard}
              alt="Admin Dashboard"
              className="w-96 rounded-lg"
            />
            <p className="text-white font-base text-2xl pt-2 pb-2">
              Admin Dashboard
            </p>
            <p className="text-white font-thin flex items-center pb-2 max-w-fit border-b border-slate-500/50 mb-2">
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
      <div className="pt-20">
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
            <p className="text-white font-thin flex items-center pb-2 max-w-fit border-b border-slate-500/50 mb-2">
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
      <div className="pt-20 pb-20">
        <p className="text-center text-white font-thin text-3xl border-b border-slate-500/50 pb-2 max-w-sm mx-auto">
          Skills
        </p>
        <div className="pt-10 flex justify-center">
          <div className="border-r border-slate-500/50 p-4">
            <p className="text-center text-white pb-4 font-medium text-lg">
              Frameworks/Libraries
            </p>
            <div className="flex">
              <div className="p-4">
                <img src={react} alt="react" className="h-12" />
                <p className="text-center text-white font-thin mt-2">React</p>
              </div>
              <div className="p-4 flex flex-col items-center">
                <img src={tailwind} alt="tailwind" className="h-12" />
                <p className="text-center text-white font-thin mt-2">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-slate-500/50 p-4">
            <p className="text-center text-white pb-4 font-medium text-lg">
              Languages
            </p>
            <div className="flex">
              <div className="p-4 flex flex-col items-center">
                <img src={javascript} alt="javascript" className="h-12" />
                <p className="text-center text-white font-thin mt-2">
                  Javascript
                </p>
              </div>
              <div className="p-4">
                <img src={css} alt="css" className="h-12" />
                <p className="text-center text-white font-thin mt-2">CSS</p>
              </div>
              <div className="p-4">
                <img src={html} alt="html" className="h-12" />
                <p className="text-center text-white font-thin mt-2">HTML</p>
              </div>
            </div>
          </div>
          <div className="border-r border-slate-500/50 p-4">
            <p className="text-center text-white pb-4 font-medium text-lg">
              Version Control
            </p>
            <div className="p-4 flex flex-col items-center">
              <img src={git} alt="git" className="h-12" />
              <p className="text-center text-white font-thin mt-2">Git</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-center text-white font-medium text-lg pb-4">
              Hosting
            </p>
            <div className="p-4">
              <img src={netlify} alt="netlify" className="h-12" />
              <p className="text-center text-white font-thin mt-2">Netlify</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-500/50 bg-slate-900/50 w-full p-8 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <p className="text-lg uppercase font-thin">Ryan Thomas</p>
          <div className="flex">
            <a
              href="https://github.com/rmthomas98"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-4 hover:text-cyan-500 transition-all cursor-pointer" />
            </a>
            <a href="/">
              <Clipboard className="mr-4 hover:text-cyan-500 transition-all cursor-pointer" />
            </a>
            <a href="">
              <Envelope className="hover:text-cyan-500 transition-all cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
