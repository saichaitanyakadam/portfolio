import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ProjectsData } from "../constants/AppConstants";
import { FaRegCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Projects = () => {
  const { nightMode } = useContext(AppContext);
  return (
    <div
      className={`${
        nightMode ? "bg-[#333]" : "bg-slate-300"
      } flex flex-col p-5 rounded-lg lg:p-10 shadow-lg border border-gray-200 w-full`}
    >
      <h2 className="text-4xl font-serif mb-2">Projects</h2>
      <hr className="border-gray-200" />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {ProjectsData.map((project) => (
          <li
            key={project.id}
            className="relative shadow-lg  rounded-lg text-sm md:text-base"
          >
            <img
              src={project.img}
              alt="project"
              className="opacity-40  rounded-lg"
            />
            <div className="absolute top-5 left-10 text-[#444]">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="font-bold mb-2 flex">
                  <span className="no-underline">Title: </span>
                  <p className="underline">{project.title}</p>
                </div>
              </a>
              <p>
                <span className="font-bold">Skills:</span>{" "}
                {project.skills.join(", ")}
              </p>
              {project.credentials && (
                <div>
                  <p className="font-bold">Credentials:</p>
                  <div className="flex items-center">
                    <span className="font-semibold">Username: </span>
                    <p>{project.credentials.username}</p>

                    <span
                      className="ml-auto"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          project.credentials.username
                        );
                        toast.success("username coppied!");
                      }}
                    >
                      <FaRegCopy />
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">Password: </span>
                    <p>{project.credentials.password}</p>

                    <span
                      className="ml-auto"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          project.credentials.password
                        );
                        toast.success("password coppied!");
                      }}
                    >
                      <FaRegCopy />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Projects;
