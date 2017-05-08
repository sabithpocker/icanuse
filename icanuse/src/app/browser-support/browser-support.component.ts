import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-browser-support',
  templateUrl: './browser-support.component.html',
  styleUrls: ['./browser-support.component.css']
})
export class BrowserSupportComponent implements OnInit {
  @Input('stats') stats: any;
  browserSupport:any;
  browsers: string[] = ["firefox", "ie", "chrome", "safari"];
  constructor() { 
  }

  async ngOnInit() {
  	this.browserSupport= (await System.import('caniuse-db/data.json')).data.canvas.stats;
  	console.log(this.browserSupport);
  }
}
