import React, { Component } from "react";
import { connect } from "react-redux";
import "./GameDetails.css";
import { fetchGameDetails } from '../../redux/actions/gameDetailsAction';

export class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGameDetails(id);
    let gameInfo;
    if (this.props.gameDetails) {
      gameInfo = this.props.gameDetails;
    }
  }

  render() {
    const { creators, creatorsError } = this.props;
    let gameInfo;
    if (this.props.gameDetails) {
      gameInfo = this.props.gameDetails;
    }
    return (
      <div className="main-game-details">
        <h1 className="allGames-title"> Game Details</h1>
        <hr className='legend' />
      <div className="gameDetails">
        {gameInfo && (
          <div className="row">
            <div className="column-image">
              <img
                className="image"
                src={gameInfo.background_image}
              />
            </div>
            <div className="column-details">
              <p><strong>Name:</strong> {gameInfo.name}</p>
              <p><strong>Description:</strong> {gameInfo.description}</p>
              <p><strong>Rating:</strong> {gameInfo.rating}</p>
              <p><strong>Genre: </strong>{" "}
              {gameInfo.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index !== gameInfo.genres.length - 1 && ", "}
                </span>
              ))}
              </p>
              <p><strong>Release Date: </strong> {gameInfo.released}</p>
            </div>
          </div>
        )}
      </div>
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  gameDetails: state.gameDetails.gameDetails,
  gamesError: state.gameDetails.Error
});
export default connect(mapStatetoProps, { fetchGameDetails })(GameDetails);