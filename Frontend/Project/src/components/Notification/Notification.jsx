import { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import AppURL from "../../API/AppURL";
import axios from "axios";

export class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      NotificationData: [],
      NotificationMsg: "",
      NotificationTitle: "",
      Notificationdate: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.Notification)
      .then((response) => {
        this.setState({ NotificationData: response.data });
      })
      .catch(() => {});
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let NMsg = event.target.getAttribute("data-message");
    let NTitle = event.target.getAttribute("data-title");
    let NDate = event.target.getAttribute("data-date");
    this.setState({
      NotificationMsg: NMsg,
      NotificationTitle: NTitle,
      Notificationdate: NDate,
    });
  };

  render() {
    const NotiList = this.state.NotificationData;
    const View = NotiList.map((noti, i) => {
      return (
        <Col key={i.toString()} className=" p-1 " md={4} lg={4} sm={6} xs={6}>
          <Card
            onClick={this.handleShow}
            className="notification-card"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <h6> {noti.title}</h6>
              <p className="py-1  px-0 text-primary m-0">
                <i className="fa  fa-bell"></i> Date: {noti.date} | Status:
                Unread
              </p>
              <Button
                variant="dark"
                data-title={noti.title}
                data-date={noti.date}
                data-message={noti.message}
              >
                Detail
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{View}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date: {this.state.Notificationdate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>
              <b>{this.state.NotificationTitle}</b>
            </h6>
            <p>{this.state.NotificationMsg}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
