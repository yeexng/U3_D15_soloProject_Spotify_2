import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
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
      <Container>
        {
          <Row>
            <Col xs={10} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search here..."
                />
              </Form>
            </Col>

            <Row>
              {results ? (
                results.map((albumData) => (
                  <Album key={albumData.id} data={albumData} />
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
