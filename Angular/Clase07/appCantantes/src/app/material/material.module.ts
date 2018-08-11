import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
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
		MatInputModule
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
		MatInputModule
	]
})
export class MaterialModule { }
