import './ChartComponent.css';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis
} from 'recharts';

const ChartComponent = () => {
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];
    const headers: string[] = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];
    return (
        <div className="chart-component-body m-auto w-75 d-flex flex-column">
            <section className="header-price">
                <div className="current-price"></div>
                <div className="currency"></div>
                <div className="stock-change"></div>
            </section>
            <section className="menu-bar">
                <ul className="menu-bar-list">
                    {headers.map((header: string, index: number) =>
                        (<a className="menu-link" href=""><li
                            key={index}
                            className="menu-bar-item">{header}
                        </li></a>))}
                </ul>
            </section>
            <section className="chart-options"></section>
            <section className="graph">
                <AreaChart width={1122} height={200} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                    <Area
                        dataKey="students"
                        stroke="#4B40EE"
                        fill="url(#colorUv)" />
                    <CartesianGrid horizontal={false}/>
                    <XAxis dataKey="name" />
                </AreaChart>
            </section>
        </div>
    )
}

export default ChartComponent;