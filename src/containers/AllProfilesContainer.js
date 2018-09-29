import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

// Hardcoded users for All Profiles page
const users = [
  {
    id: 1,
    firstName: 'Max',
    lastName: 'Huynh',
  },
  {
    id: 2,
    firstName: 'Sam',
    lastName: 'Borak',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
          <Col xs={6} md={4} lg={3}>
          <Thumbnail src="/assets/images/person-placeholder.png">
          <h3>Max Huynh</h3>
          <p>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/?user=' + 1)}>
            View Profile
            </Button>
          </p>
          </Thumbnail>
          </Col>

                    <Col xs={6} md={4} lg={3}>
          <Thumbnail src="/assets/images/person-placeholder.png">
          <h3>Sam Borak</h3>
          <p>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/?user=' + 2)}>
            View Profile
            </Button>
          </p>
          </Thumbnail>
          </Col>

        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer