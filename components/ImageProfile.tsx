"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import ShareModal from "./ShareModal"; // Adjust the path as needed
import Image from 'next/image';

const ImageProfile: React.FC = () => {
  const imageUrl = "https://srmsigkdd.vercel.app/static/media/srmsigkdd.23f2521d9133f1a1056f.png";
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center relative">
      <Image
        src={imageUrl}
        alt="Profile"
        width={130}
        height={130}
        className="object-cover rounded-md"
      />
      <h2 className="mt-4 text-2xl font-bold text-srmsigkdd block sm:inline-block">
        SRMIST ACM SIGKDD STUDENT CHAPTER
      </h2>
      <p className="mt-2 text-md font-semibold text-srmsigkddborder max-w-md mx-auto block sm:inline-block">
        Welcome to our custom built linktree! Let&apos;s connect and explore opportunities for collaboration and growth.
      </p>
      <button
        onClick={toggleModal}
        className="absolute top-4 right-4 bg-srmsigkddbutton rounded-xl p-2 shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        <span className="text-srmsigkdd font-semibold">Share</span>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className="w-6 h-6 text-srmsigkdd ml-2" style={{ transform: 'rotate(45deg)' }} />
      </button>
      <ShareModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default ImageProfile;
