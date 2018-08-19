import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Image, Modal , ModalBody, ModalHeader} from 'react-bootstrap'

import SysImg from './image/System_structure_img.jpg'
import Award1 from './image/award_1.png'
import Award2 from './image/award_2.png'
import IconImg from './image/icon.png'

class App extends Component {

  state = {
    isOpen: [false, false, false, false, false, false]
  }

  handleOpen = (id) => {
    let tmp = [...this.state.isOpen]
    tmp[id] = true
    this.setState({isOpen: tmp})
  }

  handleHide = (id) => {
    let tmp = [...this.state.isOpen]
    tmp[id] = false
    this.setState({isOpen: tmp})
  }

  handleRightArrow = (id) => {
    let targetModal = document.getElementsByClassName('multipage')[0]
    targetModal = targetModal.getElementsByClassName('modal-content')[0]
    targetModal.getElementsByClassName('modal-body')[id].style.visibility = 'hidden'
    targetModal.getElementsByClassName('modal-body')[id+1].style.visibility = 'visible'
  }

  handleLeftArrow = (id) => {
    let targetModal = document.getElementsByClassName('multipage')[0]
    targetModal = targetModal.getElementsByClassName('modal-content')[0]
    targetModal.getElementsByClassName('modal-body')[id].style.visibility = 'hidden'
    targetModal.getElementsByClassName('modal-body')[id-1].style.visibility = 'visible'
  }

