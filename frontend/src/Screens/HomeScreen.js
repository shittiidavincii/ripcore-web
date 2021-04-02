import React from "react";
import { Row, Col } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Styles
import "../Styles/dist/HomeScreen.css";

// Components
import Header from "../Components/Header";

function HomeScreen() {
  // React Elements

  const [ node, setNode ] = React.useState(false);
  const [ homeScrollOff, setHomeScrollOff ] = React.useState(false);

  // OnClick Functions
  const ScrollFromHome = () => {
    setHomeScrollOff(true);
  }

  // Initializations

  const title = "RIP Core";

  return (
    <div>
      <header>
        {
          node ? null : <Header title={title} />
        }
      </header>
      <br />

      <section style={{ backgroundColor: "#fff" }} className="wrapper">
        <Row>
          <Col id="const">
            <h1 id="title" style={{ textAlign: "center" }}>
              Your Plays, Your Way, All Day!
            </h1>
            <br />
            <div>
              Rip Core is a rocket league training tool based 
              around the recreation of RLCS moments.
              You can choose to take the place of any professional 
              player in these moments and try to make the plays that they did              
            </div>

            <div id="arrow"> 
              <IconButton onClick={ScrollFromHome}>
                <ArrowDownwardIcon />
              </IconButton>
            </div>
          </Col>
        </Row>
      </section>

      <section id="info">

      </section>
    </div>
  );
}

export default HomeScreen;
