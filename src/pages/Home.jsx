import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Profile from "../assets/profile.jpg";

const Home = () => {
  const { nightMode } = useContext(AppContext);
  return (
    <div
      className={`${
        nightMode ? "bg-[#333]" : "bg-white"
      } flex flex-col justify-center lg:flex-row items-center p-5 rounded-lg lg:p-10 gap-5 shadow-xl self-center`}
    >
      <img
        src={Profile}
        className="w-[85%] lg:w-[30%] hover:scale-105 shadow-slate-300 shadow-lg rounded-lg"
        alt="profile"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-[700] font-serif">Sai Chaitanya Kadam</h2>
        <p className="text-xl font-[200]">
          Fresher looking for opportunity to start career as Full-Stack
          developer.
        </p>
      </div>
    </div>
  );
};

export default Home;
