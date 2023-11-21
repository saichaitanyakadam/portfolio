import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Certificates, technicalSkills } from "../constants/AppConstants";

const Skills = () => {
  const { nightMode } = useContext(AppContext);
  return (
    <div className="w-full flex flex-col gap-5">
      <div
        className={`${
          nightMode ? "bg-[#333]" : "bg-white"
        } flex flex-col p-5 rounded-lg lg:p-10 shadow-xl w-full`}
      >
        <h2 className="text-4xl font-serif mb-2">Skills</h2>
        <hr />
        {technicalSkills.map((item) => (
          <div key={item.label}>
            <h3 className="text-2xl font-[400] mb-2">{item.label}</h3>
            <ul className="pl-10 list-disc">
              {item.skills.map((item, index) => (
                <li key={index} className="font-[400] capitalize">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className={`${
          nightMode ? "bg-[#333]" : "bg-white"
        } flex flex-col p-5 rounded-lg lg:p-10 shadow-xl w-full`}
      >
        <h2 className="text-4xl font-serif mb-2">Certificates</h2>
        <hr />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {Certificates.map((item) => (
            <a href={item.link} target="_self" key={item.id}>
              <li className="border p-3 rounded-lg hover:bg-blue-200 hover:text-white">
                <h4>{item.title}</h4>
                <p>{item.provider}</p>
                <p>Issued on {item.issuedOn}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div
        className={`${
          nightMode ? "bg-[#333]" : "bg-white"
        } flex flex-col p-5 rounded-lg lg:p-10 shadow-xl w-full`}
      >
        <h2 className="text-4xl font-serif mb-2">Languages</h2>
        <hr />
        <ul className="pl-10 list-disc font-[400]">
          <li>English</li>
          <li>Hindi</li>
          <li>Telugu</li>
          <li>Marathi</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
