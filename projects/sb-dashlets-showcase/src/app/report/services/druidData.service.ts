import { HttpClient } from "@angular/common/http";
import { IDataService } from "sb-dashlets/lib";

export class DruidDataService implements IDataService {

    constructor(private httpClient: HttpClient) { }

    fetchData(config) {
        const { method, url, options } = config;
        return this.httpClient.request(method, url, options)
    }

    fetchGeoJSONFile(path: string) {
        return this.fetchData({ method: 'GET', url: `/${path}`, options: {} })
    }
}