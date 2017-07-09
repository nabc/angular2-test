import {Validators} from '@angular/forms';

export const mobile = (control) => {
	if (Validators.required(control)) return null;

	let v = control.value;
	return /^((\+)|(00)|(\*)|())[0-9]{3,14}((\#)|())$/.test(v) ? null : {'mobile': true};
};
