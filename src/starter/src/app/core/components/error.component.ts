import { Component, inject } from '@angular/core';
// angular material
import {	 MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  imports: [],
  template: `
      <span class="example-pizza-party" matSnackBarLabel>
        Pizza party!!!
      </span>
      <span matSnackBarActions>
        <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">🍕</button>
      </span>
  `,
  styles: ``
})
export class ErrorComponent {
   snackBarRef = inject(MatSnackBarRef);
}
