import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  @Input() onChangeSlide: (sName_Slide: string) => void;

  aoProjects: any = [
    {
      nID: 0,
      sName: 'Personal Website',
      sDescription: 'An elegant portfolio to enhance your personal traits and achievements, boost your freelancing journey.',
      sTechStack: 'Angular 16, TelegramBot API',
      sUrl_Icon: 'assets/image/project_1.png',
      sUrl_GitHub: 'google.com',
      sUrl_Project: 'google.com'
    },
    {
      nID: 1,
      sName: 'Simple To-do list',
      sDescription: 'A minimalistic to-do app to make track your tasks and to increase your productivity.',
      sTechStack: 'Angular 16, NodeJS, Experss, MongoDB',
      sUrl_Icon: 'assets/image/project_1.png',
      sUrl_GitHub: 'google.com',
      sUrl_Project: 'google.com'
    },
    {
      nID: 2,
      sName: 'Cryptocurrency Stock',
      sDescription: 'A minimalistic to-do app to make track your tasks and to increase your productivity.',
      sTechStack: 'Angular 15.2, NodeJS, Experss, MongoDB, RestAPI, WebSocket',
      sUrl_Icon: 'assets/image/project_1.png',
      sUrl_GitHub: 'google.com',
      sUrl_Project: 'google.com'
    }
  ];

  onOpen_External = (nID: number, sType: string, sUrl?: string) => {
    if (nID !== 0) {
      window.open(sUrl, '_blank');
    } else {
      if (sType === 'git') {
        window.open(sUrl, '_blank');
      } else {
        this.onChangeSlide('aboutMe');
      }
    }
  }

}
