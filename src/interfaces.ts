export interface GraphDataObject {
    date: string,
    closeValue: number,
    volumeValue: number
}

export interface APIResponse {
    graphData: GraphDataObject[],
    currency: string,
    latestValue: number,
    changeOverTime: number,
    changePercentage: number
}