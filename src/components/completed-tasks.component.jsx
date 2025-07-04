import "./completed-tasks.css"
import { CompletedTaskCard } from './completed-taskcard.component.jsx'

export const CompletedTasks = () => {
    return <div className="completedTasks__block">
        <h2 className="completedTasks__title">Completed Tasks</h2>
        <div className="completedtasks">
            <CompletedTaskCard card={{title: "Learn Javasctipt", startDate: '07-07-2023', endDate: '07-07-2023'}}/>
            <CompletedTaskCard card={{title: "Learn Javasctipt", startDate: '07-07-2023', endDate: '07-07-2023'}}/>
            <CompletedTaskCard card={{title: "Learn Javasctipt", startDate: '07-07-2023', endDate: '07-07-2023'}}/>
        </div>
        <button className="openAllTasks">
            <p>All Completed Tasks</p>
            <img src="public/arrow.svg" />
        </button>
    </div>
}