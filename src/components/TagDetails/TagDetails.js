import React, { Component } from "react";
import { connect } from "react-redux";
import "./TagDetails.css";
import { fetchTagDetails } from '../../redux/actions/tagDetailsAction';

export class TagDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTagDetails(id);
    let tagInfo;
    if (this.props.fetchTagDetails) {
      tagInfo = this.props.fetchTagDetails;
    }
  }

  render() {
    const { tagDetails, tagDetailsError } = this.props;
    console.log('tagDetails', tagDetails);
    
    return (
        <div className="main-game-details">
        <h1 className="allGames-title"> Tag Details</h1>
        <hr className='legend' />
      <div className="gameDetails">
        {tagDetails && (
          <div className="row">
            <div className="column-image">
              <img
                className="image"
                src={tagDetails.image_background}
              />
            </div>
            <div className="column-details">
              <p><strong>Name:</strong> {tagDetails.name}</p>
              <p><strong>Games Count:</strong> {tagDetails.games_count} games</p>
            </div>
          </div>
        )}
      </div>
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  tagDetails: state.tagDetails.tagsDetails,
  tagDetailsError: state.tagDetails.Error
});
export default connect(mapStatetoProps, { fetchTagDetails })(TagDetails);