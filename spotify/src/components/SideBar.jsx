import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { SiMusicbrainz } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavAction } from "../redux/actions";
import { FcLike } from "react-icons/fc";
import "../css/index.css";

const SideBar = () => {
  const favourites = useSelector((state) => state.favourite.content);
  console.log(favourites);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white d-flex flex-column align-items-start mx-4 ">
        <div className="mb-3 mt-3 d-flex align-items-center" id="main-logo">
          <SiMusicbrainz />
          <p className="mb-0" id="logo">
            Samify
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <FiHome className="mr-" />
          <p className="mb-0" id="side-bar-text">
            Home
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <VscLibrary></VscLibrary>
          <p className="mb-0" id="side-bar-text">
            Your Library
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <BsFillPlusSquareFill></BsFillPlusSquareFill>
          <p className="mb-0" id="side-bar-text">
            Create Playlist
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <GiSelfLove />
          <p className="mb-0" id="side-bar-text">
            Liked Songs
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center w-100">
          <p className="mb-0" id="favourite">
            Added to Favourite
          </p>
        </div>
        <div>
          {favourites
            ? favourites.map((fav, id) => (
                <>
                  <ListGroupItem key={id}>
                    <FcLike
                      className="mr-2"
                      onClick={() => dispatch(removeFromFavAction(fav.id))}
                    />
                    <span className="text-light">{fav}</span>
                  </ListGroupItem>
                </>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default SideBar;
