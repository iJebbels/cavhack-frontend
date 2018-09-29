import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) {}

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() {}

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) {}

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() {}

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
                <PageHeader className="blue">
                  iJebbels
                  <br />
                  <small>Twitch Streamer</small>
                </PageHeader>
              {/* ADD ABOUT ME DESCRIPTION HERE */}

            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
              <PageHeader className="blue">
                My Interests
              </PageHeader>
              <Panel>
                <Panel.Body className="text">
                  <ul>
                    <li>being good doggo</li>
                    <li>eating sugar</li>
                    <li>being honest</li>
                  </ul>
                </Panel.Body>
              </Panel>

              <PageHeader className="blue">
                Awards
              </PageHeader>
              <Panel>
              <Panel.Body className="text">
                  <ul>
                    <li>2017 Streamer of the Year</li>
                    <li>Gold Youtube Play button</li>
                    <li>Cavhack Beginner web-designer</li>
                  </ul>
              </Panel.Body>
              </Panel>

               <PageHeader className="blue">
                Acquiantances
              </PageHeader>
              <Panel>
              <Panel.Body className="text">
                  <ul>
                    <li>Pewdiepie</li>
                    <li>Tyler1</li>
                    <li>All Might</li>
                  </ul>
              </Panel.Body>
              </Panel>

              <PageHeader className="blue">
                Best Selfies
              </PageHeader>
              <Panel>
              <Panel.Body className="text">
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              <Image src = '/assets/images/dog.jpg' thumbnail></Image>
              </Panel.Body>
              </Panel>

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)