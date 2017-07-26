import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input()
    private childMessage: string;
    @Output()
    private outer = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    sendMsg(){
        this.outer.emit("this is a message sent by Child component.");
    }
}