import { Validators } from '@angular/forms';

export const equalTo = (equalControl) => {
	let subscribe = false;

	return (control) => {
		if (Validators.required(control)) return null;
		if (!subscribe) {
			subscribe = true;
			equalControl.valueChanges.subscribe(() => {
				control.updateValueAndValidity();
			});
		}

		let v = control.value;

		return equalControl.value === v ? null : {equalTo: true};
	};
};
