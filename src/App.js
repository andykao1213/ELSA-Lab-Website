import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Image} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>

        <div className='side_bar'>
          <div className='lil_square'></div>
          <div className='lil_square reverse'></div>
          <div className='lil_square'></div>
          <div className='lil_square reverse'></div>
          <div className='lil_square'></div>
          <div className='lil_square reverse'></div>
        </div>

        <Row className='nav_bar'>
          <Col md={1} mdOffset={9} className='nav_item'>Home</Col>
          <Col md={1} className='nav_item'>Project</Col>
          <Col md={1} className='nav_item'>About</Col>
        </Row>

        <div className='camera'>
          <Row className='block front_page space'>
            <div className='back_layer'></div>
            <div className='base_layer'>
              <Grid>
                <Col md={7} mdOffset={5} className='title_card'>
                  <div className='square square1'></div>
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
            </div>
          </Row>
          <Row className='block2 block'>
            <Grid>
              <Row className='image_block'>
                <Col md={3} className='image_title'>
                  <p className='main_title'>System Structure</p>
                  <div className='square square2'></div>
                </Col>
                <Col md={8} className='image_content'>
                </Col>
              </Row>
            </Grid>
          </Row>
          <Row className='block3 block space'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Col md={8} mdOffset={2} className='content_block'>
                  <Row className='title_block'>
                    <p className='main_title'>Abstract</p>
                    <div className='square square3'></div>
                  </Row>  
                  <Row> 
                    <p className='content_text'>360° videos give viewers a spherical view and immersive experience of surroundings. However, one challenge of watching 360° videos is continuously focusing and re-focusing intended targets. To address this challenge, we developed two Focus Assistance techniques: Auto Pilot (directly bringing viewers to the target), and Visual Guidance (indicating the direction of the target). We conducted an experiment to measure viewers’ video-watching experience and discomfort using these techniques and obtained their qualitative feedback. We showed that: 1) Focus Assistance improved ease of focus. 2) Focus Assistance techniques have specificity to video content. 3) Participants’ preference of and experience with Focus Assistance depended not only on individual difference but also on their goal of watching the video. 4) Factors such as view-moving-distance, salience of the intended target and guidance, and language comprehension affected participants’ video-watching experience. Based on these findings, we provide design implications for better 360° video focus assistance.</p>   
                  </Row> 
                  <div className='bar'></div>      
                </Col>
              </Grid>
            </div>
          </Row>
          <Row className='block block4'>
            <Grid>
              <Row>
                  <p className='main_title'>Sports-360 dataset</p>
                  <div className='square'></div>
              </Row>
              <Row>
                <img src='http://aliensunmin.github.io/project/360video/CVPR2017/sports-360.png' />
              </Row>
              <Row>
                <p className='sub_title'>Following resources are provided</p>
              </Row>
              <Row>
                <Col md={1}>
                  <img src={require('./image/github-logo.png')} />
                </Col>
                <Col md={1}>
                  <img src={require('./image/blank-file.png')} />
                </Col>
                <Col md={1}>
                  <img src={require('./image/blank-file.png')} />
                </Col>
                <Col md={1}>
                  <img src={require('./image/blank-file.png')} />
                </Col>
              </Row>
              <Row></Row>
            </Grid>
          </Row>
          <Row className='block block5 space'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Row className='image_block'>
                  <Col md={3} className='image_title'>
                    <p className='main_title'>Video Overview</p>
                    <div className='square square2'></div>
                  </Col>
                  <Col md={9} className='image_content'>
                    <iframe className='video' width="90%" height="80%" src="https://www.youtube.com/embed/8osw3ElPAvY?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  </Col>
                </Row>
              </Grid>
            </div>
          </Row>
          <Row className='block block6'>
            <Grid>
              <Col md={8} mdOffset={2} className='content_block'>
                <Row className='title_block'>
                  <p className='main_title'>Content</p>
                  <div className='square'></div>
                </Row>  
                <Row> 
                  <p className='content_text'>360° videos give viewers a spherical view and immersive experience of surroundings. However, one challenge of watching 360° videos is continuously focusing and re-focusing intended targets. To address this challenge, we developed two Focus Assistance techniques: Auto Pilot (directly bringing viewers to the target), and Visual Guidance (indicating the direction of the target). We conducted an experiment to measure viewers’ video-watching experience and discomfort using these techniques and obtained their qualitative feedback. We showed that: 1) Focus Assistance improved ease of focus. 2) Focus Assistance techniques have specificity to video content. 3) Participants’ preference of and experience with Focus Assistance depended not only on individual difference but also on their goal of watching the video. 4) Factors such as view-moving-distance, salience of the intended target and guidance, and language comprehension affected participants’ video-watching experience. Based on these findings, we provide design implications for better 360° video focus assistance.</p>   
                </Row> 
                <div className='bar'></div>      
              </Col>
            </Grid>
          </Row>
          <Row className='footer space'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Col md={6} mdOffset={6} className='next_button'>
                <Row>
                  <p className='sub_title'>Next Project >></p>
                </Row>
                <Row>
                  <p className='main_title'>Semantic Highlight</p>
                </Row>
                <Row>
                  <p className='main_title'>Retrieval</p>
                </Row>
                <div className='blur'></div>      
              </ Col>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
