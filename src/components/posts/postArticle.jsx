



import './post.css'
//  component
const PostArticle = ( { title, description } ) => {
    //const { title, description } = props
    return (
        // React fragment shorthand
        <>
            <div className="post__article">
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </>
    )
}

// export component
export default PostArticle