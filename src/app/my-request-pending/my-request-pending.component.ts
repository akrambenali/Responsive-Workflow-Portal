import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-request-pending',
  templateUrl: './my-request-pending.component.html',
  styleUrls: ['./my-request-pending.component.scss']
})
export class MyRequestPendingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  status = false;
  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit() {
  }

}
