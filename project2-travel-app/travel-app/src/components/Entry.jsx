//represents a single entry for the journal
import "../assets/css/entry.scss";

const Entry = () => {
    return (
        <>
            <article className="entry">
                <figure className="secondary">
                    <img src="../assets/images/japan-image.jpg"/>
                    <figcaption>A fancy image</figcaption>
                </figure>
                <section className="primary">
                    <header>
                        <div className="country">
                            <img src="../assets/images/marker.png" alt="location image"/>
                            <p>Japan</p>
                            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View
                                on Google Maps</a>
                        </div>
                        <h2 className="location">Mount Fuji</h2>
                        <p className="dates">
                            <span className="start">12 Jan, 2021</span> - <span className="end">24 Jan, 2021</span>
                        </p>
                        <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
                            (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both
                            Japanese and foreign tourists.</p>
                    </header>

                </section>
            </article>
            <hr/>
        </>
    )
}
export default Entry
