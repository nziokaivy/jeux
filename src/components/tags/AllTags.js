import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/AllTags.css";
import { fetchAllTags } from '../../redux/actions/Tags/allTagsAction';
import { connect } from "react-redux";
import Header from '../../components/elements/Header/Header';
import HeroImage from '../../components/elements/HeroImage/HeroImage';

export class AllTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { fetchAllTags } = this.props;
    await fetchAllTags();
  }

  render() {
    const { tags } = this.props;

    return (
      <>
      <Header />
      <HeroImage />
      <div>
          <h1 className="allGames-title"> All Tags</h1>
          <hr className='legend' />
        <div className="allGames">
          <div className="flex-grid">
            {tags &&
              tags.results.map(tags => (
                <div key={tags.id} className="col">
                  <img
                    className="allGamesDisplay"
                    src={tags.image_background}
                  />
                  <div className="overlay">
                    <Link to={"/tag/" + tags.id} className="text">
                       {tags.name}
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
  tags: state.allTags.tags,
  tagsError: state.allTags.tagsError
});

export default connect(mapStateToProps, { fetchAllTags })(AllTags);
