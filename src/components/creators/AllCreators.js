import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/AllCreators.css';
import { fetchCreators } from '../../redux/actions/Creators/allCreatorsAction';
import { connect } from "react-redux";
import Header from '../../components/elements/Header/Header';
import HeroImage from '../../components/elements/HeroImage/HeroImage';

export class AllCreators extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { fetchCreators } = this.props;
    await fetchCreators();
  }

  render() {
    const { creators } = this.props;
    return (
      <>
      <Header />
      <HeroImage />
      <div>
        <h1 className="allGames-title"> Creators</h1>
        <hr className='legend' />
        <div className="allCreators" id="creators">
          <div className="flex-grid">
            {creators &&
              creators.results.map(creators => (
                <div key={creators.id} className="col">
                  <img className="allCreatorsDisplay" src={creators.image} />
                  <div className="overlay">
                    <Link to={"/creator/" + creators.id} className="text">
                      {creators.name}
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
  creators: state.allCreators.creators,
  creatorsError: state.allCreators.creatorsError
});

export default connect(mapStateToProps, { fetchCreators })(AllCreators);
