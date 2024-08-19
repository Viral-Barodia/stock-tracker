import { useState } from 'react';
import './MenuComponent.scss';

interface Props {
    headers: string[]
}

const MenuComponent = ({ headers }: Props) => {

    const [activeMenu, setActiveMenu] = useState('Chart');
    const changeMenuItem = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setActiveMenu(event.currentTarget.innerHTML);
    }
    return (
        <section className="menu-bar">
            <ul className="menu-bar-list d-flex justify-content-between w-50">
                {headers.map((header: string, index: number) =>
                    (<a className="menu-link" href="" key={index}>
                        <li
                            onClick={changeMenuItem}
                            className={`menu-bar-item ${activeMenu==header ? 'active-menu' : ''}`}>{header}
                        </li>
                        <div className={`menu-underline mt-2 ${activeMenu === header ? 'active-line' : ''}`}></div>
                    </a>))}
            </ul>
        </section>
    )
}

export default MenuComponent