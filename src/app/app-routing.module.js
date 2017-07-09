import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth/guards/auth-guard.service';
/*
 add app module routes here, e.g., to lazily load a module
 (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
const appRoutes = [
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
