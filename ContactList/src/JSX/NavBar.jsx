import "../style-sheets/navBar.css";

function NavBar()
{
    return (
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
        </div>
    );
}

export default NavBar;
