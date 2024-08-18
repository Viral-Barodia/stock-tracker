import './MenuComponent.scss';

interface Props {
    headers: string[]
}

const MenuComponent = ({ headers }: Props) => {
    return (
        <section className="menu-bar">
            <ul className="menu-bar-list d-flex justify-content-between w-50">
                {headers.map((header: string, index: number) =>
                    (<a className="menu-link" href="" key={index}>
                        <li
                            className="menu-bar-item">{header}
                        </li>
                    </a>))}
            </ul>
        </section>
    )
}

export default MenuComponent