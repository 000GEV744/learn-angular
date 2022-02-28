import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvrElement')
  element: { type: string; name: string; content: string };

  @Input()
  name : string;

  constructor() {
    console.log("Constructor called !");
  }

  ngOnChanges(changes:SimpleChanges):void { //this hook actually receives an arugument. (the only hook that receives the args)
    console.log("ngOnChanges run!");
    console.log(changes);
  }


  ngOnInit(): void {
    console.log("ngInit called.");
  }
}
