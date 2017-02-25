import { Component } from '@angular/core';
import { TreeComponent } from '././tree/tree.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world!';

  components: string[];
  dirs: string[];
  inputText: string;

  constructor() {
    this.components = [];

  }

  onClick() {
    let text = this.inputText;
    this.components.push(text);
  }


}
