import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public person1$: Observable<any>;
	constructor(private _swapi: SwapiService) {}

	ngOnInit() {
		this.person1$ = this._swapi.getPerson(1);
	}
}
