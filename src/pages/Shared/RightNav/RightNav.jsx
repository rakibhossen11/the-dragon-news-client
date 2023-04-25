import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h2 className="mt-4">Login With</h2>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Log in with google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Log in with github
      </Button>
      <div>
        <h4 className="m-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook /> Facebook </ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
          <ListGroup.Item> <FaInstagram /> Instragram </ListGroup.Item>
        </ListGroup>
        <QZone />
        <div>
            <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
