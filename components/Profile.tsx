"use client";
import React from "react";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "@/lib/utils";

const profile = {
  fullname: "Jugal Kothari",
  birthDate: "April 22, 2003",
  college: "PES University",
  email: "jugalprakashk19@gmail.com",
};

const experiences = [
  "Kshana.AI: Developing APIs using FastAPI in Python, Container Monitoring on Microsoft Azure",
  "HPE-CTY Program: Developed a Gen-AI based solution to automate code optimization in Python by creating an adaptive layer for an existing LLM (Llama-3 8B).",
  "Extensive experience in Machine Learning gained during a two-month research internship at CDSMAL, PES University."
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
