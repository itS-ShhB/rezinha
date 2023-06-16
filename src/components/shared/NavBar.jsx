import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="flex bg-[#333652] text-white z-30 w-full top-0 sticky border-b-2 border-[#FAD02C]">
      <ul className="flex items-start justify-start w-full">
        <Link to="/">
          <motion.li
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
          >
            Home
          </motion.li>
        </Link>
        <Link to="/products">
          <motion.li
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
          >
            Products
          </motion.li>
        </Link>
        <Link to="/aboutus">
          <motion.li
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
          >
            About Us
          </motion.li>
        </Link>
        <Link to="/contactus">
          <motion.li
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
          >
            Contact Us
          </motion.li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
