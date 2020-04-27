import { Component, ElementRef, Output,Input, Directive, EventEmitter, NgZone } from '@angular/core';


import { trigger, state, style, animate, transition } from '@angular/animations';

import 'jquery';
// import range = require( "lodash/range" );
// import { ElementScrollPercentage } from "./element-scroll-percentage";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
                trigger('changeState', [
                  state ('invisible', style(
                    {
                      transform: 'rotate(-5deg)',
                      opacity: 0.2
                    }
                    )),
                  state ('visible', style(
                    {
                      transform: 'rotate(0)',
                      opacity: 1
                    }
                  )),
                  transition('invisible <=> visible', [animate('0.2s ease-out')]),
                  // transition('stateLogin=>stateRegister', [animate('0.3s ease-out')])
              ]),
            ]
})
export class HomeComponent {
  @Input() currentState;
  private eventOptions: boolean|{capture?: boolean, passive?: boolean};

  constructor() {

  }

  ngOnInit() {
    // this.timeline(document.getElementById('timeline-1'));
    window.addEventListener('scroll', this.scroll, <any>this.eventOptions); //third parameter
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, <any>this.eventOptions);
  }

  scroll = (event): void => {
    // console.log(event.srcElement)
  };



  timeline(timeline) {
      var selectors = {
        id: timeline,
        item: timeline.find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      var itemLength = selectors.item.length;
      // $(window).scroll(function() {
        window.addEventListener('scroll', function(){
          var max, min;
          var pos = timeline.scrollTop();
          selectors.item.each(function(i) {
            min = timeline.offset().top;
            max = timeline.height() + timeline.offset().top;
            var that = timeline;
            if (i == itemLength - 2 && pos > min + timeline.height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item
                    .last()
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" +
                  timeline
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              timeline.addClass(selectors.activeClass);
            }
          });
        }, <any>this.eventOptions);

      // });
    }



// ====
  changeAnimate(){
    this.currentState='visible';
  }
}
