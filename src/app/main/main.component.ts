import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  config;
  fullpageApi;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['aboutMe', 'myProjects', 'contactMe'],
      navigation: true
    };
  }

  onChangeSlide = (sName_Slide: string) => {
    this.fullpageApi.moveTo(sName_Slide);
  }

  getActiveSection = () => {
    if (this.fullpageApi && this.fullpageApi.getActiveSection()) {
      return this.fullpageApi.getActiveSection();
    } else {
      return {};
    }
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
