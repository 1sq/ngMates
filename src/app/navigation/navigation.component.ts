import {Component, HostListener} from '@angular/core';

// let runScrolling: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  collapseNav() {
    const nav = document.getElementById('collapse_nav');
    if (nav.classList.contains('in')) {
      nav.classList.remove('in');
    } else {
      nav.classList.add('in');
    }
  }
  // activeClassArray: string [] = ['video-block', 'about', 'whyNg', 'skills', 'portfolio', 'contact'];
  // getActiveElements: {activeElem: any; position: number}[];

  // scrolling(event): void {
  //   event.preventDefault();
  //
  //   clearInterval(runScrolling);
  //
  //   let getHref: string = event.currentTarget.attributes.href.value;
  //   let getElem: any = document.querySelector(getHref);
  //   let elemPosition: number;
  //   let positionTop: number;
  //   let step: number;
  //
  //   runScrolling = setInterval(() => {
  //     elemPosition = getElem.offsetTop;
  //     positionTop = window.pageYOffset;
  //
  //     if (step >= -10 && step <= 10) {
  //       window.scrollTo(0, elemPosition);
  //       clearInterval(runScrolling);
  //     } else {
  //       scrollBy(0, step / 10);
  //       step = Math.round(getElem.getBoundingClientRect().top + 20);
  //       this.scrolling;
  //
  //     }
  //   }, 7);
  // }

  // @HostListener('window:scroll', [])
  // private onWindowScroll = () => {
  //
  //   this.getActiveElements = this.activeClassArray.map(function (a) {
  //     let elem: any = document.querySelector(a);
  //     let activeElem = document.querySelector(`a[type="${a}"]`);
  //     let position: number = elem.offsetTop;
  //     return {activeElem, position};
  //   });
  //
  //   let positionTop: number = window.pageYOffset + 20;
  //   if (this.getActiveElements[0].position > positionTop) {
  //     let home = document.querySelector("a[type='top']");
  //     home.classList.add('active');
  //   } else {
  //     this.getActiveElements.forEach(function (item, index, array) {
  //       if (positionTop >= item.position) {
  //         array.forEach(function (deactive) {
  //           deactive.activeElem.classList.remove('active');
  //         });
  //         item.activeElem.classList.add('active');
  //       }
  //     });
  //   }
  // }

}
