import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      const {id, title, body} = post;

      return (
        <div className='item' id={id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{title}</h2>
                <p>{body}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
