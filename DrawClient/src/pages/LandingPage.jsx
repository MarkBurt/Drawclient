import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleCanvas from "../components/SimpleCanvas";
import Navbar from "../components/Navbar";
import { diagram } from "../data/heroDiagram";
import FadeIn from "../animations/FadeIn";
import axios from "axios";

function shortenNumber(number) {
  if (number < 1000) return number;

  if (number >= 1000 && number < 1_000_000)
    return `${(number / 1000).toFixed(1)}k`;
}

export default function LandingPage() {
  const [stats, setStats] = useState({ stars: 18000, forks: 1200 });

  useEffect(() => {
    const fetchStats = async () => {
      await axios
        .get("https://api.github-star-counter.workers.dev/user/drawdb-io")
        .then((res) => setStats(res.data));
    };

    document.body.setAttribute("theme-mode", "light");
    document.title =
      "数据库设计 | 数据库设计与数据库SQL生成";

    fetchStats();
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen bg-zinc-100">
        <div className="text-white font-semibold py-1 text-sm text-center bg-linear-to-r from-[#12495e] from-10% via-slate-500 to-[#12495e]" />

        <FadeIn duration={0.6}>
          <Navbar />
        </FadeIn>

        {/* Hero section */}
        <div className="flex-1 flex-col relative mx-4 md:mx-0 mb-4 rounded-3xl bg-white">
          <div className="h-full md:hidden">
            <SimpleCanvas diagram={diagram} zoom={0.85} />
          </div>
          <div className="hidden md:block h-full bg-dots" />
          <div className="absolute left-12 w-[45%] top-[50%] translate-y-[-54%] md:left-[50%] md:translate-x-[-50%] p-8 md:p-3 md:w-full text-zinc-800">
            <FadeIn duration={0.75}>
              <div className="md:px-3">
                <h1 className="text-[42px] md:text-3xl font-bold tracking-wide bg-linear-to-r from-sky-900 from-10% via-slate-500 to-[#12495e] inline-block text-transparent bg-clip-text">
                  Draw, Copy, and Paste
                </h1>
                <div className="text-lg font-medium mt-1 sliding-vertical">
                  数据库设计与数据库SQL生成.方便.容易.轻量{" "}
                  <br/>
                  <span className="ms-2 sm:block sm:ms-0 text-slate-500 bg-white font-bold whitespace-nowrap">
                    SQL生成
                  </span>
                  <span className="ms-2 sm:block sm:ms-0 text-slate-500 bg-white font-bold whitespace-nowrap">
                    小巧轻量
                  </span>
                  <span className="ms-2 sm:block sm:ms-0 text-slate-500 bg-white font-bold whitespace-nowrap">
                   使用方便
                  </span>
                </div>
              </div>
            </FadeIn>
            <div className="mt-4 font-semibold md:mt-12">
              <Link
                to="/editor"
                className="inline-block py-3 text-white transition-all duration-300 rounded-full shadow-lg bg-sky-900 ps-7 pe-6 hover:bg-sky-800"
              >
                立即使用 <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-700 py-1 text-center text-white text-xs font-semibold px-3">
       注意！数据库图表已保存在您的缓存中。在清除缓存数据之前，请务必先备份您的数据。
      </div>
      <hr className="border-zinc-300" />
      <div className="text-center text-sm py-3">
        &copy; 2025 <strong>DrawClient</strong> - All right reserved.
      </div>
    </div>
  );
}