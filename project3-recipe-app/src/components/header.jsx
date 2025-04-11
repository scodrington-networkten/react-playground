import logo from '@image-assets/chef-claude-icon.png';
import '@css/header.scss';

const Header = () => {
    return (
        <>
            <header className="container header">
                <div class="inner">
                    <img src={logo} alt="Fancy Recipes"/>
                    <h1>Chef Claude</h1>
                </div>
            </header>
        </>
    )
};
export default Header
