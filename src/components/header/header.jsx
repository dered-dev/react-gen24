import styles from  './header.module.scss'
//  component
const Header = (props) => {
    console.log(props)
    return (
        // React fragment shorthand
        <>
            <header 
                className={`${ styles.header }`}
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

