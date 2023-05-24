import { FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-24 bg-[#2d2940] h-64 ">
      <div className="text-center container mx-auto px-8 py-9 max-w-4xl mb-0">
        <h1 className="text-3xl text-white font-bold">
          {" "}
          Unleash Your Musical Genius{" "}
        </h1>
        <p className="text-white">
          Time to pull a Kanye and drop the mic ! Remember, music is like a
          banana,peel it, savor the sweet sounds, and let your creativity jam!
          Don't miss a beat—follow us on social media for more groovy updates
          and join our musical fam! Stay tuned and stay awesome!
        </p>
      </div>
      <div className="flex justify-center mb-3 ">
        <a
          href="https://instagram.com/__ja.ckson?igshid=OGQ5ZDc2ODk2ZA==" 
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 mr-4"
        >
          <FaInstagram className="text-white text-3xl hover:text-gray-400" />
        </a>
        <a
          href="https://twitter.com/jackson__gerald"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FaTwitter className="text-white text-3xl hover:text-gray-400" />
        </a>
      </div>
      <div className="mb-3">
      <p className="text-sm text-white text-center ">© 2023 BeatSell. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
