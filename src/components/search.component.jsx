import "./search.css"

export const Search = ({text}) => {
    return <div className="searchDiv">
            <input className="searchInput" placeholder="write your project name"></input>
            <button><img src="public/search.svg"></img></button>
        </div>
}

