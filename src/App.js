import React, {useState} from 'react';
import './App.css';

function App() {

    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("all");

    function changeSearch(event) {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function changeType(event) {
        setSearchType(event.target.value)
        console.log(event.target.value)
    }

    function handleSearch(event) {
        event.preventDefault()
        window.open("https://www.google.com/search?q=%22"
            + encodeURI(search) + "%22 " + searchParams(), "_blank")
    }

    function searchParams() {

        const noSites = "- inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)" +
            " intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";

        switch (searchType) {
            case "all":
                return noSites
            case "movie":
                return "%2B(mkv|mp4|avi|mov|mpg|wmv)" + noSites
            case "software":
                return "%2B(exe|iso|tar|rar|zip|apk)" + noSites
            case "music":
                return "%2B(mp3|wav|ac3|ogg|flac|wma|m4a)" + noSites
            case "image":
                return "%2B(jpg|png|bmp|gif|tif|tiff|psd)" + noSites
            case "code":
                return "inurl:(github.com)"
        }
    }

    return (
        <div className="App">
            <h1>Rold-Search</h1>
            <br/>
            <form onSubmit={handleSearch}>
                <input type="search" onChange={changeSearch} className="form-control" placeholder="Search" autoFocus/>
                <br/>
                <select className="form-control" onChange={changeType} data-show-content="true">
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="software">Games and Software</option>
                    <option value="music">Music</option>
                    <option value="image">Images</option>
                    <option value="code">Code</option>
                </select>
                <br/>
                <button className="btn link-btn btn-block" type="submit">Search</button>
            </form>
            <footer>
                <a className="link-footer float-left" href="https://github.com/wetwer">Wetwer</a>
                <span className="float-right dark-footer">06.06.2019</span>
            </footer>
        </div>
    );
}

export default App;
