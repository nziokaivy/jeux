import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllCreators.css";
import { fetchCreators } from '../../redux/actions/allCreatorsAction';
import { connect } from "react-redux";

export class AllCreators extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCreators();
  }

  render() {
    const { creators, creatorsError } = this.props;
    return (
      <div>
        <h1 className="allGames-title"> Game Details</h1>
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
            {creatorsError && <h1>{creatorsError}</h1>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creators: state.allCreators.creators,
  creatorsError: state.allCreators.creatorsError
});

export default connect(mapStateToProps, { fetchCreators })(AllCreators);