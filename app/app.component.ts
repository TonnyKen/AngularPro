import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<header>
		<nav class = "navbar navbar-inverse">
			<div class="nav-header">
			<a href="/" class="navbar-brand"></a>
			</div>
		</nav>
	</header>

	<div class="jumbotron">
		<h1>Welcome to Our app</h1>
		<p>{{ message }}</p>
	</div>

	<footer class="text-center">Coming soon</footer>
  	
  `,
  styles:[`
  	.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,0.2);}
  `]
})
export class AppComponent  { 
	name = 'Angular'; 
	message = 'Hello';
}
