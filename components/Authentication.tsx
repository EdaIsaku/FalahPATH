"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Moon, Sun } from "lucide-react";

export default function AuthenticationUnified() {
  const [tab, setTab] = useState("signup");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const darkMode = theme === "dark";

  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden transition ${
        darkMode ? "bg-black" : "bg-[#f5f5f7]"
      }`}
    >
      {/* 🌈 Floating gradients */}
      <motion.div
        animate={{ opacity: darkMode ? 0.6 : 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -80, 0], x: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className={`w-[450px] h-[450px] blur-[120px] rounded-full absolute -top-20 -left-20 ${"bg-purple-500/50"}`}
        />

        <motion.div
          animate={{ y: [0, 120, 0], x: [0, -80, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className={`w-[450px] h-[450px] blur-[130px] rounded-full absolute -bottom-20 -right-20 ${"bg-blue-500/40"}`}
        />
      </motion.div>

      {/* 🌙☀️ Dark mode toggle */}
      <button
        onClick={() => setTheme(darkMode ? "light" : "dark")}
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 transition cursor-pointer"
      >
        {darkMode ? (
          <Sun className="text-yellow-300" />
        ) : (
          <Moon className="text-gray-800" />
        )}
      </button>

      {/* 🟦 Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          relative z-10 w-[420px] rounded-3xl px-10 py-10
          backdrop-blur-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.08)]
          transition
          ${
            darkMode
              ? "bg-white/10 border-white/10"
              : "bg-white/40 border-white/30"
          }
        `}
      >
        {/* Tabs */}
        <div
          className={`flex mb-8 rounded-full p-1 transition ${
            darkMode
              ? "bg-white/5 border border-white/10"
              : "bg-white/50 border border-white/40 backdrop-blur-xl"
          }`}
        >
          <button
            onClick={() => setTab("signup")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              tab === "signup"
                ? darkMode
                  ? "bg-white/20 text-white"
                  : "bg-white shadow text-gray-900"
                : darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>

          <button
            onClick={() => setTab("signin")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              tab === "signin"
                ? darkMode
                  ? "bg-white/20 text-white"
                  : "bg-white shadow text-gray-900"
                : darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h2
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {tab === "signup" ? "Create an account" : "Welcome back"}
            </h2>

            <form className="space-y-4">
              {tab === "signup" && (
                <div className="flex gap-3">
                  <input
                    placeholder="First name"
                    className={`input-unified w-1/2 ${
                      darkMode ? "dark" : "light"
                    }`}
                  />
                  <input
                    placeholder="Last name"
                    className={`input-unified w-1/2 ${
                      darkMode ? "dark" : "light"
                    }`}
                  />
                </div>
              )}

              <input
                type="email"
                placeholder="Enter your email"
                className={`input-unified w-full ${
                  darkMode ? "dark" : "light"
                }`}
              />

              {tab === "signup" && (
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={`input-unified w-full ${
                    darkMode ? "dark" : "light"
                  }`}
                />
              )}

              <input
                type="password"
                placeholder="Password"
                className={`input-unified w-full ${
                  darkMode ? "dark" : "light"
                }`}
              />

              <button
                className={`w-full py-3 rounded-xl font-medium transition cursor-pointer ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-300"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {tab === "signup" ? "Create Account" : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <span
                className={`h-px w-full ${
                  darkMode ? "bg-white/10" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`text-sm px-3 ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                OR
              </span>
              <span
                className={`h-px w-full ${
                  darkMode ? "bg-white/10" : "bg-gray-300"
                }`}
              ></span>
            </div>

            {/* Social login */}
            <div className="flex gap-4">
              <button
                className={`social-unified cursor-pointer ${
                  darkMode ? "dark" : "light"
                } w-1/2`}
              >
                <FcGoogle className="text-xl" />
              </button>
              <button
                className={`social-unified cursor-pointer hover:text-black ${
                  darkMode ? "dark" : "light"
                } w-1/2`}
              >
                <FaApple
                  className={`text-xl ${
                    darkMode ? " hover:text-black" : "text-black"
                  }`}
                />
              </button>
            </div>

            {tab === "signup" && (
              <p
                className={`text-xs text-center mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                By creating an account, you agree to our{" "}
                <span className={darkMode ? "text-white" : "text-black"}>
                  Terms & Service
                </span>
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Global input + button styles */}
      <style jsx>{`
        .input-unified.light {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.15);
          color: #111;
        }
        .input-unified.dark {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }
        .input-unified {
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 0.9rem;
          transition: 0.2s;
        }
        .input-unified.light:focus {
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.35); /* border më i errët */
          background: rgba(255, 255, 255, 0.95);
        }
        .input-unified.dark:focus {
          outline: none;
          border: 1px solid #b966e7; /* lejla në dark mode */
          background: rgba(
            255,
            255,
            255,
            0.08
          ); /* mbetet transparente, s'bëhet e bardhë */
        }
        .social-unified.light {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
        .social-unified.dark {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .social-unified {
          padding: 12px;
          border-radius: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s;
        }
        .social-unified:hover {
          background: white;
        }
      `}</style>
    </div>
  );
}
