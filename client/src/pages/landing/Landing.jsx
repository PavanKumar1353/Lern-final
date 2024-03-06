import React, { useEffect, useState } from "react";
import "./Landing.scss";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { Navbar, Button } from "@material-tailwind/react";
import book from "../../assets/images/dancingbook.json";
import f1 from "../../assets/images/F1.webp";
import f2 from "../../assets/images/F2.webp";
import f3 from "../../assets/images/F3.webp";
import appLogo from "../../assets/icons/logo.svg";
import gcp from "../../assets/icons/gcp.svg";
import mdb from "../../assets/icons/mongodb.svg";
import palm from "../../assets/icons/palm.svg";
import discord from "../../assets/icons/discord.svg";
import github from "../../assets/icons/github.svg";
import isLogged from "../../services/logged";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const navigate = useNavigate();
  const auth = useAuthStore((state) => state.auth);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    async function checkLogged() {
      const logged = await isLogged();
      setLoggedIn(logged);
    }
    checkLogged();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="Landing"
    >
      <Navbar className="nav-con max-w-7xl">
        <div className="container mx-auto flex items-center justify-between ">
          <img src={appLogo} alt="logo" className="w-20" />
          <Button
            size="md"
            className="bg-cblack font-medium text-sm hover:shadow-sd rounded-md"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </div>
      </Navbar>

      <section className="mt-10 py-10 px-6 md:py-15 md:px-8 xl:py-28 xl:px-10 flex flex-col md:flex-row max-w-7xl bg-slate-50 rounded-xl">
        <div className="flex flex-1 items-center justify-center md:justify-start flex-col gap-10 md:pr-10 xl:pr-20">
          <div className="hero-head text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-7xl ">
              Learn{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl text-cblue">
                Anything
              </span>
              ,
            </p>
            <p className="text-4xl md:text-5xl lg:text-7xl ">
              <span className="text-4xl md:text-5xl lg:text-7xl text-cpink">
                Anytime
              </span>
              ,{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl text-cteal">
                Anywhere
              </span>
            </p>
          </div>
          <div className="hero-subhead text-2xl text-center md:text-left text-cblack">
            Experience a customized learning journey that adapts to your unique
            needs and empowers you to excel in any subject.
          </div>
          <div className="w-full hero-btn flex items-center justify-center md:justify-start gap-5">
            <Button
              size="md"
              className="bg-cblack font-medium text-sm hover:shadow-sd"
              onClick={() => navigate("/login")}
            >
              Start Learning
            </Button>
            <Button
              size="md"
              className="bg-cblack font-medium text-sm hover:shadow-sd"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <Player
            autoplay
            loop
            src={book}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Landing;
