import { Component } from '@angular/core';

@Component({
  selector: 'eye-list',
  templateUrl: 'temp/list.html'
})

export class AppComponent {
	create = false;
	detailPage = false;
    showCreatePage(){
	    this.create = true;
	}

	createBackToListPage(){
	    this.create = false;
	}

	submit(){

	    this.create = false;
	}

	goDetail(){
		this.detailPage = true;
	}

	detailBackToListPage(){
	    this.detailPage = false;
	}

}


