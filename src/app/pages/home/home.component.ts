import {
  Component,
  ElementRef,
  Output,
  Input,
  Directive,
  EventEmitter,
  NgZone,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import Shuffle from 'shufflejs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
/*
 animations: [
    trigger('animation_fade', [
      state(
        'fade-in',
        style({
          opacity: 1,
        })
      ),
      state(
        'fade-out',
        style({
          opacity: 0,
        })
      ),
      transition('fade-in <=> fade-out', [animate('0.5s ease-out')]),
    ]),
    trigger('animation_close_modal', [
      state(
        'open',
        style({
          // display: 'flex'
          transform: 'scale(1)'
        })
      ),
      state(
        'close',
        style({
          // display: 'none'
          transform: 'scale(0.2)'
        })
      ),
      transition('open => close', [animate('0.5s ease-in')]),
    ])

  ]*/
export class HomeComponent {
  @Input() currentState;
  private eventOptions: boolean | { capture?: boolean; passive?: boolean };

  fade_state: string = 'fade-out';
  popup_state: string = 'close';
  classActive: string = 'cy-modal';

  year: number = new Date().getFullYear();
  constructor() {}

  onCloseModal() {
    this.classActive =
      this.classActive === 'cy-modal' ? 'cy-modal-close' : 'cy-modal';
    document.getElementsByTagName('body')[0].classList.add('scroll_y_yes');
    document.getElementsByTagName('body')[0].classList.remove('scroll_y_no');
  }

  onOpenModal() {
    this.classActive = 'cy-modal';
    document.getElementsByTagName('body')[0].classList.remove('scroll_y_yes');
    document.getElementsByTagName('body')[0].classList.add('scroll_y_no');
  }

  // noScroll_Y() {
  //   // this.scroll_y = 'overflow-y: hidden;' ;
  //   // this.scroll_y = (this.scroll_y === 'scroll_y_yes') ? 'scroll_y_no' : 'scroll_y_yes';
  // }

  ngOnInit() {
    this.timeline();
    // var progressbar= document.getElementById('progressbar');
    // window.onscroll = function (event) {
    //   var {scrollTop,scrollHeight,clientHeight} =event.target.documentElement
    //   var progress = (scrollTop / (scrollHeight - clientHeight))*100;
    //   progressbar.style.width = `${progress}%`;
    // }

    this.ShuffleFuntion();
  }

  // ====
  changeAnimate() {
    this.currentState = 'visible';
  }
  ShuffleFuntion() {
    'use strict';

    // var Shuffle = window.Shuffle;

    var Demo = function (element) {
      this.element = element;

      this.shuffle = new Shuffle(element, {
        itemSelector: '.picture-item',
        sizer: element.querySelector('.my-sizer-element'),
      });

      // Log events.
      this.addShuffleEventListeners();

      this._activeFilters = [];

      this.addFilterButtons();
      this.addSorting();
      this.addSearchFilter();

      this.mode = 'exclusive';
    };

    Demo.prototype.toggleMode = function () {
      if (this.mode === 'additive') {
        this.mode = 'exclusive';
      } else {
        this.mode = 'additive';
      }
    };

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
    Demo.prototype.addShuffleEventListeners = function () {
      this.shuffle.on(Shuffle.EventType.LAYOUT, function (data) {
        // console.log('layout. data:', data);
      });

      this.shuffle.on(Shuffle.EventType.REMOVED, function (data) {
        // console.log('removed. data:', data);
      });
    };

    Demo.prototype.addFilterButtons = function () {
      var options = document.querySelector('.filter-options');

      if (!options) {
        return;
      }

      var filterButtons = Array.from(options.children);

      filterButtons.forEach(function (button) {
        button.addEventListener(
          'click',
          this._handleFilterClick.bind(this),
          false
        );
      }, this);
    };

    Demo.prototype._handleFilterClick = function (evt) {
      var btn = evt.currentTarget;
      var isActive = btn.classList.contains('active');
      var btnGroup = btn.getAttribute('data-group');

      // You don't need _both_ of these modes. This is only for the demo.

      // For this custom 'additive' mode in the demo, clicking on filter buttons
      // doesn't remove any other filters.
      if (this.mode === 'additive') {
        // If this button is already active, remove it from the list of filters.
        if (isActive) {
          this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
        } else {
          this._activeFilters.push(btnGroup);
        }

        btn.classList.toggle('active');

        // Filter elements
        this.shuffle.filter(this._activeFilters);

        // 'exclusive' mode lets only one filter button be active at a time.
      } else {
        this._removeActiveClassFromChildren(btn.parentNode);

        var filterGroup;
        if (isActive) {
          btn.classList.remove('active');
          filterGroup = Shuffle.ALL_ITEMS;
        } else {
          btn.classList.add('active');
          filterGroup = btnGroup;
        }

        this.shuffle.filter(filterGroup);
      }
    };

    Demo.prototype._removeActiveClassFromChildren = function (parent) {
      var children = parent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active');
      }
    };

    Demo.prototype.addSorting = function () {
      var buttonGroup = document.querySelector('.sort-options');

      if (!buttonGroup) {
        return;
      }

      buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
    };

    Demo.prototype._handleSortChange = function (evt) {
      // Add and remove `active` class from buttons.
      var buttons = Array.from(evt.currentTarget.children);
      buttons.forEach(function (button: any) {
        if (button.querySelector('input').value === evt.target.value) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });

      // Create the sort options to give to Shuffle.
      var value = evt.target.value;
      var options = {};

      function sortByDate(element) {
        return Date.parse(element.getAttribute('data-date-created'));
      }

      function sortByTitle(element) {
        return element.getAttribute('data-title').toLowerCase();
      }

      if (value === 'date-created') {
        options = {
          reverse: true,
          by: sortByDate,
        };
      } else if (value === 'title') {
        options = {
          by: sortByTitle,
        };
      }

      this.shuffle.sort(options);
    };

    // Advanced filtering
    Demo.prototype.addSearchFilter = function () {
      var searchInput = document.querySelector('.js-shuffle-search');

      if (!searchInput) {
        return;
      }

      searchInput.addEventListener('input', this._handleSearchKeyup.bind(this));
    };

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt Event object.
     */
    Demo.prototype._handleSearchKeyup = function (evt) {
      var searchText = evt.target.value.toLowerCase();

      this.shuffle.filter(function (element, shuffle) {
        // If there is a current filter applied, ignore elements that don't match it.
        if (shuffle.group !== Shuffle.ALL_ITEMS) {
          // Get the item's groups.
          var groups = JSON.parse(element.getAttribute('data-groups'));
          var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

          // Only search elements in the current group
          if (!isElementInCurrentGroup) {
            return false;
          }
        }

        var titleElement = element.querySelector('.picture-item__title');
        var titleText = titleElement.textContent.toLowerCase().trim();

        return titleText.indexOf(searchText) !== -1;
      });
    };

    document.addEventListener('DOMContentLoaded', function () {
      // window.demo =
      new Demo(document.getElementById('grid'));
    });
  }
  // ============
  // timeLine() {

  timeline() {
  // ===== codigo del progress bar
  var progressbar= document.getElementById('progressbar');
    // window.onscroll = function (event) {

    // }
    //=============
    var selectors = {
      id: document.getElementById('timeline-1'),
      item: document.getElementsByClassName('timeline-item'),
      activeClass: 'timeline-item--active',
      img: '.timeline__img',
    };
    // selectors.item[0].classList.add(selectors.activeClass);
    // selectors.id.style.cssText =
    //     'background-image:url(' +
    //     selectors.item[0].getElementsByTagName('img')[0].getAttribute('src') +
    //     ')';
    // var itemLength = selectors.item.length;
    var ArrayItems = selectors.item;
    const item = [];
    for (let i = 0; i < ArrayItems.length; i++) {
        item.push(ArrayItems[i]);
    }
    window.onscroll = function (event) {
      var {scrollTop,scrollHeight,clientHeight} =event.target.documentElement
      var progress = (scrollTop / (scrollHeight - clientHeight))*100;
      progressbar.style.width = `${progress}%`;

       item.forEach((element:any) =>{
          var coord=element.getBoundingClientRect()
          if(coord.top <=60){
            element.classList.add(selectors.activeClass);
            // selectors.id.style.cssText =
            // 'background-image:url(' +
            // element.getElementsByTagName('img')[0].getAttribute('src') +
            // ')';
          }else{
            element.classList.remove(selectors.activeClass);
          }

      });





//TODO NO bORAR AUN
      // item.forEach((element:any) =>{
      //     var that = element;
      //     min = that.offsetTop;
      //     max = that.clientHeight + min;
      //     console.log('altura elemento',max);
          // console.log('MAX',max)
          // console.log('asdasd',scrollTop / (scrollHeight - clientHeight))
          // if(){
          // }
          // if ( element == (itemLength - 2) && pos > min + that.clientHeight / 2) {
            // element.classList.remove(selectors.activeClass);
            // selectors.id.style.cssText =
            //     'background-image:url(' +
            //     element.getElementsByTagName('img')[0].getAttribute('src') +
            //     ')';

              // selectors.item[(selectors.item).length - 1].classList.add(selectors.activeClass)
          // } else if (pos <= max - 40 && pos >= min) {
            // selectors.id.style.cssText =
            //     'background-image:url(' +
            //     element.getElementsByTagName('img')[0].getAttribute('src') +
            //     ')';

            // selectors.item[(selectors.item).length - 1].classList.remove(selectors.activeClass)
            // that.classList.add(selectors.activeClass);
          // }
      // });
    };
  }

  // }
}
