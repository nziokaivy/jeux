import React, { Component } from "react";
import { connect } from "react-redux";
import "./CreatorDetails.css";
import { fetchCreatorDetails } from '../../redux/actions/creatorDetailsAction';

 class CreatorDetails extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchCreatorDetails } = this.props;
    await fetchCreatorDetails(id);
  }
render() {
  const { creatorDetails, creatorDetailsErrors} = this.props;      
    return (
        
      <div className="creatorDetails">
          <h1 className="allGames-title"> Creator Details</h1>
          <hr className='legend' />
        {creatorDetails && (
          <div className="row">
            <div className="image-column">
              <img
                className="image"
                src={creatorDetails.image}
              />
            </div>
            <div className="details-column">
              <p><strong>Name: </strong> {creatorDetails.name}</p>
              <p><strong>Description: </strong>{creatorDetails.description}</p>
              <p><strong>Game Count: </strong> {creatorDetails.games_count}</p>
              <p><strong>Rating:</strong> {creatorDetails.rating}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
}
const mapStatetoProps = state => ({
  creatorDetails: state.creatorDetails.creatorDetails,
  creatorDetailsErrors: state.creatorDetailsErrors
});

export default connect(mapStatetoProps, { fetchCreatorDetails })(CreatorDetails);