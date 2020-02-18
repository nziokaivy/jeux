import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import "./StoreDetails.css";
import { fetchStoreDetails } from '../../redux/actions/Stores/storeDetailsAction';

export class StoreDetails extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchStoreDetails } = this.props;
    await fetchStoreDetails(id);
  }
render() {
  const { storeDetails, storeDetailsErrors} = this.props;
  console.log('storeDetails',storeDetails);
       
    return (
        
      <div className="creatorDetails">
          <h1 className="allGames-title"> Store Details</h1>
          <hr className='legend' />
        {storeDetails && (
          <div className="row">
            <div className="image-column">
              <img
                className="image"
                src={storeDetails.image_background}
              />
            </div>
            <div className="details-column">
              <p><strong>Name: </strong> {storeDetails.name}</p>
              <p><strong>Description: </strong>{storeDetails.description}</p>
              <p><strong>Game Count: </strong> {storeDetails.games_count}</p>
              <p><strong>Domain: </strong><a href={`https://${storeDetails.domain}`} target="blank">{storeDetails.domain}</a></p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
}
export const mapStateToProps = state => ({
  storeDetails: state.storeDetails.storeDetails,
  storeDetailsErrors: state.storeDetailsError,
});

export default connect(mapStateToProps, { fetchStoreDetails })(StoreDetails);
