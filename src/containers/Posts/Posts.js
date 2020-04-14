import React, { Component } from 'react';
import Axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
// import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: "/" + id });
    }

    componentDidMount() {
        console.log(this.props);

        Axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Jarvis'
                }
            });
            this.setState({ posts: updatedPosts });
            // console.log(response);
        })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!!!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return (
                        // <Link to={ '/' + post.id } key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                        // </Link>
                    );
                }
            );
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;