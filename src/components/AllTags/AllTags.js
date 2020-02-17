import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllTags.css";
import { fetchAllTags } from '../../redux/actions/allTagsAction';
import { connect } from "react-redux";

export class AllTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  render() {
    const { tags, tagsError } = this.props;
    console.log('this.props',this.props);
    console.log('tags',tags);
    
    

    return (
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
            {tagsError && <h1>{tagsError}</h1>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.allTags.tags,
  tagsError: state.allTags.tagsError
});

export default connect(mapStateToProps, { fetchAllTags })(AllTags);