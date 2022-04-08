import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import MarkingAPI from "../Components/MarkingAPI";

function Admin() {
  return (
    <Container>
      <Tabs
        defaultActiveKey='Marking'
        transition={true}
        id='api-control-panel'
        className='m-3'>
        <Tab eventKey='Marking' title='Marking'>
          <MarkingAPI />
        </Tab>
        <Tab eventKey='Cleaning' title='Cleaning'>
          text
        </Tab>
        <Tab eventKey='Welding' title='Welding'>
          ttext
        </Tab>
        <Tab eventKey='Leads' title='Leads'>
          ttext
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Admin;
