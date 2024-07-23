"use client";
import React from "react";
import { CardStack } from "../components/ui/card-stack";

const profile = {
  fullname: "Jugal Kothari",
  birthDate: "April 22, 2003",
  college: "PES University",
  email: "jugalprakashk19@gmail.com",
};

const experiences = [
  "Kshana.AI: June - July, 2024 - Software Engineering Intern",
  "HPE-CTY Program: Feb - May, 2024 - CTY Project Team Member",
  "Center for Data Science and Machine Learning, PES University: June - July, 2023 - Research Internship"
];

const CARDS = [
  {
    id: 0,
    name: "Profile",
    designation: "",
    content: (
      <div>
        <div className="flex mb-2">
          <strong className="w-28 font-semibold">Fullname:</strong>
          <span className="text-gray-500">{profile.fullname}</span>
        </div>
        <div className="flex mb-2">
          <strong className="w-28 font-semibold">Birth Date:</strong>
          <span className="text-gray-500">{profile.birthDate}</span>
        </div>
        <div className="flex mb-2">
          <strong className="w-28 font-semibold">College:</strong>
          <span className="text-gray-500">{profile.college}</span>
        </div>
        <div className="flex mb-2">
          <strong className="w-28 font-semibold">Email:</strong>
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
          <li key={index}>{exp}</li>
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
