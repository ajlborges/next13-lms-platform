"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/ui/Gradient";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-medium overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.svg
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="block w-[180px] row-start-2 mb-8 md:mb-6"
            viewBox="0 0 614 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7898 94H0.244318V0.909088H32.4261C41.6686 0.909088 49.608 2.77273 56.2443 6.5C62.911 10.197 68.0322 15.5151 71.608 22.4545C75.1837 29.3939 76.9716 37.697 76.9716 47.3636C76.9716 57.0606 75.1686 65.3939 71.5625 72.3636C67.9867 79.3333 62.8201 84.6818 56.0625 88.4091C49.3352 92.1364 41.2443 94 31.7898 94ZM17.108 79.4091H30.9716C37.4564 79.4091 42.8655 78.2273 47.1989 75.8636C51.5322 73.4697 54.7898 69.9091 56.9716 65.1818C59.1534 60.4242 60.2443 54.4848 60.2443 47.3636C60.2443 40.2424 59.1534 34.3333 56.9716 29.6364C54.7898 24.9091 51.5625 21.3788 47.2898 19.0455C43.0473 16.6818 37.7746 15.5 31.4716 15.5H17.108V79.4091ZM99.9489 94H81.9489L114.722 0.909088H135.54L168.358 94H150.358L125.494 20H124.767L99.9489 94ZM100.54 57.5H149.631V71.0455H100.54V57.5ZM165.278 15.0455V0.909088H239.551V15.0455H210.778V94H194.051V15.0455H165.278ZM254.574 94H236.574L269.347 0.909088H290.165L322.983 94H304.983L280.119 20H279.392L254.574 94ZM255.165 57.5H304.256V71.0455H255.165V57.5ZM335.244 94V0.909088H370.881C377.608 0.909088 383.199 1.96969 387.653 4.0909C392.138 6.18182 395.487 9.04545 397.699 12.6818C399.941 16.3182 401.062 20.4394 401.062 25.0455C401.062 28.8333 400.335 32.0758 398.881 34.7727C397.426 37.4394 395.472 39.6061 393.017 41.2727C390.562 42.9394 387.82 44.1364 384.79 44.8636V45.7727C388.093 45.9545 391.259 46.9697 394.29 48.8182C397.35 50.6364 399.85 53.2121 401.79 56.5455C403.729 59.8788 404.699 63.9091 404.699 68.6364C404.699 73.4545 403.532 77.7879 401.199 81.6364C398.866 85.4545 395.35 88.4697 390.653 90.6818C385.956 92.8939 380.047 94 372.926 94H335.244ZM352.108 79.9091H370.244C376.366 79.9091 380.775 78.7424 383.472 76.4091C386.199 74.0455 387.562 71.0152 387.562 67.3182C387.562 64.5606 386.881 62.0758 385.517 59.8636C384.153 57.6212 382.214 55.8636 379.699 54.5909C377.184 53.2879 374.184 52.6364 370.699 52.6364H352.108V79.9091ZM352.108 40.5H368.79C371.699 40.5 374.32 39.9697 376.653 38.9091C378.987 37.8182 380.82 36.2879 382.153 34.3182C383.517 32.3182 384.199 29.9545 384.199 27.2273C384.199 23.6212 382.926 20.6515 380.381 18.3182C377.866 15.9848 374.123 14.8182 369.153 14.8182H352.108V40.5ZM419.369 94V0.909088H454.278C461.43 0.909088 467.43 2.15151 472.278 4.63636C477.157 7.12121 480.839 10.6061 483.324 15.0909C485.839 19.5455 487.097 24.7424 487.097 30.6818C487.097 36.6515 485.824 41.8333 483.278 46.2273C480.763 50.5909 477.051 53.9697 472.142 56.3636C467.233 58.7273 461.203 59.9091 454.051 59.9091H429.188V45.9091H451.778C455.96 45.9091 459.384 45.3333 462.051 44.1818C464.718 43 466.688 41.2879 467.96 39.0455C469.263 36.7727 469.915 33.9848 469.915 30.6818C469.915 27.3788 469.263 24.5606 467.96 22.2273C466.657 19.8636 464.672 18.0758 462.006 16.8636C459.339 15.6212 455.9 15 451.688 15H436.233V94H419.369ZM467.46 51.8182L490.506 94H471.688L449.051 51.8182H467.46ZM519.483 0.909088V94H502.619V0.909088H519.483ZM551.835 0.909088L572.335 35H573.062L593.653 0.909088H612.881L584.199 47.4545L613.335 94H593.79L573.062 60.1364H572.335L551.608 94H532.153L561.562 47.4545L532.517 0.909088H551.835Z"
              fill="#407BBF"
            />
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] text-[12vw] md:text-[110px] font-bold text-[#1E2B3A] leading-[1.1] tracking-[-2px] z-[100]"
          >
            Ihr Katalysator <br />
            in <span className="text-[#407BBF]">Data Science.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-full">
              <p className="text-lg leading-relaxed text-[#1a2b3b] font-medium">
                Gestalten Sie Ihre Zukunft in Data Science und Machine Learning
                mit Databrix &minus; der Plattform, die Lernen, Anwenden und
                Zusammenarbeiten nahtlos integriert.
              </p>
            </div>
            {/* <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Platform
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Gestalten Sie Ihre Zukunft in Data Science und Machine Learning mit Databrix &minus; der Plattform, die Lernen, Anwenden und Zusammenarbeiten nahtlos integriert.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Community
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Join a community of like-minded individuals, and learn from each
                other.
              </p>
            </div> */}
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              {/* <Link
                href="http://193.196.53.107"
                target="_blank"
                className="group rounded-full px-4 py-2 text-[13px] font-medium transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                App starten
              </Link> */}
              <Link
                // href="http://193.196.53.107"
                href="/sign-in"
                target="_blank"
                className="group rounded-full px-4 py-2 text-[13px] font-medium transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                Login
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/waitlist"
                className="group rounded-full px-4 py-2 text-[13px] font-medium transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Warteliste </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
      </div>
    </AnimatePresence>
  );
}
