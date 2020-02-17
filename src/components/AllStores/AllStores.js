import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllStores.css";
import { fetchAllStores } from '../../redux/actions/allStoresAction';
import { connect } from "react-redux";

export class AllStores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllStores();
  }
  render() {   
    const { stores, storesError } = this.props;
    

    return (
      <div>
          <h1 className="allGames-title"> All Stores</h1>
          <hr className='legend' />
        <div className="allGames">
          <div className="flex-grid">
            {stores &&
              stores.results.map(stores => (
                <div key={stores.id} className="col">
                  <img
                    className="allGamesDisplay"
                    src={stores.image_background}
                  />
                  <div className="overlay">
                    <Link to={"/stores/" + stores.id} className="text">
                       {stores.name}
                    </Link>
                  </div>
                </div>
              ))}
            {storesError && <h1>{storesError}</h1>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stores: state.allStores.stores,
  storesError: state.allStores.storesError
});

export default connect(mapStateToProps, { fetchAllStores })(AllStores);