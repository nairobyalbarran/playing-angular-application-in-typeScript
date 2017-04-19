import { Component } from '@angular/core';
export class Element {
  id: number;
  name: string;
}
const ELEMENTS: Element[] = [
  { id: 11, name: 'Strontium' },
  { id: 12, name: 'Uranium' },
  { id: 13, name: 'Circonium' },
  { id: 14, name: 'Cesium' },
  { id: 15, name: 'Thorium' },
  { id: 16, name: 'Plutonium' },
  { id: 17, name: 'Americium' },
  { id: 18, name: 'Cerium' },
  { id: 19, name: 'Californium' },
  { id: 20, name: 'indium' }
];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="elements">
      <li *ngFor="let element of elements"
      [class.selected]="element === selectedElement"
      (click)="onSelect(element)>
        <span class="badge">{{element.id}}</span> {{element.name}}
      </li>
    </ul>
    <div *ngIf="selectedElement">
          <h2>{{selectedElement.name}} details!</h2>
          <div><label>id: </label>{{selectedElement.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="v.name" placeholder="name"/>
          </div>
        </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .elements {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .elements li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .elements li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .elements li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .elements .text {
      position: relative;
      top: -3px;
    }
    .elements .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Radioactive Elements';
  elements = ELEMENTS;
  selectedElement: Element;

  onSelect(element: Element): void {
  this.selectedElement = element;
  }
}
