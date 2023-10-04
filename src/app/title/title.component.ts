import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
	// modifica o valor a partir do input
	@Input() nome: string = '';

	constructor() {
		console.log(`Construtor ${this.nome}`);
	}
	ngOnChanges(): void {
		console.log(`OnChanges ${this.nome}`);
	}

	ngOnInit(): void {
		this.nome = this.nome + "X"
		console.log(`OnInit ${this.nome}`);
	}
}
