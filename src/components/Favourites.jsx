import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Row>
      <Col sm={12} className="mb-5">
        <ListGroup variant="flush">
          {favourites.length > 0 ? (
            favourites.map((job, i) => (
              <ListGroup.Item key={i}>
                <img
                  className="book-cover-small roundedCircle"
                  src="https://images.pexels.com/photos/4240587/pexels-photo-4240587.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="job selected"
                />
                {job.title}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="lead ">
              <span className="text-primary opacity-50 fs-1 me-2"> </span>
              Al momento non ci sono annunci salvati
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Favourites;
