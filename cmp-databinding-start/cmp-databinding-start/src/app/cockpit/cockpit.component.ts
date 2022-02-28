import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') 
  serverContentInput : ElementRef;
  
  @Output()
  serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated')
  blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput:HTMLInputElement) {
    // console.log(serverNameInput.value)
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value, 
    //   serverContent: this.newServerContent
    // });
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // });
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  } 

}
