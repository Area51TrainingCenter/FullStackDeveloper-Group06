import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appEstadoCivil]'
})
export class EstadoCivilDirective {
	@Input("appEstadoCivil") estados: Array<string>

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.estados.forEach(estado => {
			const option = this.renderer.createElement("option")
			const texto = this.renderer.createText(estado)
			this.renderer.appendChild(option, texto)

			this.renderer.appendChild(this.el.nativeElement, option)
		})
	}

}
