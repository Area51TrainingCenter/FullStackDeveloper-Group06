import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatTableModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MatTableModule,
		MatDialogModule
	],
	declarations: [],
	exports: [
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MatTableModule,
		MatDialogModule
	]
})
export class MaterialModule { }
