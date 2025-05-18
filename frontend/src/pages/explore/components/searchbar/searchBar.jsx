import './searchBar.css';

export default function SearchBar() {
    return (
        <div className="searchContainer mainSearch">
            <input
                type="text"
                className="searchInput"
                placeholder="Type here"
            />
            <button className="search-button">Search</button>
        </div>
    );
}
