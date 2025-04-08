//represents a single entry for the journal
import "../assets/css/entry.scss";

const Entry = ({data}) => {

    const {
        location,
        image,
        caption,
        startDate,
        endDate,
        description,
        googleMap
    } = data;
    
    return (
        <>
            <article className="entry">
                <figure className="secondary">
                    <img src={`../assets/images/${image}`} alt="Dynamic"/>
                    <figcaption>{caption}</figcaption>
                </figure>
                <section className="primary">
                    <header>
                        <div className="country">
                            <img src="../assets/images/marker.png" alt="location image"/>
                            <p>Japan</p>
                            <a href={googleMap}>View on Google Maps</a>
                        </div>
                        <h2 className="location">{location}</h2>
                        <p className="dates">
                            <span className="start">{startDate}</span> - <span
                            className="end">{endDate}</span>
                        </p>
                        <p className="description">{description}</p>
                    </header>

                </section>
            </article>
            <hr/>
        </>
    )
}
export default Entry
