import Heading from "./components/heading";
import List from "./components/list";
import Logo from "./components/logo";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <main>
                <Logo/>
                <div className="primary-content">
                    <Heading/>
                    <List/>
                    <div className="background-image"/>
                </div>
                <Footer/>
            </main>
        </>);
}
export {App}
