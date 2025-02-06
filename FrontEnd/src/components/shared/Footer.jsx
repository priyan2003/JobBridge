import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 items-center px-6">
      <p>© {new Date().getFullYear()} Job Bridge. All Rights Reserved.</p>
      <div className=" flex justify-center items-center space-x-4">
        <h1 className="font-bold text-lg">Follow Us on:</h1>
        <div className="flex justify-center gap-4">
        <a href="#" className="hover:text-white text-xl">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-white text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-white text-xl">
          <FaLinkedin />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
