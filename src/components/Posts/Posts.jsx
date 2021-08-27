import React from 'react'
import { Post } from './Post'

export const Posts = ({posts}) => {
    const mapPosts = posts.map((post) => <Post key={post.id} post={post} /> );

    return (
        <div className="d-flex justify-content-evenly align-items-center">
            {mapPosts}
        </div>
    )
}