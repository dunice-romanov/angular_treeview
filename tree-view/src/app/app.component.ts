import { Component } from '@angular/core';
import { TreeComponent } from '././tree/tree.component';

import { TreeObject } from './tree-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly BUTTON_CODE_ENTER = 13;
  treeObjects: TreeObject[];
  inputText: string;

  constructor() {
    this.inputText = "";
    this.treeObjects = [];
  }

  onButtonClick() {
    let text = this.inputText;
    
    if (text === '') { return; }
    else {;
      let newObject = new TreeObject(text);
      this.treeObjects.push(newObject);
    }
  }

  onInputKeyPress(event) {
    if (event.keyCode === this.BUTTON_CODE_ENTER) {
      this.onButtonClick();
    }
  }


}
