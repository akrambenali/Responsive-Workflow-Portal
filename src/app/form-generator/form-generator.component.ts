import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  applications = [
    'DNBO',
    'EndPoint security',
    'File Transfer',
    'FileNet Finance',
    'Datacap HR',
    'Financial Oracle Discoverer',
    'Firewalling Ouest',
    'Fraud Management System_Nikira',
    'GSS Engineering',
    'ICDP',
    'Internet',
    'IVR 444',
    'LMS Reports',
    'Mail_Center',
    'Medical management',
    'OBS Operation',
    'PABX_Center',
    'P_BACK Corporate',
    'access and presence management',
    'Account Management',
    'Account Receivable',
    'Accounts Payable',
    'Active Directory',
    'AdHoc Report',
    'ASF Process Management',
    'Aster',
    'Benefit',
    'Black list',
    'Blackberry',
    'Budget',
    'Business Object',
    'Carrier management',
    'Cash Management',
    'CDRS Operation',
    'CMS InTelestage Contextual Marketing solution',
    'Conference Call Bridge',
    'COPS Web Evaluation',
    'Co_voiturage',
    'CreditShare',
    'CSR Web',
    'Data Management Platform',
    'Data Warehouse',
    'Data Warehouse Extention',
    'Datacap Cops Postpaid',
    'Datacap Cops Prepaid',
    'Datacap Finance',
    'DHCP',
    'Dialer POM',
    'Djezzy Flexy Getway _ Algerie Post',
    'DNS',
    'DWH CDRs Operation',
    'ETL',
    'Fax Server',
    'File Watcher',
    'FileNet Cops',
    'FileNet Cops',
    'FileNet Finance',
    'FileNet HR',
    'Firewalling DEB',
    'Firewalling Dely',
    'Firewalling Est',
    'Firewalling/VPN Internet',
    'Fixed Assets',
    'FMS Operation',
    'Fraud Report',
    'General Ledger',
    'Gestion des campagnes TAM 10 Sales',
    'Hits self service and workflow',
    'HR Integration',
    'Interconnect TELARIX',
    'Internal Mobility',
    'Inventory',
    'IPOS_ADV',
    'IVR_Center',
    'J4U',
    'KMS',
    'LPM Admin',
    'Mail Security',
    'MDT',
    'Medallia',
    'Monitoring tools_Center',
    'Monitoring tools_West',
    'Objective management',
    'OTA Portal',
    'Outlook External Access',
    'PABX_East',
    'PABX_West',
    'Payroll management',
    'Performance evaluation management',
    'Personnel management',
    'POSA',
    'Presence Management',
    'Purchasing',
    'P_BACK Particulier',
    'Quitus Workflow Automation',
    'RAID Collecting files',
    'Recruitment management',
    'Revenue Assurance',
    'Reward Manager',
    'SecureWeb Hosting',
    'Sharedfolders',
    'SimBox Deconnexion',
    'SimBox Detection',
    'SM9',
    'SNOC',
    'Strong Authentication',
    'Symposium_Center',
    'Symposium_West',
    'System Center Configuration Management',
    'Training management',
    'VPN SSL',
    'Web Security',
    'WebFlexy _ SIM Senior',
    'Workforce Management',
    'Digital  Process',
    'TestPlatform',
    'U2000'
  ];
  closeResult: string;
  constructor(private httpService: HttpClient, private router: Router,
    // tslint:disable-next-line:align
    private route: ActivatedRoute, public translate: TranslateService, private modalService: NgbModal) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  status = false;
  clickEvent() {
    this.status = !this.status;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
