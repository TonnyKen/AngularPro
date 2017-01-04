import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent { 
	message: string = "hello";
	users: User[] = [
	{id:1, name:"ming", nickname:"windgrin"}，
	{id:2, name:"Pee", nickname:"Hellokitty"}，
	{id:3, name:"Tom", nickname:"Nothing"}];
	activeUser: User;
	selectUser(user) {
		this.activeUser = user;
	};

	onUserCreated(event){
		this.users.push(event.user);
	}
}
