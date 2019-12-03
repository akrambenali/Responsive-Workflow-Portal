import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  liste = {};
  constructor(private httpService: HttpClient, private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  processCategory: string[];
  processList: string[];
  status = false;
  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit() {
    this.httpService.get('./assets/ParentCards.json').subscribe(
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
