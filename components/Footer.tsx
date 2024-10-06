"use client";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center">
      <footer className="inline-block p-2 mt-10 bg-srmsigkdd2 text-srmsigkdd rounded-2xl font-bold">
        <p className="text-center text-sm">
          &copy; {currentYear} SRMIST ACM SIGKDD STUDENT CHAPTER. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
