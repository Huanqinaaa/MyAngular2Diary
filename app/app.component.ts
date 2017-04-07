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

import { Http, Response, URLSearchParams } from 'angular2/http';
let params = new URLSearchParams();
params.set('name', 'huge');
console.log(params.toString()) // name=huge
this.http.get(StaticSettings.BASE_URL, { search: params}).subscribe(
       
);
this.http.post(url, params).subscribe(res=> {
    console.log(res);
});
