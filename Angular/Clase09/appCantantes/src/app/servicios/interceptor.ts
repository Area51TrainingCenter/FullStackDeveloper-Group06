import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

		let token: string = ""

		if (localStorage.getItem("usuarioLogueado")) {
			token = JSON.parse(localStorage.getItem("usuarioLogueado"))["accessToken"]
		}

		const clon = req.clone({
			headers: req.headers.append("Authorization", `Bearer ${token}`)
		})

		return next.handle(clon)
	}
}