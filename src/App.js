import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Navbar} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Row className='nav_bar'>
          <Col md={1} mdOffset={9} className='nav_item'>Home</Col>
          <Col md={1} className='nav_item'>Project</Col>
          <Col md={1} className='nav_item'>About</Col>
        </Row>
        <Row className='block front_page'>
          <Grid className='front_page_grid'>
            <Col md={7} mdOffset={5} className='title_card'>
              <div className='square'></div>
              <Row className='titles'>
                <p className='sub_title'>2017</p>
                <p className='main_title'>Tell Me Where to Look:</p>
                <p className='sub_title'>Investigating Ways for Assiting</p>
                <p className='sub_title'>Focus in 360 Video</p>
              </Row>
              <Row>
              </Row>
              <div className='blur'></div>             
            </Col>
          </Grid>
        </Row>
        <Row className='block2 block'>
        </Row>
        <Row className='block'>
        </Row>
        <Row className='block'>
        </Row>
        <Row className='block'>
        </Row>
        <Row className='block'>
        </Row>
        <Row className='block'>
        </Row>
      </div>
    );
  }
}

export default App;
