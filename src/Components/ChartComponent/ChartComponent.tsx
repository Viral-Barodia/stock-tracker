import MenuComponent from '../MenuComponent/MenuComponent';
import './ChartComponent.scss';
import {
    AreaChart,
    Area,
    CartesianGrid,
    Bar,
    BarChart
} from 'recharts';
import { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetchData.service';
import { FireErrorToast } from '../../services/fireToastService';

interface APIResponse {
    graphData: any,
    currency: string,
    latestValue: number,
    changeOverTime: number,
    changePercentage: number
}

const ChartComponent = () => {
    const [activeRange, setActiveRange] = useState<string>('1w');
    const [graphData, setGraphData] = useState();
    const [currency, setCurrency] = useState<string>('USD');
    const [changeOverTime, setChangeOverTime] = useState<string>('');
    const [changePercentage, setChangePercentage] = useState<string>('');
    const [latestValue, setLatestValue] = useState<string>('');

    useEffect(() => {
        fetchData(activeRange)
            .then((data: APIResponse) => {
                setGraphData(data.graphData);
                setCurrency(data.currency);
                setLatestValue(data.latestValue.toFixed(2));
                setChangeOverTime(data.changeOverTime.toFixed(2));
                setChangePercentage(data.changePercentage.toFixed(2));
            })
            .catch(() => {
                FireErrorToast('');
                return null;
            })
    }, [activeRange])

    const changeRange = async (event: React.MouseEvent<HTMLElement>) => {
        setActiveRange(event.currentTarget.innerHTML);
    }
    const headersList: string[] = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];
    const rangeList: string[] = ['1d', '3d', '1w', '1mo', '6mo', '1y', 'max'];
    return (
        <div className="chart-component-body m-auto w-75 d-flex flex-column mt-5">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className="header-price d-flex mb-5">
                <div className="d-flex flex-column">
                    <div className="current-price">{latestValue}</div>
                    <div className={`stock-change ${Number(changeOverTime) >= 0 ? 'positive-change' : 'negative-change'}`}>{changeOverTime} ({changePercentage}%)</div>
                </div>
                <div className="currency mt-3 ms-2">{currency}</div>
            </section>
            <MenuComponent headers={headersList} />
            <section className="chart-options align-items-center d-flex justify-content-between">
            <div className="viewing-options d-flex w-25 justify-content-between">
                <span className="viewing-options-items rounded p-2">
                    <i className="fa fa-expand"></i>
                    <span className="ms-2">Fullscreen</span>
                </span>
                <span className="viewing-options-items rounded p-2">
                    <i className="fa fa-plus-circle"></i>
                    <span className="ms-2">Compare</span>
                </span>
            </div>
                <div className="interval-options d-flex justify-content-between">
                    <ul className="interval-list m-0 d-flex">
                        {rangeList.map((range: string, index: number) =>
                            <li
                                key={index}
                                onClick={changeRange}
                                className={`interval-item me-3 rounded-2 p-2 ${activeRange==range ? `active-interval` : ``}`}>{range}
                            </li>)}
                    </ul>
                </div>
            </section>
            <section className="graph">
                <AreaChart width={1122} height={200} data={graphData}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="closeValue"
                        stroke="#4B40EE"
                        fill="url(#colorUv)" />
                    <CartesianGrid horizontal={false}/>
                </AreaChart>
                <BarChart width={839} height={50} data={graphData}>
                    <Bar dataKey="volumeValue" fill="#6F7177" />
                </BarChart>
            </section>
        </div>
    )
}

export default ChartComponent;