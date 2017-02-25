import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() title: string;
  @Input() parentInput: string;

  childDirs: string[];

  constructor() { 
    this.childDirs = [];
  }

  ngOnInit() {
  }

  onClick() {
    let text = this.parentInput;
    this.childDirs.push(text);
  }

}
