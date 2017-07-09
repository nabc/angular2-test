import {JwtHelper} from 'angular2-jwt';

export class AppUtility {

	constructor() {
		this.jwtHelper = new JwtHelper();
	}

		notificationOptions = {
			position: ['top', 'right'],
			timeOut: 4000,
			lastOnBottom: false,
			preventDuplicates: true,
			showProgressBar: false,
			animate: 'scale'
		};

		somethingWentWrong() {
		this.notificationsService.error('Something went wrong', 'We will try to fix this issue ASAP');
	}

		role() {
		let decoded;
		let token = localStorage.getItem(TOKEN_NAME, 'guest');
		try {
			decoded = this.jwtHelper.decodeToken(token);
		} catch (e) {
			decoded = 'guest';
		}
		return decoded.role;
	}

		isAdmin() {
		return this.role() == 'admin';
	}

		isUser() {
		return this.role() == 'user';
	}

		errCondition(field, form) {
		return field.valid || (field.pristine && !form.submitted);
	}
}
