import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="projects" ref={ref}>
        <div className="row section-intro">
   		    <div>
                <h3>Projects</h3>
                {/* <h5 className="font-serif text-3xl">More about my experiences.</h5> */}
   		    </div>
   	    </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            githublink={item.githublink}
            />
      ))}
    </BentoGrid>
    </section>
  )
});

Projects.displayName = "Projects"

const items = [
  {
    title: "Sports Department Management System",
    description: "Relational Database Management System for Sports equipments and facilities in the University using Django for backend and MySQL for Database.",
    header: <Image src="/sports_dept.jpg" 
                    alt="Sports_Department_Management_System"
                    width={500}
                    height={100}
                    className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-2",
    githublink: "https://github.com/JugalKothari/Sports-Department-Management-System",
  },
  {
    title: "YAKt-Yet-Another-KRaft",
    description: "Yet Another KRaft (YAKRaft) is one of projects as a part of the Big Data Course (UE21CS343AB) at PES University.",
    header: <Image src="/raft.jpg" 
                    alt="KRaft"
                    width={500}
                    height={100}
                    className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-1",
    githublink: "https://github.com/JugalKothari/YAKt-Yet-Another-KRaft",
  },
  {
    title: "Socket-TicTacToe",
    description:
      "Tic-Tac-Toe game using socket programming.",
    header: <Image src="/tictactoe.jpg" 
                alt="TicTacToe"
                width={500}
                height={100}
                className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-1",
    githublink: "https://github.com/JugalKothari/Socket-TicTacToe",
  },
  {
    title: "Charity Donation Blockchain System",
    description: "The Charity Donation System is a blockchain-based platform built on the Thirdweb network, designed to facilitate transparent and secure donations to charitable organizations.",
    header: <Image src="/charityblockchain.jpg" 
    alt="Charity Donation Blockchain System"
    width={500}
    height={100}
    className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-2",
    githublink: "https://github.com/JugalKothari/Charity-Donation-Blockchain-System",
  },
  {
    title: "WebScanner",
    description: "A set of Python scripts that perform various tasks related to gathering information about a domain, including obtaining the domain name, IP address, conducting Nmap scans, fetching robots.txt, and retrieving WHOIS information.",
    header: <Image src="/webscanner.jpg" 
    alt="Webscanner"
    width={500}
    height={100}
    className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-2",
    githublink: "https://github.com/JugalKothari/WebScanner",
  },
  {
    title: "Hospital Management System Java Springboot",
    description:
      "As a part of Objected Oriented Analysis and Design using Java course, built a Hospital Management System using Java, SpringBoot and MySQL which enables Hospitals to automate and speed up dialy tasks.",
    header: <Image src="/hospitalsystem.jpg" 
                    alt="Hospital_Management_System"
                    width={500}
                    height={100}
                    className="flex flex-1 w-full h-full min-h-[6rem]"/>,
    className: "md:col-span-1",
    githublink: "https://github.com/JugalKothari/Hospital-Management-System-Java-SpringBoot",
  },
];

export default Projects