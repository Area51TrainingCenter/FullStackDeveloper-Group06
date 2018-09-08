import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { CantanteService } from "./cantante.service"


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [CantanteService],
	bootstrap: [AppComponent]
})
export class AppModule { }
