import Entry from "./Entry";
import JsonData from "../../json-data.jsx";

const Main = () => {

    //define array of entry data for
    const components = JsonData.map((item) => {
        return <Entry data={item} key={item.id}/>;
    });

    return (
        <>
            <main className="container">
                <div className="inner">
                    {components}
                </div>
            </main>
        </>
    )
}
export default Main
