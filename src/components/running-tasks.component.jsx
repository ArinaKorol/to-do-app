import "./running-tasks.css"
import { Card } from './card.component.jsx'

export const RunningTasks = () => {
    return <div className="runningTasks__block">
    <h2 className="runningTasks__title">Running Tasks</h2>
    <div className="runningtasks">
        <Card card={{title: "Learn Javasctipt", startDate: '07-07-2023'}}/>
        <Card card={{title: "Learn Javasctipt", startDate: '07-07-2023'}}/>
        <Card card={{title: "Learn Javasctipt", startDate: '07-07-2023'}}/>
        <Card card={{title: "Learn Javasctipt", startDate: '07-07-2023'}}/>
    </div>
    <button className="openAllTasks">
            <p>All Running Tasks</p>
            <img src="public/arrow.svg" />
        </button>
    </div>
}