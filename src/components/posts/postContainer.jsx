

import './post.css'
//  component
const PostContainer = (props) => {
    // destructuración -> variable iterable
    const {children, propfake} = props

    return (
        // React fragment shorthand
        <>
            <div className="post__container">
                { children }
            </div>
        </>
    )
}

// export component
export default PostContainer