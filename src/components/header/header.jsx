import './header.css'
//  component
const Header = (props) => {
    return (
        // React fragment shorthand
        <>
            <header 
                className='header'
            >
                <ul>
                    <li> item 1</li>
                    <li> item 2</li>
                </ul>
            </header>
        </>
    )
}

// export component
export default Header

