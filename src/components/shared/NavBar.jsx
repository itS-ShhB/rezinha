import { motion } from "framer-motion";

function NavBar() {
  return (
    <header className="flex bg-[#333652] text-white z-30 w-full top-0 sticky border-b-2 border-[#FAD02C]">
      <ul className="flex items-start justify-start w-full">
        <motion.li
          whileHover={{ scale: 1.2, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
        >
          Products
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
        >
          About Us
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          className="py-3 px-2 m-2 hover:font-bold opacity-60 cursor-pointer hover:border-b-2 hover:border-[#FAD02C]"
        >
          Contact Us
        </motion.li>
      </ul>
    </header>
  );
}

export default NavBar;
