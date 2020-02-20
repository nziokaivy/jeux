import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllStores.css";
import { fetchAllStores } from '../../redux/actions/Stores/allStoresAction';
import { connect } from "react-redux";

export class AllStores extends Component {

  async componentDidMount() {
    const { fetchAllStores } = this.props;
    await fetchAllStores();
  }
  render() {   
    const { stores } = this.props;
    
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
                    <Link to={"/store/" + stores.id} className="text">
                       {stores.name}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  stores: state.allStores.stores,
  storesError: state.allStores.storesError
});

export default connect(mapStateToProps, { fetchAllStores })(AllStores);
