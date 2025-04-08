//represents a single entry for the journal
import "../assets/css/entry.scss";

const Entry = (props) => {

    return (
        <>
            <article className="entry">
                <figure className="secondary">
                    <img src={`../assets/images/${props.image}`} alt="Dynamic"/>
                    <figcaption>{props.caption}</figcaption>
                </figure>
                <section className="primary">
                    <header>
                        <div className="country">
                            <img src="../assets/images/marker.png" alt="location image"/>
                            <p>Japan</p>
                            <a href={props.googleMap}>View on Google Maps</a>
                        </div>
                        <h2 className="location">{props.location}</h2>
                        <p className="dates">
                            <span className="start">{props.startDate}</span> - <span
                            className="end">{props.endDate}</span>
                        </p>
                        <p className="description">{props.description}</p>
                    </header>

                </section>
            </article>
            <hr/>
        </>
    )
}
export default Entry
