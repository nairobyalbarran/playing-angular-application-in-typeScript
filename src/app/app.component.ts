import { Component }          from '@angular/core';
export class hero{
  id: numbre,
  name: string
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1><h2>{{hero.name}} details! </h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div>
      <label>name:</label>
      <input [(ng-model)]="hero.name" placeholder="name">
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero:{
    id: 1,
    name: 'Windstorm'
  } ;
}
