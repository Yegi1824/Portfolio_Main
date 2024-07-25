import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

    config;
    fullpageApi;
    bLoading: boolean = true;

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

    ngAfterViewInit() {
        this.trackImagesLoading();
    }

    trackImagesLoading() {
        const images = document.getElementsByTagName('img');
        let loadedImagesCount = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            this.onAllImagesLoaded();
            return;
        }

        const onImageLoad = () => {
            loadedImagesCount++;
            if (loadedImagesCount === totalImages) {
                this.onAllImagesLoaded();
            }
        };

        for (let i = 0; i < totalImages; i++) {
            const img = images[i];
            if (img.complete) {
                onImageLoad();
            } else {
                img.addEventListener('load', onImageLoad);
                img.addEventListener('error', onImageLoad); // Consider an image load error as a completed load.
            }
        }
    }

    onAllImagesLoaded() {
        console.log('All images have been loaded.');
        this.bLoading = false;
        // Perform actions after all images have loaded
    }

    getRef(fullPageRef) {
        this.fullpageApi = fullPageRef;
    }

}
