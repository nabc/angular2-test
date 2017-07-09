import {Validators} from '@angular/forms';

let isDate = (obj) => {
	return !/Invalid|NaN/.test(new Date(obj).toString());
};

export const date = (format) => {
	return (control) => {
		if (Validators.required(control)) return null;
		let v = control.value;
		if (!moment(v, format).isValid())
			return {date: true, dateAny: true};
		else if (format) {
			if (moment(v, format).format(format) !== v)
				return {dateFormat: true, dateAny: true};
		}
		return null;
	};
};

