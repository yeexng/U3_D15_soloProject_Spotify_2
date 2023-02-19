import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { GiHeartOrgan } from "react-icons/gi";
import { CiBeerMugFull } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavAction } from "../redux/actions";
import { StarFill } from "react-bootstrap-icons";

const SideBar = () => {
  const favourites = useSelector((state) => state.favourite.content);
  console.log(favourites);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white d-flex flex-column align-items-start mx-2 left-navbar">
        <div className="mb-3 mt-3 d-flex align-items-center" id="main-logo">
          <CiBeerMugFull></CiBeerMugFull>
          <p className="mb-0" id="upper-left-corner-text">
            Samify
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
        <hr className="bg-light"></hr>
        <div className="mb-3 d-flex align-items-center w-100">
          <p className="mb-0" id="upper-left-corner-text">
            Added to Favourite
          </p>
        </div>
        <div>
          {favourites.map((fav, i) => (
            <>
              <ListGroupItem key={i}>
                <StarFill
                  className="mr-2"
                  onClick={() => dispatch(removeFromFavAction(fav))}
                />
                <span className="text-light">{fav}</span>
              </ListGroupItem>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
