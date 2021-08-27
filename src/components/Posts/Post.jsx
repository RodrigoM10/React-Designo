import React from 'react'

export const Post = ({ post }) => {
    const { picture, title, description } = post;
    return (
            <div class=" d-flex flex-column flex-grow-1 align-items-center text-center pt-5 pt-md-3  p-1">
                <img src={picture} alt="" />
                    <h2>{title}</h2>
                    <p>{description}
                    </p>
            </div>
            )
}
