import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../css/index.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { SlLoop } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const songInfo = useSelector((state) => state.musicPlayer.song);
  return (
    <Row id="navbar-bottom" className="bg-dark">
      <nav className="navbar fixed-bottom bg-dark ">
        <div className="navbar-brand w-100">
          <div className="d-flex justify-content-between align-items-center">
            <Col md={2} className="d-flex align-items-center ">
              <div className="album-photo mx-3">
                <img
                  src={
                    songInfo.length !== 0
                      ? songInfo.album.cover_medium
                      : "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="album-details text-light">
                <div id="player-title" className="d-flex flex-column ">
                  {songInfo.length !== 0
                    ? songInfo.title
                    : "Click On Something"}
                </div>
                <div id="player-artist">
                  {songInfo.length !== 0 ? songInfo.artist.name : "Artist"}
                </div>
              </div>
              <div>
                <span>
                  <FcLikePlaceholder className="mx-2" />
                </span>
                <span>
                  <svg
                    className="item-2 text-light"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                        fillRule="nonzero"
                      ></path>
                      <path d="M10 8h4v3h-4z"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </Col>
            <div className="d-flex flex-column ">
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <BiShuffle className="text-light mr-1" />
                </div>
                <div>
                  <AiFillStepBackward className="text-light mr-1" />
                </div>
                <div className="pb-1">
                  <FaRegPlayCircle className="text-light mr-1" />
                </div>
                <div>
                  <AiFillStepForward className="text-light mr-1" />
                </div>
                <div>
                  <SlLoop className="text-light" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="slider_container">
                  <span className="current-time text-light mx-1">00:00</span>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="seek_slider"
                  />
                  <span className="total-duration text-light mx-1">01:50</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <BsThreeDots className="text-light mx-1" />
              </div>

              <div className="nav-icon" id="mute">
                <BsFillVolumeUpFill className="text-light mx-1" />
              </div>
              <div className="nav-icon d-none" id="unmute">
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume off"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 uPxdw"
                >
                  <path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>
                  <path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
                </svg>
              </div>
              <div className="slider_container-volume">
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="volume_slider"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Row>
  );
};

export default MusicPlayer;
