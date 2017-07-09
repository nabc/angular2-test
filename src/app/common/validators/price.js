import { Validators } from '@angular/forms';

export const price = (typeControl) => {

	let subscribe = false;

	return (control) => {
		if (!subscribe) {
			subscribe = true;
			typeControl.valueChanges.subscribe(() => {
				control.updateValueAndValidity();
			});
		}

		if (typeControl.value == 'bookable')
			return Validators.required(control);
		return null;
	};
};
