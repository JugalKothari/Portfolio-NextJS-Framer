"use client";
import React from "react";
import { CardStack } from "../components/ui/card-stack";
import { Highlight } from "./ui/hero-highlight";

const profile = {
  fullname: "Jugal Kothari",
  birthDate: "April 22, 2003",
  college: "PES University",
  email: "jugalprakashk19@gmail.com",
};

const experiences = [
  {
    company: "Kshana.AI",
    duration: "June - July, 2024",
    role: "Software Engineering Intern"
  },
  {
    company: "HPE-CTY Program",
    duration: "Feb - May, 2024",
    role: "CTY Project Team Member"
  },
  {
    company: "Center for Data Science and Machine Learning, PES University",
    duration: "June - July, 2023",
    role: "Research Internship"
  }
];

const CARDS = [
  {
    id: 0,
    name: "Profile",
    designation: "",
    content: (
      <div className="text-lg flex flex-col justify-center">
        <div className="mb-2">
          <strong className="w-28 font-semibold">Fullname: </strong>
          <span className="text-gray-500">{profile.fullname}</span>
        </div>
        <div className="mb-2">
          <strong className="w-28 font-semibold">Birth Date: </strong>
          <span className="text-gray-500">{profile.birthDate}</span>
        </div>
        <div className="mb-2">
          <strong className="w-28 font-semibold">College: </strong>
          <span className="text-gray-500">{profile.college}</span>
        </div>
        <div className="mb-2">
          <strong className="w-28 font-semibold">Email: </strong>
          <span className="text-gray-500">{profile.email}</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    name: "Experiences",
    designation: "",
    content: (
      <ul className="list-disc list-inside space-y-1">
        {experiences.map((exp, index) => (
          <li key={index}>
            <Highlight className="text-black">{exp.company}</Highlight>: {exp.duration} - {exp.role}
          </li>
        ))}
      </ul>
    ),
  },
];

export function Profile() {
  return (
    <div className="flex items-center justify-center w-full mt-5">
      <CardStack items={CARDS} />
    </div>
  );
}

export default Profile;
