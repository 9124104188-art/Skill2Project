function Header(props) {
    return(
        
            <header>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </header>
        
    );
}

export default Header;