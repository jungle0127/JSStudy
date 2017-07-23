@Component({// Decorator    TypeScript syntax
  selector: 'hello',
  template: '<p>{{greeting}}</p>' // meta data
  // templateurl: 'path/hello.html'
})
export class HelloComponent{//Component class
  private greeting: string;
  constructor(){
    this.greeting = "Hello, Angular";
  }
}
