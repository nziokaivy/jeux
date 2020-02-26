import React, { Component } from "react";
import { Link } from "react-router-dom";
import  '../../assets/css/AllGames.css';
import { fetchAllGames } from '../../redux/actions/Games/allGamesActions';
import { connect } from "react-redux";
import Header from '../../components/elements/Header/Header';
import HeroImage from '../../components/elements/HeroImage/HeroImage';

export class AllGames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  };


  async componentDidMount() {
    const { fetchAllGames } = this.props;
    await fetchAllGames();
    this.setState({loading: true});
  }

  render() {
    const { games } = this.props;

    return (
      <>
      <Header />
      <HeroImage />
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
          </div>
        </div>
      </div>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  games: state.allGames.games,
  gamesError: state.allGames.gamesError
});

export default connect(mapStateToProps, { fetchAllGames })(AllGames);
