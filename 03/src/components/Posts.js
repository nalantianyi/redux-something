/**
 * Created by nalantianyi on 2017/1/4.
 */
import React, {Component, PropTypes} from 'react';

export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}
            </ul>
        );
    }
}
Posts.propTypes = {
    posts: PropTypes.array.isRequired
};