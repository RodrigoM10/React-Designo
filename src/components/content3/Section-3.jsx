import React from 'react';
import { Posts } from '../Posts/Posts'

const posts = [
    {
        picture: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630075070/section3-img1.png',
        title: 'PASSIONATE',
        description: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
        picture: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630075067/section3-img2.png',
        title: 'RESOURCEFUL',
        description: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value costumer collaboration. It guarantees superior results that fulfill our clients needs.',
    },
    {
        picture: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630075064/section3-img3.png',
        title: 'FRIENDLY',
        description: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on or costumers, and we strive to give them the best experience a company can provide.',
    },
]

export default function Section3() {
  return (
      <div>
          <Posts posts={posts} />
      </div>
  );
}