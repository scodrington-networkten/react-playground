import '/src/css/header.scss';

const Header = () => {
    return (
        <>
            <header className="site-header container">
                <div className="inner">
                    <div className="top">
                        <img src="/assets/images/globe.png"/>
                        <span>Travel Journal</span>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
