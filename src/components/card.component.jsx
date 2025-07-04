import "./card.css"

export const Card = (props) => {
    return <div className="card">
        <div className="card__info">
            <h2 className="card__title">{props.card.title}</h2>
            <div className="card__date">
                <p>Start date:</p>
                <p>{props.card.startDate}</p>
            </div>
            <button className="card__mark">
                <img src="public/mark.svg"/>
                <p>Mark as completed</p>
            </button>
        </div>
        <div className="card__icons">
            <button><img src="public/info.svg"/></button>
            <button><img src="public/edit.svg"/></button>
            <button><img src="public/delete.svg"/></button>
        </div>
    </div>
}
