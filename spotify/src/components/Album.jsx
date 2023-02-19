import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";

const Album = ({ data }) => {
  console.log(data);
  return (
    <>
      <Col xs={12} md={6} lg={2}>
        <div className="mb-3 pt-3 pb-4">
          <div className="mx-3">
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
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Album;
