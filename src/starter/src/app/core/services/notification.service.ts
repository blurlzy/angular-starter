import { inject, Injectable } from '@angular/core';
// angular material
import {
	MatSnackBar,
	MatSnackBarAction,
	MatSnackBarActions,
	MatSnackBarLabel,
	MatSnackBarRef,
 } from '@angular/material/snack-bar';

 // components
import { ErrorComponent } from '../components/error.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService { 

	private snackBar = inject(MatSnackBar);

	openSnackBar() {
		this.snackBar.open('Success!', 'Close', {
			panelClass: ['my-snackbar', 'snackbar-warning']
		 });
		// this.snackBar.openFromComponent(ErrorComponent, {
		//   duration: 5 * 1000,
		// });
	 }

	 openSnackBar2() {
		this.snackBar.open('Message archived', 'Close', {
		  duration: 2000,
		  panelClass: 'my-snackbar-error'
		});
	 }
}
