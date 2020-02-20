import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/css/CreatorDetails.css";
import { fetchCreatorDetails } from '../../redux/actions/Creators/creatorDetailsAction';
import Header from '../../components/elements/Header/Header';
import HeroImage from '../../components/elements/HeroImage/HeroImage';

export class CreatorDetails extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.fetchCreatorDetails(id);
  }
render() {
  const { creatorDetails } = this.props;   
     
    return (
        <>
        <Header />
        <HeroImage />
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
      </>
    );
  }
  
}
export const mapStateToProps = state => ({
  creatorDetails: state.creatorDetails.creatorDetails,
  creatorDetailsErrors: state.creatorDetailsErrors
});

export default connect(mapStateToProps, { fetchCreatorDetails })(CreatorDetails);
