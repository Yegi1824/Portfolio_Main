import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input() onChangeSlide: (sName_Slide: string) => void;

  aTechnologies = [
    {
      sImageUrl: 'assets/image/html.png',
      sBorderColor: '#E65638',
      sText: 'HTML5'
    },
    {
      sImageUrl: 'assets/image/css.png',
      sBorderColor: '#274DE5',
      sText: 'CSS3'
    },
    {
      sImageUrl: 'assets/image/js.png',
      sBorderColor: '#EFDB4E',
      sText: 'Javascript'
    },
    {
      sImageUrl: 'assets/image/ts.png',
      sBorderColor: '#007ACC',
      sText: 'Typescript'
    },
    {
      sImageUrl: 'assets/image/angular.png',
      sBorderColor: '#B42D31',
      sText: 'Angular'
    },
    {
      sImageUrl: 'assets/image/RxJS.png',
      sBorderColor: '#DF108D',
      sText: 'RxJS'
    },
    {
      sImageUrl: 'assets/image/node.png',
      sBorderColor: '#78B663',
      sText: 'NodeJS'
    },
    {
      sImageUrl: 'assets/image/mongo.png',
      sBorderColor: '#1B8836',
      sText: 'MongoDB'
    },
    {
      sImageUrl: 'assets/image/ionic.png',
      sBorderColor: '#176BFF',
      sText: 'Ionic'
    },
    {
      sImageUrl: 'assets/image/figma.png',
      sBorderColor: '#FE7362',
      sText: 'Figma'
    }
  ];

  onOpenUrl = (sUrl: string) => {
    window.open(sUrl, '_blank');
  }
}
