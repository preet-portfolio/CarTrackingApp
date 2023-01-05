import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Head>
        <title>About the Car Document Tracking App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold">
          About the Car Document Tracking App
        </h1>
        <p className="text-gray-700">
          Welcome to the Car Document Tracking App! This app is designed to help
          you keep track of all of your car`s documents and their expiration
          dates, so you never have to worry about forgetting to renew them. With
          our app, you`ll be able to easily view and manage all of your car`s
          documents in one place, and receive reminders when a document is about
          to expire.
        </p>
        <h2 className="text-xl font-bold">Key Features</h2>
        <ul className="list-disc pl-4">
          <li className="text-gray-700">
            Easy document management: With our app, you can view and manage all
            of your car`s documents in one place. You can easily add new
            documents and update their expiration dates, so you always have the
            most up-to-date information.
          </li>
          <li className="text-gray-700">
            Customized reminders: Set up customized reminders for when your
            documents are about to expire, so you never have to worry about
            missing a renewal deadline.
          </li>
          <li className="text-gray-700">
            Secure and private: Your car`s documents are important, and we
            understand the importance of keeping them safe and secure. That`s
            why we use advanced security measures to protect your information
            and keep it private.
          </li>
        </ul>
        <p className="text-gray-700">
          Thank you for choosing the Car Document Tracking App. We hope it helps
          you stay organized and on top of your car document management needs!
        </p>
      </div>
    </div>
  );
};

export default About;
