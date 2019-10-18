import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class SwapiService {
	private _basePeopleUrl: string = 'https://swapi.co/api/people';

	constructor(private _http: HttpClient) {}

	getPerson(id: string | number) {
		return this._http.get(`${this._basePeopleUrl}/${id}`);
	}
}
