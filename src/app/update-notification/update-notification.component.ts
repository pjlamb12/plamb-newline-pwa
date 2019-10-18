import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
	selector: 'app-update-notification',
	templateUrl: './update-notification.component.html',
	styleUrls: ['./update-notification.component.scss'],
})
export class UpdateNotificationComponent implements OnInit {
	public showUpdate: boolean = false;
	constructor(private _swUpdate: SwUpdate) {}

	ngOnInit() {
		if (this._swUpdate.isEnabled) {
			this._swUpdate.available.subscribe(() => {
				this.showUpdate = true;
			});
		}
	}

	doUpdate() {
		this.showUpdate = false;
		window.location.reload();
	}
}
