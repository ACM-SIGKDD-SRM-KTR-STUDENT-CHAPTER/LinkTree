"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin,  faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons"; // Import fire and link icons
import { SiAcm,  SiDatabricks,  SiVercel } from "react-icons/si"; // Import specific icons from react-icons

interface SocialCardProps {
  platform: string;
  url: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ platform, url }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <FontAwesomeIcon icon={faInstagram} size="2x" />;
      case "linkedin":
        return <FontAwesomeIcon icon={faLinkedin} size="2x" />;
      case "twitter":
        return <FontAwesomeIcon icon={faXTwitter} size="2x" />;
      case "sigkdd":
        return <SiDatabricks size="2em" />; // Use specific icon for Leetcode
      case "acm":
        return <SiAcm size="2em" />; // Use specific icon for Codeforces
      case "official website":
        return <SiVercel size="2em" />;
      case "github":
        return <FontAwesomeIcon icon={faGithub} size="2x" />;
      default:
        return <FontAwesomeIcon icon={faLink} size="2x" />; 
    }
  };

  return (
    <div className="social-card grid-cols-5 marginer relative group w-64 p-4 border-2 border-srmsigkdd bg-srmsigkdd text-srmsigkddtext rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-srmsigkdd2 hover:text-srmsigkdd hover:border-srmsigkdd hover:shadow-lg shadow-2xl shadow-srmsigkdd/20 hover:shadow-srmsigkdd/50">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <div className="h-10 w-10 flex justify-center items-center rounded-full transition duration-300 ease-in-out group-hover:bg-srmsigkdd2">
          {getIcon(platform)} {/* Render the icon dynamically */}
        </div>
        <p className="ml-4 text-lg font-medium transition duration-0 ease-in-out group-hover:text-srmsigkdd">{platform}</p>
      </a>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  const links = [
    { platform: "Official Website", url: "https://srmsigkdd.vercel.app/" },
    { platform: "Github", url: "https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER" },
    { platform: "Linkedin", url: "https://www.linkedin.com/company/acmsigkddsrm" },
    { platform: "Instagram", url: "https://www.instagram.com/srmsigkdd" },
    { platform: "Twitter", url: "https://x.com/srmsigkdd" },
    { platform: "ACM", url: "https://www.acm.org/" },
    { platform: "SIGKDD", url: "https://www.kdd.org/" },
  ];

  return (
    <div className="flex flex-wrap justify-center lg:gap-4 md:gap-0 sm:gap-0 md:grid md:grid-cols-2 lg:grid-cols-4">
      {links.map((link) => (
        <SocialCard key={link.platform} platform={link.platform} url={link.url} />
      ))}
    </div>
  );
};

export default SocialLinks;
