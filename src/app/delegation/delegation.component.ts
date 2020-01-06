import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.scss']
})
export class DelegationComponent implements OnInit {

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