  render() {
    return (
      <div>
        <div className='slides'>
          <Row className='nav_bar'>
            <Col sm={2} className='nav_item'>
              <Image src={IconImg} alt='icon' responsive/>
              <div className='icon_title'>
                <p>NTHU</p>
                <p>ELSA</p>
              </div>
            </Col>
            <Col sm={1} smOffset={7} className='nav_item'>Home</Col>
            <Col sm={1} className='nav_item'>Project</Col>
            <Col sm={1} className='nav_item'>About</Col>
          </Row>
        <div className='slide_parallax'>
          <Row className='slide'>
            <div className='back_layer'></div>
            <div className='base_layer'>
              <Grid>
                <Col sm={7} smOffset={5} className='title_card'>
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
                <Col sm={3} className='media_title'>
                  <p className='main_title'>System Structure</p>
                  <div className='square'></div>
                </Col>
                <Col sm={9} className='media_content'>
                  <Image src={SysImg} alt="System Image" responsive/>
                </Col>
              </Row>
            </Grid>
          </Row>

          <Row className='slide'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Col sm={8} smOffset={2} className='content_block'>
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
              <Col sm={10} smOffset={1}>
                <Row className='title_block'>
                  <p className='main_title'>Proposed Methodology</p>
                  <div className='square'></div>
                </Row>
                <Row className='btn_slide_sub'>
                  <p className='main_title' onClick={()=>this.handleOpen(0)}>Bridge the Gap between Simulation and Reality</p>
                  <Modal
                    show={this.state.isOpen[0]}
                    dialogClassName='img_dialog'
                  >
                    <ModalHeader>
                      <p className='main_title'>Bridge the Gap between Simulation and Reality</p>
                      <div className='square cross'
                        onClick={()=>this.handleHide(0)}
                      >
                      </div>
                    </ ModalHeader>
                    <ModalBody>
                      <div className='hover_block'></div>
                      <Col sm={6} className='media_sub'>
                        <Image src='' alt='put image here' responsive />
                      </Col>
                      <Col sm={6} className='content_sub'>
                        <p className='title'>The model consists of a perception and a control module:</p>
                        <p>- The perception module translates RGB images from the monocular cameras into scene semantic segmentation.</p>
                        <p>- The control module takes image segmentation as inputs.</p>
                        <p className='title'>Training Methodology:</p>
                        <p>- During training, the control module only receives the image segmentations rendered by simulators.</p>
                        <p>- During execution, the control module receives image segmentations from the perception module.</p>
                        <p>- The perception module is only used during execution.</p>
                      </Col>
                    </ ModalBody>
                  </Modal>
                </Row>
                <Row className='btn_slide_sub'>
                  <p className='main_title' onClick={()=>this.handleOpen(1)}>Training in Simulated Enviorments</p>
                  <Modal
                    show={this.state.isOpen[1]}
                    dialogClassName='img_dialog'
                  >
                    <ModalHeader>
                      <p className='main_title'>Training in Simulated Enviorments</p>
                      <div className='square cross'
                        onClick={()=>this.handleHide(1)}
                      >
                      </div>
                    </ ModalHeader>
                    <ModalBody>
                      <div className='hover_block'></div>
                      <Col sm={6} className='media_sub'>
                        <Image src='' alt='put image here' responsive />
                      </Col>
                      <Col sm={6} className='content_sub'>
                        <p className='title'>Three Simulated Environments Rendered by 3D Unity:</p>
                        <p>- Simple corridor: features straight passages, sharp turns, static obstacles (e.g, chairs), and moving obstacles (e.g, human).</p>
                        <p>- Cluttered hallway: features a narrow hallway crammed with static obstacles, and moving obstacles.</p>
                        <p>- Outdoor: features an outdoor roadway with sidewalks, buildings, terrain, as well as moving cars and pedestrians.</p>
                        <p className='title'>Two Evaluation Tasks:</p>
                        <p>- Obstacle avoidance: the agent’s goal is to navigate in a diverse set of scenes, and avoid colliding with obstacles.</p>
                        <p>- During execution, the control module receives image segmentations from the perception module.</p>
                        <p>- Target following: the objective of the agent is to follow the moving target (person) while avoiding collisions.</p>
                      </Col>
                    </ ModalBody>
                  </Modal>
                </Row>
                <Row className='btn_slide_sub'>
                  <p className='main_title' onClick={()=>this.handleOpen(2)}>Visual Guidance Module and Target Switching</p>
                  <Modal
                    show={this.state.isOpen[2]}
                    dialogClassName='img_dialog multipage'
                  >
                    <ModalHeader>
                      <p className='main_title'>Visual Guidance Module and Target Switching</p>
                      <div className='square cross'
                        onClick={()=>this.handleHide(2)}
                      >
                      </div>
                    </ ModalHeader>
                    <ModalBody>
                      <div className='hover_block'>
                        <div className='square'></div>
                      </div>
                      <Col sm={1} className='left_arrow'>
                      </Col>
                      <Col sm={10}>
                        <Image src='' alt='put image here' responsive />
                        <p className='title'>Visual Guidance Module for Target Decision:</p>
                        <p>- The modular architecture can be augmented with a visual guidance module.</p>
                        <p>- It does not require any re-training, fine-tuning, and extra data in the above scenarios.</p>
                      </Col>
                      <Col sm={1} className='right_arrow'>
                        <div className='square' onClick={()=>this.handleRightArrow(0)}></div>
                      </Col>
                    </ ModalBody>
                    <ModalBody>
                      <div className='hover_block'></div>
                      <Col sm={1} className='left_arrow'>
                        <div className='square' onClick={()=>this.handleLeftArrow(1)}></div>
                      </Col>
                      <Col sm={10}>
                        <Image src='' alt='put image here' responsive />
                        <p className='title'>Switching the Following Target:</p>
                        <p>- It is easy to alter the target following robot’s objective by modifying the label to its new target.</p>
                        <p>- Our agent is able to successfully follow or catch the randomly specified targets in either the simulated environments or the real world.</p>
                      </Col>
                      <Col sm={1} className='right_arrow'>
                      </Col>
                    </ ModalBody>
                  </Modal>
                </Row>
              </Col>
            </Grid>
          </Row>

          <Row className='slide'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Col sm={10} smOffset={1}>
                  <Row className='title_block'>
                      <p className='main_title'>Experimental Results</p>
                      <div className='square'></div>
                  </Row>
                  <Row className='btn_slide_sub'>
                    <p className='main_title' onClick={()=>this.handleOpen(3)}>Model Settings and Robotic Platform</p>
                    <Modal
                    show={this.state.isOpen[3]}
                    dialogClassName='plain_dialog'
                    >
                      <ModalHeader>
                        <p className='main_title'>Model Settings and Robotic Platform</p>
                        <div className='square cross'
                          onClick={()=>this.handleHide(3)}
                        >
                        </div>
                      </ ModalHeader>
                      <ModalBody>
                        <div className='hover_block'></div>
                        <Col sm={5} smOffset={1} className='media_sub'>
                          <Image src='' alt='put image here' responsive />
                        </Col>
                        <Col sm={5} className='content_sub' >
                          <p>- Vanilla A3C with Adam optimizer.</p>
                          <p>- Both the learning rate and epsilon set to 0.001.</p>
                          <p>- Trained for 5M frames collected by 16 threads.</p>
                          <p>- Kobuki robotic platform</p>
                          <p>- Executed on an NVIDIA Jetson TX2.</p>
                          <p>- Interfaced via robot operating system.</p>
                          <p>- On-board RGB camera</p>
                        </Col>
                      </ ModalBody>
                    </Modal>
                  </Row>
                  <Row className='btn_slide_sub'>
                    <p className='main_title'>Learning Curves of the Two Tasks</p>
                  </Row>
                  <Row className='btn_slide_sub'>
                    <p className='main_title'>Comparison in the Simulated and Real Worlds</p>
                  </Row>
                </Col>
              </Grid>
            </div>
          </Row>

          <Row className='slide'>
            <Grid>
              <Col sm={4} className='title_col'>  
                <div className='hover_block'></div>
                <p className='main_title'> Awarding </p>
                <div className='square'></div>
              </Col>
              <Col sm={8} className='media_block_multi'>
                <Image src={Award1} alt='award' responsive/>
                <Image src={Award2} alt='award' responsive/>
              </Col>
            </Grid>
          </Row>

          <Row className='slide'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Grid>
                <Row className='media_block'>
                  <Col sm={3} className='media_title'>
                    <p className='main_title'>Video Overview</p>
                    <div className='square'></div>
                  </Col>
                  <Col sm={9} className='media_content'>
                    <iframe title='demo video' src="https://www.youtube.com/embed/8osw3ElPAvY?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>  
                  </Col>
                </Row>
              </Grid>
            </div>
          </Row>

          <Row className='slide'>
            <Grid>
              <Col sm={8} smOffset={2} className='content_block'>
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

          <Row className='footer'>
            <div className='back_layer'>
              <div className='hover_block'></div>
            </div>
            <div className='base_layer'>
              <Col sm={6} smOffset={6} className='next_button'>
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

      </div>
    );
  }
}

export default App;
