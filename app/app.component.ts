import { Component } from '@angular/core';

@Component({
  selector: 'eye-homepage',
  templateUrl: 'temp/introduce.html'
})
@Component({
  selector: 'eye-create',
  templateUrl: 'temp/create.html'
})

@Component({
  selector: 'eye-detail',
  templateUrl: 'temp/detail.html'
})
@Component({
  selector: 'eye-list',
  templateUrl: 'temp/list.html'
})
//Only the last @Component will be chosen
export class AppComponent {
  // do something

}
