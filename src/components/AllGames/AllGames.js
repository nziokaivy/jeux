import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./allGames.css";
import { fetchAllGames } from '../../redux/actions/allGamesActions';
import { connect } from "react-redux";

export class AllGames extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllGames();
  }

  render() {
    const { games, gamesError } = this.props;

    return (
      <div>
          <h1 className="allGames-title"> All Games</h1>
          <hr className='legend' />
        <div className="allGames">
          <div className="flex-grid">
            {games &&
              games.results.map(game => (
                <div key={game.id} className="col">
                  <img
                    className="allGamesDisplay"
                    src={game.background_image}
                  />
                  <div className="overlay">
                    <Link to={"/game/" + game.id} className="text">
                       {game.name}
                    </Link>
                  </div>
                </div>
              ))}
            {gamesError && <h1>{gamesError}</h1>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.allGames.games,
  gamesError: state.allGames.gamesError
});

export default connect(mapStateToProps, { fetchAllGames })(AllGames);