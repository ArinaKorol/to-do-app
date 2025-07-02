import { Search } from "./search.component.jsx"
import { HeaderIcons } from "./header-icons.component.jsx"
import "./header.css"

export const Header = () => {
    return <header className="pageHeader">
        <button><img src="public/menu.svg"></img></button>
        <Search />
        <HeaderIcons />
    </header>
}