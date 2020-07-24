import {
  Component,
  ElementRef,
  Output,
  Input,
  Directive,
  EventEmitter,
  NgZone,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import Shuffle from "shufflejs";
import { ServicedataService } from "../../services/servicedata.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
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

  fade_state: string = "fade-out";
  popup_state: string = "close";
  classActive: string = "cy-modal";

  year: number = new Date().getFullYear();

  testimonials: any;
  linetime: any;
  portfolio: any;
  experience:number;
  clients:number;
  email:string;
  phone:string;
  address:string;
  projects:number;  categories = [
    {
      name: "All",
      group: "all",
      checked: true,
    },
    {
      name: "Developer",
      group: "developer",
      checked: false,
    },
    {
      name: "CSS",
      group: "css",
      checked: false,
    },
    {
      name: "Apps",
      group: "apps",
      checked: false,
    },
  ];
  constructor(private serviceData: ServicedataService) {
    this.serviceData.getJSON().subscribe((data) => {
      console.log(data);
      this.linetime = data.linetime;
      // this.testimonials = data.testimonials;
      this.experience = data.experience;
      this.clients = data.clients;
      this.projects = data.projects;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
    });
  }

  onCloseModal() {
    this.classActive =
      this.classActive === "cy-modal" ? "cy-modal-close" : "cy-modal";
    document.getElementsByTagName("body")[0].classList.add("scroll_y_yes");
    document.getElementsByTagName("body")[0].classList.remove("scroll_y_no");
  }

  onOpenModal(data) {
    console.log(data)
    this.classActive = "cy-modal";
    document.getElementsByTagName("body")[0].classList.remove("scroll_y_yes");
    document.getElementsByTagName("body")[0].classList.add("scroll_y_no");
  }

  // noScroll_Y() {
  //   // this.scroll_y = 'overflow-y: hidden;' ;
  //   // this.scroll_y = (this.scroll_y === 'scroll_y_yes') ? 'scroll_y_no' : 'scroll_y_yes';
  // }

  async ngOnInit() {
    this.testimonials = [
      {
        name: "Skarllette Yasmín",
        usersocialnetwork: "s.nunz",
        urlsocialnet: "https://www.instagram.com/s.nunz",
        checked: true,
        urlphoto: "assets/img/photos_profile/skarllette.jpg",
        testimonial:
          "Charlies is a very helpful, friendly person, very responsible both personally and professionally, with extensive knowledge in the technological area, her various projects support her. Excellent to face individual or team projects, its collaborative spirit is always reflected.<br>Successes Ing. Charlies",
      },
      {
        name: "Tania Ordoñez",
        usersocialnetwork: "eoatania",
        urlsocialnet: "https://www.instagram.com/eoatania",
        checked: false,
        urlphoto: "assets/img/photos_profile/tania.jpg",
        testimonial:
          "Charlies is someone curious, he always has in mind to keep learning; has great problem solving ability. he is responsible, committed, creative, trustworthy;. Her capacity for project development is extraordinary. Successes! <br><br>PD: Charlies is a cat in boots without a doubt, his boots support him ha ha ha",
      },
      {
        name: "Nohemy Rodriguez",
        usersocialnetwork: "dnrg22",
        urlsocialnet: "https://www.instagram.com/dnrg22",
        checked: false,
        urlphoto: "assets/img/photos_profile/nohemy.jpg",
        testimonial:
          "Charlies Yacniel is a person with an extra bonus both to support and to learn, he is quite accessible, self-taught, independent, he likes to take on challenges, and he is not a conformist person. It is the perfect combination between a friend and a guide.<br><br>Professionally, he is very dedicated to his work and with a high sense of responsibility. Personally he is someone warm, kind, understanding and always pushing others to improve.",
      },
      {
        name: "Cindy Sarahí",
        usersocialnetwork: "cindysarahil",
        urlsocialnet: "https://www.instagram.com/cindysarahil/",
        checked: false,
        urlphoto: "assets/img/photos_profile/cindy.jpg",
        testimonial:
          "Charlies is one of the people who never gives up, always wants to learn more, a noble, humble and above all responsible person.Each new project for him is a new challenge, he will never say no to something he does not know, because if he does not investigate it; A great experience to have him as a co-worker.",
      },
      {
        name: "Benesis Damaris",
        usersocialnetwork: "bd_cl",
        urlsocialnet: "https://www.instagram.com/bd_cl/",
        checked: false,
        urlphoto: "assets/img/photos_profile/benesis.jpg",
        testimonial:
          "Charlies is someone capable of solving any problem you put him, he will help you in whatever you want, he will accompany you on new adventures, and he will propose new challenges.<br><br>Do you have a technological project in mind? Well call Charlies.<br>And when the project is complete, we will go camping to celebrate.",
      },
      {
        name: "Melissa Castillo",
        usersocialnetwork: "melissa792",
        urlsocialnet: "https://www.instagram.com/melissa792/",
        checked: false,
        urlphoto: "assets/img/photos_profile/melissa.jpg",
        testimonial:
          "He is a person who works hard to improve himself, always learning new things, looking at everything as an opportunity to make him grow as a person and as a professional. Always thinking positive, he is very happy, dynamic, sincere and with a noble heart. Very hard-working to support his family.",
      },
      {
        name: "Ivonne Amador",
        usersocialnetwork: "alevonne",
        urlsocialnet: "https://www.instagram.com/alevonne",
        checked: false,
        urlphoto: "assets/img/photos_profile/ivonne.jpg",
        testimonial:
          "Excellent person both personally and academically, he has proven to be respectful, enterprising, responsible, proactive, seeks to deepen his studies, does not settle and always goes the extra mile, these are many of his qualities, but without a doubt the most important is his humility and the empathy he has with others.",
      },
    ];
    this.portfolio = [
      {
        date: new Date(),
        cardtype: 1,
        group: "developer",
        title: "DARA",
        autor: "Charlies",
        figureclass: "col-3@xs col-4@sm col-3@md picture-item",
        cyclass: "cy-card cy-card-style-1",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        detalis: "Este es un projecto de cliente de rurbo Bancario...",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        descripiton:"Este es un projecto de cliente de rurbo Bancario... asdja;ksdj;skdjas;kdjfa;ksdjf;askldjf;skld",
      },
      {
        date: new Date(),
        cardtype: 2,
        group: "developer",
        title: "university 234",
        autor: "Yacniel",
        figureclass: "col-6@xs col-8@sm col-6@md picture-item",
        cyclass: "cy-card cy-card-style-2",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        descripiton:
          "I was born in Tegucigalpa during the month of October 1993, I originally received the name Charli as my first name, Yacniel turned out to be an adaptation of Jack Daniel ' s.○ Father: Hello good morning, I have come to register my son.○ Her: What is the first name?○ Father: Charli○ She: Mmm Charli?○ Father: Yes Charli, it is.○ She: Ah good, Charlies.",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        detalis: "a;sda;lskfs;dkfhsdkjfhasd;kjfha;j",
      },
      {
        date: new Date(),
        cardtype: 1,
        group: "css",
        title: "university 234",
        autor: "Yacniel",
        figureclass: "col-3@xs col-4@sm col-3@md picture-item",
        cyclass: "cy-card cy-card-style-1",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        descripiton:
          "I was born in Tegucigalpa during the month of October 1993, I originally received the name Charli as my first name, Yacniel turned out to be an adaptation of Jack Daniel ' s.○ Father: Hello good morning, I have come to register my son.○ Her: What is the first name?○ Father: Charli○ She: Mmm Charli?○ Father: Yes Charli, it is.○ She: Ah good, Charlies.",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        detalis: "a;sda;lskfs;dkfhsdkjfhasd;kjfha;j",
      },
      {
        date: new Date(),
        cardtype: 2,
        group: "apps",
        title: "university 234",
        autor: "Yacniel",
        figureclass: "col-3@xs col-4@sm col-3@md picture-item",
        cyclass: "cy-card cy-card-style-2",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        descripiton:
          "I was born in Tegucigalpa during the month of October 1993, I originally received the name Charli as my first name, Yacniel turned out to be an adaptation of Jack Daniel ' s.○ Father: Hello good morning, I have come to register my son.○ Her: What is the first name?○ Father: Charli○ She: Mmm Charli?○ Father: Yes Charli, it is.○ She: Ah good, Charlies.",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        detalis: "a;sda;lskfs;dkfhsdkjfhasd;kjfha;j",
      },
      {
        date: new Date(),
        cardtype: 1,
        group: "apps",
        title: "university 234",
        autor: "Yacniel",
        figureclass: "col-3@xs col-4@sm col-3@md picture-item",
        cyclass: "cy-card cy-card-style-2",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        descripiton:
          "I was born in Tegucigalpa during the month of October 1993, I originally received the name Charli as my first name, Yacniel turned out to be an adaptation of Jack Daniel ' s.○ Father: Hello good morning, I have come to register my son.○ Her: What is the first name?○ Father: Charli○ She: Mmm Charli?○ Father: Yes Charli, it is.○ She: Ah good, Charlies.",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        detalis: "a;sda;lskfs;dkfhsdkjfhasd;kjfha;j",
      },
      {
        date: new Date(),
        group: "css",
        cardtype: 1,
        title: "university 234",
        autor: "Yacniel",
        figureclass: "col-6@xs col-8@sm col-6@md picture-item",
        cyclass: "cy-card cy-card-style-1",
        urlthumnails: "assets/img/image_projects/home-employe.png",
        descripiton:
          "I was born in Tegucigalpa during the month of October 1993, I originally received the name Charli as my first name, Yacniel turned out to be an adaptation of Jack Daniel ' s.○ Father: Hello good morning, I have come to register my son.○ Her: What is the first name?○ Father: Charli○ She: Mmm Charli?○ Father: Yes Charli, it is.○ She: Ah good, Charlies.",
        client: "BADAs;kdj;alskdja;slkdjas;lkd",
        detalis: "a;sda;lskfs;dkfhsdkjfhasd;kjfha;j",
      },
    ];
    await this.timeline();
    await this.testimonialsfriends();
    // var progressbar= document.getElementById('progressbar');
    // window.onscroll = function (event) {
    //   var {scrollTop,scrollHeight,clientHeight} =event.target.documentElement
    //   var progress = (scrollTop / (scrollHeight - clientHeight))*100;
    //   progressbar.style.width = `${progress}%`;
    // }

    await this.ShuffleFuntion();
  }

  testimonialsfriends() {
    // vars
    "use strict";
    var testim = document.getElementById("testim"),
      testimDots = Array.prototype.slice.call(
        document.getElementById("testim-dots").children
      ),
      testimContent = Array.prototype.slice.call(
        document.getElementById("testim-content").children
      ),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 20000,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
    window.onload = function () {
      // Testim Script
      function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
          testimContent[k].classList.remove("active");
          testimContent[k].classList.remove("inactive");
          testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
          slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
          slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
          testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
          playSlide((currentSlide += 1));
        }, testimSpeed);
      }

      testimLeftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
      });

      testimRightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
      });

      for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
          playSlide((currentSlide = testimDots.indexOf(this)));
        });
      }

      playSlide(currentSlide);

      // keyboard shortcuts
      document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
          case 37:
            testimLeftArrow.click();
            break;

          case 39:
            testimRightArrow.click();
            break;

          case 39:
            testimRightArrow.click();
            break;

          default:
            break;
        }
      });

      testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
      });

      testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);

        if (touchPosDiff > 0 + ignoreTouch) {
          testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
          testimRightArrow.click();
        } else {
          return;
        }
      });
    };
  }

  // ====
  changeAnimate() {
    this.currentState = "visible";
  }
  ShuffleFuntion() {
    var Demo = function (element) {
      this.element = element;

      this.shuffle = new Shuffle(element, {
        itemSelector: ".picture-item",
        sizer: element.querySelector(".my-sizer-element"),
      });

      // Log events.
      this.addShuffleEventListeners();

      this._activeFilters = [];

      this.addFilterButtons();
      this.addSorting();
      this.addSearchFilter();

      this.mode = "exclusive";
    };

    Demo.prototype.toggleMode = function () {
      if (this.mode === "additive") {
        this.mode = "exclusive";
      } else {
        this.mode = "additive";
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
      var options = document.querySelector(".filter-options");

      if (!options) {
        return;
      }

      var filterButtons = Array.from(options.children);

      filterButtons.forEach(function (button) {
        button.addEventListener(
          "click",
          this._handleFilterClick.bind(this),
          false
        );
      }, this);
    };

    Demo.prototype._handleFilterClick = function (evt) {
      var btn = evt.currentTarget;
      var isActive = btn.classList.contains("active");
      var btnGroup = btn.getAttribute("data-group");

      // You don't need _both_ of these modes. This is only for the demo.

      // For this custom 'additive' mode in the demo, clicking on filter buttons
      // doesn't remove any other filters.
      if (this.mode === "additive") {
        // If this button is already active, remove it from the list of filters.
        if (isActive) {
          this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
        } else {
          this._activeFilters.push(btnGroup);
        }

        btn.classList.toggle("active");

        // Filter elements
        this.shuffle.filter(this._activeFilters);

        // 'exclusive' mode lets only one filter button be active at a time.
      } else {
        this._removeActiveClassFromChildren(btn.parentNode);

        var filterGroup;
        if (isActive) {
          btn.classList.remove("active");
          filterGroup = Shuffle.ALL_ITEMS;
        } else {
          btn.classList.add("active");
          filterGroup = btnGroup;
        }

        this.shuffle.filter(filterGroup);
      }
    };

    Demo.prototype._removeActiveClassFromChildren = function (parent) {
      var children = parent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove("active");
      }
    };

    Demo.prototype.addSorting = function () {
      var buttonGroup = document.querySelector(".sort-options");

      if (!buttonGroup) {
        return;
      }

      buttonGroup.addEventListener("change", this._handleSortChange.bind(this));
    };

    Demo.prototype._handleSortChange = function (evt) {
      // Add and remove `active` class from buttons.
      var buttons = Array.from(evt.currentTarget.children);
      buttons.forEach(function (button: any) {
        if (button.querySelector("input").value === evt.target.value) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });

      // Create the sort options to give to Shuffle.
      var value = evt.target.value;
      var options = {};

      function sortByDate(element) {
        return Date.parse(element.getAttribute("data-date-created"));
      }

      function sortByTitle(element) {
        return element.getAttribute("data-title").toLowerCase();
      }

      if (value === "date-created") {
        options = {
          reverse: true,
          by: sortByDate,
        };
      } else if (value === "title") {
        options = {
          by: sortByTitle,
        };
      }

      this.shuffle.sort(options);
    };

    // Advanced filtering
    Demo.prototype.addSearchFilter = function () {
      var searchInput = document.querySelector(".js-shuffle-search");

      if (!searchInput) {
        return;
      }

      searchInput.addEventListener("input", this._handleSearchKeyup.bind(this));
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
          var groups = JSON.parse(element.getAttribute("data-groups"));
          var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

          // Only search elements in the current group
          if (!isElementInCurrentGroup) {
            return false;
          }
        }

        var titleElement = element.querySelector(".picture-item__title");
        var titleText = titleElement.textContent.toLowerCase().trim();

        return titleText.indexOf(searchText) !== -1;
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      // window.demo =
      new Demo(document.getElementById("grid"));
    });
  }
  // ============
  // timeLine() {

  timeline() {
    // ===== codigo del progress bar
    var progressbar = document.getElementById("progressbar");
    // window.onscroll = function (event) {

    // }
    //=============
    var selectors = {
      id: document.getElementById("timeline-1"),
      item: document.getElementsByClassName("timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
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
      var {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = event.target.documentElement;
      var progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progressbar.style.width = `${progress}%`;

      item.forEach((element: any) => {
        var coord = element.getBoundingClientRect();
        if (coord.top <= 60) {
          element.classList.add(selectors.activeClass);
          // selectors.id.style.cssText =
          // 'background-image:url(' +
          // element.getElementsByTagName('img')[0].getAttribute('src') +
          // ')';
        } else {
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
