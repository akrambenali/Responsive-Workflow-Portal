import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  liste = {};
  status = false;
  processCategory: string[];
  processList: string[];
  clickEvent() {
    this.status = !this.status;
  }
  constructor(private httpService: HttpClient, private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {

  this.httpService.get('./assets/ChildCards.json').subscribe(
    data => {
      this.processCategory = data as string[];	 // FILL THE ARRAY WITH DATA.
      console.log(this.processCategory[1]);
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }
  );
  }

}
