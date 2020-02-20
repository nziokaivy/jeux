import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/css/GameDetails.css";
import { fetchGameDetails } from '../../redux/actions/Games/gameDetailsAction';
import Header from '../../components/elements/Header/Header';
import HeroImage from '../../components/elements/HeroImage/HeroImage';

export class GameDetails extends Component {

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.fetchGameDetails(id);
  }

  render() {
    const { gameDetails } = this.props;
    return (
      <>
      <Header />
      <HeroImage />
      <div className="main-game-details">
        <h1 className="allGames-title"> Game Details</h1>
        <hr className='legend' />
      <div className="gameDetails">
        {gameDetails && (
          <div className="row">
            <div className="column-image">
              <img
                className="image"
                src={gameDetails.background_image}
              />
            </div>
            <div className="column-details">
              <p><strong>Name:</strong> {gameDetails.name}</p>
              <p><strong>Description:</strong> {gameDetails.description}</p>
              <p><strong>Rating:</strong> {gameDetails.rating}</p>
              <p><strong>Genre: </strong>{" "}
              {gameDetails.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index !== gameDetails.genres.length - 1 && ", "}
                </span>
              ))}
              </p>
              <p><strong>Release Date: </strong> {gameDetails.released}</p>
            </div>
          </div>
        )}
      </div>
      </div>
      </>
    );
  }
}
export const mapStateToProps = state => ({
  gameDetails: state.gameDetails.gameDetails,
  gamesError: state.gameDetails.Error
});
export default connect(mapStateToProps, { fetchGameDetails })(GameDetails);
