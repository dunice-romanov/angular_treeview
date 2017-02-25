import { Component } from '@angular/core';
import { TreeComponent } from '././tree/tree.component';

import { TreeObject } from './tree-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeObjects: TreeObject[];
  inputText: string;

  constructor() {
    this.treeObjects = [];

  }

  onClick() {
    let text = this.inputText;
    let newObject = new TreeObject(text);
    this.treeObjects.push(newObject);
  }


}
