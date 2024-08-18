import axios from 'axios';
import { environment } from '../environment/environment';
import { FireErrorToast } from './fireToastService';

export const fetchData = async (range: string = '1mo'): Promise<any> => {
    let interval: string = '1d';
    if(range=='1d' || range=='3d' || range=='1w') {
        interval = '1m'
    }
    const response = await axios.get(`${environment.apiUrl}interval=${interval}&range=${range}`);
    try {
        if(response.data.chart.error !== null) {
            FireErrorToast();
            return null;
        } else {
            const result = response.data.chart.result[0];
            const timestamps = result.timestamp;
            const closeValues = result.indicators.quote[0].close;
            const volumeValues = result.indicators.quote[0].volume;
    
            const graphData = timestamps.map((time: number, index: number) => ({
                date: new Date(time * 1000).toISOString().split('T')[0],
                closeValue: closeValues[index],
                volumeValue: volumeValues[index]
            }));
    
            const currency = result.meta.currency;
            const latestValue = closeValues[closeValues.length - 1]
            const changeOverTime = latestValue - closeValues[0];
            const changePercentage = (changeOverTime / closeValues[0])*100;
            return {
                graphData,
                currency,
                latestValue,
                changeOverTime,
                changePercentage
            }
        }
    } catch (err: any) {
        FireErrorToast('');
        return null;
    }
}