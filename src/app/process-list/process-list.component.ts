import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  liste = {};
  status = true;
  processCategory: any[];
  processList: any[];
  Category: string;
  private sub: any;

  clickEvent() {
    this.status = !this.status;
  }
  constructor(private httpService: HttpClient, private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  getProcessByCategory( Category: string) {


    this.httpService.get('./assets/ChildCards.json').subscribe(
      data => {
        this.processCategory = data as any[];	 // FILL THE ARRAY WITH DATA.
        // tslint:disable-next-line:only-arrow-functions
        this.processCategory = _.filter(this.processCategory, function(o) { return o.category === Category; });
        // tslint:disable-next-line:only-arrow-functions
        console.log(_.filter(this.processCategory, function(o) { return o.category === Category; }));

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );



  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    this.Category = params.category;
    console.log(this.Category);
    });
    console.log('***********' + this.Category);
    this.getProcessByCategory(this.Category);

}
}
