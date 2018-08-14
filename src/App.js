import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Image, ResponsiveEmbed } from 'react-bootstrap'
import SysImg from './image/System_structure_img.jpg'

class App extends Component {
  render() {
    return (
      <div>

        <div className='side_bar'>
          <div className='lil_square'></div>
          <div className='lil_square'></div>
          <div className='lil_square'></div>
          <div className='lil_square'></div>
          <div className='lil_square'></div>
          <div className='lil_square'></div>
        </div>

        <Row className='nav_bar'>
          <Col md={1} mdOffset={9} className='nav_item'>Home</Col>
          <Col md={1} className='nav_item'>Project</Col>
          <Col md={1} className='nav_item'>About</Col>
        </Row>

        <div className='slides'>

          <Row className='slide slide_parallax'>
            <div className='back_layer'></div>
            <div className='base_layer'>
              <Grid>
                <Col md={7} mdOffset={5} className='title_card'>
                  <div className='hover_block'></div>
                  <div className='square'></div>
                  <Row className='titles'>
                    <p className='sub_title'>2017</p>
                    <p className='main_title'>Virtual-to-Real:</p>
                    <p className='sub_title'>Learning to Control in Visual Semantic</p>
                    <p className='sub_title'>Segmentation</p>
                  </Row>             
                </Col>
              </Grid>
            </div>
          </Row>

          <Row className='slide'>
            <Grid>
              <Row className='media_block'>
                <div className='hover_block'></div>  
                <Col md={3} className='media_title'>
                  <p className='main_title'>System Structure</p>
                  <div className='square'></div>
                </Col>
                <Col md={9} className='media_content'>
                  <Image src={SysImg} alt="System Image" responsive/>
                </Col>
              </Row>
            </Grid>
          </Row>

          <Row className='slide slide_parallax'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Col md={8} mdOffset={2} className='content_block'>
                  <Row className='title_block'>
                    <p className='main_title'>Abstract</p>
                    <div className='square'></div>
                  </Row>  
                  <Row> 
                    <p className='content_text'>Collecting training data from the physical world is usually time-consuming and even dangerous for fragile robots, and therefore, recent advances in robot learning propose to use simulators as the training platform. Unfortunately, the reality gap between synthetic and real visual data prohibits directly migrating the models trained in virtual worlds to the real world. This paper proposes a modular architecture for tackling simulation- to-reality problem. The architecture separates the learning model into a perception module and a control policy module, and uses semantic image segmentation as the meta representation for relating these two modules. The perception module translates RGB images to semantic image segmentations. The control policy module employs deep reinforcement learning (RL) methods and takes image segmentations as its inputs. Experimental results show that our architecture outperforms all baseline methods in the virtual and real environments, and learns faster than them.</p>   
                  </Row> 
                  <div className='bar'></div>      
                </Col>
              </Grid>
            </div>
          </Row>

          <Row className='slide'>
            <Grid>
              <Col md={10} mdOffset={1}>
                <Row className='title_block'>
                    <p className='main_title'>Proposed Methodology</p>
                    <div className='square'></div>
                </Row>
                <Row className='btn_slide_sub'>
                  <p>Bridge the Gap between Simulation and Reality</p>
                </Row>
                <Row className='btn_slide_sub'>
                  <p>Training in Simulated Enviorments</p>
                </Row>
                <Row className='btn_slide_sub'>
                  <p>Visual Guidance Module and Target Switching</p>
                </Row>
              </Col>
            </Grid>
          </Row>

          <Row className='slide slide_parallax'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Row className='media_block'>
                  <Col md={3} className='media_title'>
                    <p className='main_title'>Video Overview</p>
                    <div className='square'></div>
                  </Col>
                  <Col md={9} className='media_content'>
                    <iframe src="https://www.youtube.com/embed/8osw3ElPAvY?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>  
                  </Col>
                </Row>
              </Grid>
            </div>
          </Row>

          <Row className='slide'>
            <Grid>
              <Col md={8} mdOffset={2} className='content_block'>
                <Row className='title_block'>
                  <p className='main_title'>Content</p>
                  <div className='square'></div>
                </Row>  
                <Row> 
                  <p className='content_text'>We presented a new modular architecture for transferring policies learned in simulation to the real world for vision-based roboticcontrol. We proposed to separate the model in to a perception module and a control policy module, and introduce the concept of using semantic image segmentation as the meta state for relating these two modules. We trained our model with a standard RL algorithm, and did not apply any domain randomization technique. We performed experiments in two benchmark tasks: an obstacle avoidance task and a target following task, and demonstrated that our proposed method outperforms the baseline models in both virtual and real environments. We analyzed the use of scene semantics as the meta state, and show that this structured form of representations does improve the learning speed of our model</p>   
                </Row> 
                <div className='bar'></div>      
              </Col>
            </Grid>
          </Row>

          <Row className='footer slide_parallax'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Col md={6} mdOffset={6} className='next_button'>
                <div className='hover_block'></div>
                <Row>
                  <p className='sub_title'>Next Project >></p>
                  <p className='main_title'>Semantic Highlight</p>
                  <p className='main_title'>Retrieval</p>
                </Row>      
              </ Col>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
