import "./asidebar.css"

export const AsideBar = () => {
    return <>
            <ul className="asidebar">
                <li className="line"><a href='#'><img src="dashboard.svg"/><p>Dashboard</p></a></li>
                <li className="line"><a href='#'><img src="alltasks.svg"/><p>All Tasks</p></a></li>
                <li className="line"><a href='#'><img src="complete.svg"/><p>Completed Tasks</p></a></li>
                <li className="line"><a href='#'><img src="add.svg"/><p>Add A Task</p></a></li>
            </ul>
        </>
}