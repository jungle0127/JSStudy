import { Component } from '@angular/core';
import {LoggerService} from './logger.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  private title: string;
  private isShow: boolean;
  private textColor: string;
  private msgInfo:string;
  private childMsg:string;
  
  constructor(logger: LoggerService){
    this.title = "GAL Report";
    this.textColor = "red";
    this.msgInfo = "this is a message sent out from AppComponent";
    logger.info('Constructor done.');
  }
  receive(msg:string){
    this.childMsg = msg;
  }
}
