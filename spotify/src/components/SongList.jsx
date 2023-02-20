import { useState } from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Album from "./Album";
import { getSongsAsyncAction } from "../redux/actions";

const SongList = () => {
  const results = useSelector((state) => state.search.stock);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSongsAsyncAction(query));
  };

  return (
    <>
      <Container className="my-3">
        {
          <Row className="justify-content-between">
            <Col xs={3} className="mr-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search here..."
                />
              </Form>
            </Col>
            <Col xs={1}>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Sam
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Row className="mt-3 mb-5">
              {results ? (
                results.map((albumData, i) => (
                  <Album key={albumData.id} data={albumData} i={i} />
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </Row>
          </Row>
        }
      </Container>
      );
    </>
  );
};

export default SongList;
