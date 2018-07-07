import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
	selector: "[directiva-basica]"
})
export class DirectivaBasicaDirective {
	@Input("directiva-basica") colorOriginal: string = "red"
	@Input() colorHover: string = "yellow"

	@HostListener("mouseenter") mouseEntro() {
		console.log(this.colorHover)
		this.renderer.setStyle(this.elem.nativeElement, "background-color", this.colorHover)

		/*const span = this.renderer.createElement("span")
		const texto = this.renderer.createText("Esto es una prueba")

		this.renderer.appendChild(span, texto)

		this.renderer.appendChild(this.elem.nativeElement, span)*/


		//this.elem.nativeElement.style.backgroundColor = this.colorHover
	}

	@HostListener("mouseleave") mouseSale() {
		this.elem.nativeElement.style.backgroundColor = this.colorOriginal
	}

	constructor(private elem: ElementRef, private renderer: Renderer2) {

	}

	ngOnInit() {
		//this.colorOriginal = this.elem.nativeElement.style.backgroundColor
		//this.elem.nativeElement.style.fontStyle = "italic"
	}

}