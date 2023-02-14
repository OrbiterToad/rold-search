import React, {useState} from 'react';
import './App.css';

function App() {

    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("default");
    const [searchSite, setSearchSite] = useState("all");

    function changeSearch(event) {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function changeType(event) {
        setSearchType(event.target.value)
        console.log(event.target.value)
    }

    function changeSite(event) {
        setSearchSite(event.target.value)
        console.log(event.target.value)
    }

    function handleSearch(event) {
        event.preventDefault()
        window.open("https://www.google.com/search?q=%22"
            + encodeURI(search) + "%22 " + searchParams(), "_blank")
    }

    function searchParams() {

        let specificSite = "";


        switch (searchSite) {
            case "all":
                break;
            case "drive":
                specificSite = " site:drive.google.com/drive/folders/*"
                break;
            case "git":
                specificSite = " site:github.com/*"
                break;
            case "mega":
                specificSite = " site:mega.nz/*"
                break;

        }

        console.log(specificSite)

        const noSites = " -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";

        switch (searchType) {
            case "default":
                return specificSite
            case "all":
                return noSites + specificSite
            case "movie":
                return "%2B(mkv|mp4|avi|mov|mpg|wmv) filetype:(mkv|mp4|avi|mov|mpg|wmv)" + noSites + specificSite
            case "software":
                return "%2B(exe|iso|tar|rar|zip|apk)" + noSites + specificSite
            case "music":
                return "%2B(mp3|wav|ac3|ogg|flac|wma|m4a)" + noSites + specificSite
            case "image":
                return "%2B(jpg|png|bmp|gif|tif|tiff|psd)" + noSites + specificSite
            case "document":
                return "%2B(pdf|xls|xlsx|ppt|pptx|doc|docx|odt|rtf)" + noSites + specificSite
        }
    }

    return (
        <div className="App">
            <h1>Rold-Search</h1>
            <br/>
            <form onSubmit={handleSearch}>
                <input type="search" onChange={changeSearch} className="form-control" placeholder="Search" autoFocus
                       required/>
                <br/>
                <select className="form-control" onChange={changeType} data-show-content="true" required>
                    <option value="all" selected>All Types</option>
                    <option value="default">Everything</option>
                    <option value="movie">Movie</option>
                    <option value="software">Games and Software</option>
                    <option value="music">Music</option>
                    <option value="image">Images</option>
                    <option value="document">Documents</option>
                </select>
                <br/>
                <select className="form-control" onChange={changeSite} data-show-content="true" required>
                    <option value="all">All Sites</option>
                    <option value="drive">Google Drive</option>
                    <option value="git">Github</option>
                    <option value="mega">MEGA</option>
                </select>
                <br/>
                <button className="btn link-btn btn-block" type="submit">Search</button>
            </form>
            <footer>
                <a className="link-footer float-left" href="https://github.com/wetwer">Wetwer</a>
                <span data-toggle="tooltip" data-placement="top" title="Day Project" className="float-right dark-footer">06.06.2019</span>
            </footer>
        </div>
    );
}

export default App;
