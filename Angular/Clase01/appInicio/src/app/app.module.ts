import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppMiComponente } from "./miComponente.component";

@NgModule({
	declarations: [
		AppComponent, AppMiComponente
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppMiComponente]
})
export class AppModule { }
