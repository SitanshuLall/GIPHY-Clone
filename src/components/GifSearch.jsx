import { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const [qurey, setQuery] = useState();
  const navigate = useNavigate();

  const searchGifs = async () => {
    if (qurey.trim() === "") {
      return;
    }
    navigate(`/search/${qurey}`);
  };

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      searchGifs();
    }
  }

  return (
    <div className="flex relative">
      <input
        type="text"
        value={qurey}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border-gray-300 outline-none"
        onKeyDown={handleInputEnter}
      />

      {qurey && (
        <button
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
          onClick={() => setQuery("")}
        >
          <HiMiniXMark size={22}/>
        </button>
      )}

      <button
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
        onClick={searchGifs}
      >

        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
