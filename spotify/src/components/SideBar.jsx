import { Form } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { GiHeartOrgan } from "react-icons/gi";
import { CiBeerMugFull } from "react-icons/ci";

const SideBar = () => {
  return (
    <>
      <div className="text-white d-flex flex-column align-items-start mx-2 left-navbar">
        <div className="mb-3 mt-3 d-flex align-items-center" id="main-logo">
          <CiBeerMugFull></CiBeerMugFull>
          <p className="mb-0" id="upper-left-corner-text">
            Sammify
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <FiHome></FiHome>
          <p className="mb-0" id="upper-left-corner-text">
            Home
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <VscLibrary></VscLibrary>
          <p className="mb-0" id="upper-left-corner-text">
            Your Library
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <BsFillPlusSquareFill></BsFillPlusSquareFill>
          <p className="mb-0" id="upper-left-corner-text">
            Create Playlist
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <GiHeartOrgan></GiHeartOrgan>
          <p className="mb-0" id="upper-left-corner-text">
            Liked Songs
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
