import { Component, Input } from '@angular/core';

import { TreeObject } from '../tree-object';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  @Input() treeObject: TreeObject;
  @Input() parentInput: string;
  treeObjects: TreeObject[];

  constructor() { 
    this.treeObjects = [];
  }

  onClick() {
    let text = this.parentInput;
    text = text.trim();

    if(text === '') { return; }
    else {
      let newObject = new TreeObject(text);
      this.treeObjects.push(newObject);
    }
  }

}
