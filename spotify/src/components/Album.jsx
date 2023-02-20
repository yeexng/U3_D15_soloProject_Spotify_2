import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import {
  addToFavAction,
  removeFromFavAction,
  musicPlayerAction,
} from "../redux/actions";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import "../css/index.css";

const Album = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();
  const isFav = favourites.includes(data.title_short);

  console.log(data);
  return (
    <>
      <Col xs={12} md={6} lg={2}>
        <div className="mb-3 pt-3 pb-4">
          <div
            className="mx-3"
            onClick={() => {
              dispatch(musicPlayerAction(data));
            }}
          >
            <img src={data.album.cover} alt="" className="mb-2 album-image" />
            <div className="text-truncate">
              <p className="mb-1 text-start text-truncate text-light">
                {data.title_short}
              </p>
              <p className="mb-0 text-start text-truncate text-light">
                {data.album.title}
              </p>
              <p className="mb-0 text-start text-truncate text-light">
                {data.artist.name}
              </p>
              {isFav ? (
                <FcLike
                  color="gold"
                  size={16}
                  className="mr-2 my-auto"
                  onClick={() =>
                    dispatch(removeFromFavAction(data.title_short))
                  }
                />
              ) : (
                <>
                  <FcLikePlaceholder
                    color="gold"
                    size={16}
                    className="mr-2 my-auto"
                    onClick={() => dispatch(addToFavAction(data.title_short))}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Album;
