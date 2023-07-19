import Link from 'next/link'
import React from 'react'

const container = {
    width: "100%",
    color: "white",
    display: "flex",
    borderRadius: "15px",
    overflow: "hidden",
    marginBottom: "6px",
    border: "2px solid #3A3F42",
    cursor: "pointer",
    gap: "10px",
}

const PostSearchCard = ({ post, onClick } : any) => {
  return (
    <Link href={`/blogs/${post.slug}`} onClick={() => onClick(false)}>
        <div style={container}>
            <img width="100px" height="100px" src={post.frontmatter.cover_image} alt="" />
            <div>
                <h3 className="hide-after-2-lines">{post.frontmatter.title}</h3>
                <p>{post.frontmatter.post_date}</p>
            </div>
        </div>
    </Link>
  )
}

export default PostSearchCard