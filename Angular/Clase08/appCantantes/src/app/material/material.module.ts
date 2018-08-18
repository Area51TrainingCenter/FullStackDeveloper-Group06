import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule, MatTooltipModule, MatMenuModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatDialogModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTooltipModule,
		MatMenuModule,
		MatListModule,
		MatCardModule,
		MatInputModule
	],
	declarations: [],
	exports: [
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatDialogModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTooltipModule,
		MatMenuModule,
		MatListModule,
		MatCardModule,
		MatInputModule
	]
})
export class MaterialModule { }
