import {Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component ({
	selector: 'user-form',
	styles: [`
		form {
			padding: 10px;
			background: #ECF0F1;
			border-radius: 3px;
		}
	`],
	template:`
		<form action="" #form="ngForm" *ngIf="active" (ngSubmit)="onSubmit()">
			{{form.valid}}
			<div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
				<input type="text" class="form-control" name="name" 
				[(ngModel)]="newUser.name" #name="ngModel" placeholder="name" equired/>

				<span class="help-block" *ngIf="name.invalid && name.touched">Name is required</span>
			</div>

			<div class="form-group" [ngClass]="{ 'has-error': nickname.invalid && nickname.touched }">
				<input type="text" class="form-control" name="nickname" 
				[(ngModel)]="newUser.nickname" #nickname="ngModel" placeholder="nickname" required/>

				<span class="help-block" *ngIf="nickname.invalid && nickname.touched">Nickname is required</span>
			</div>

			<button type="submit" class="btn btn-lg btn-block btn-primary" 
			[disabled]="form.invalid">
			Create User
			</button>


		</form>
	`
})

export class UserFormComponent {
	@Output() userCreated = new EventEmitter();
	newUser: User = new User();
	active: boolean = true;

	onSubmit() {
		// emit event
		this.userCreated.emit({user: this.newUser});

		this.newUser = new User();
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}

}