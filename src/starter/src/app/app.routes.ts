import { Routes } from '@angular/router';

// layout
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				// default module
				path: '', loadChildren: () => import('./modules/module-1/module1.routes').then(m => m.routes)
			}
		]
	},
];
