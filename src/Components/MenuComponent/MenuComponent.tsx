import { useState } from 'react';
import './MenuComponent.scss';

interface Props {
    headers: string[]
}

const MenuComponent = ({ headers }: Props) => {

    const [activeMenu, setActiveMenu] = useState('Chart');

    /**
     * Function for changing the menu item
     * @params event: MouseEvent => The mouse event triggered when the user clicks on desired menu button
     * @return null => Sets value in activeMenu variable using useState
    */
    const changeMenuItem = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setActiveMenu(event.currentTarget.innerText);
    }
    return (
        <section className="menu-bar position-relative min-w-50">
            <ul className="menu-bar-list d-flex justify-content-between w-50">
                {headers.map((header: string, index: number) =>
                    (<li
                        className={`menu-bar-item`}
                        key={index}
                        onClick={changeMenuItem}>
                        <a className={`menu-link ${activeMenu==header ? 'active-menu' : ''}`} href="">
                            {header}
                            { activeMenu==header && (<div className={`menu-underline mt-2 ${activeMenu === header ? 'active-line' : ''}`}></div>) }
                        </a>
                    </li>))}
            </ul>
            <div className="underline position-absolute w-100"></div>
        </section>
    )
}

export default MenuComponent