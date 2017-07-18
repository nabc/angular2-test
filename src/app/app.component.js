import {Component} from '@angular/core';
import  {FirstComponent} from './first/first.component';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <h1 style="text-align: center" class="well">Anguar 2 first app</h1>
        </div>
      </div>
    </div>
    <first></first>
  `,
  directives: [FirstComponent]
})
export class AppComponent {
}
