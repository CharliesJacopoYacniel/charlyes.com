import {
  Component,
  // ElementRef,
  // Output,
  Input,
  // Directive,
  // EventEmitter,
  // NgZone,
} from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
// } from '@angular/animations';
import Shuffle from 'shufflejs';
import { ServicedataService } from '../../services/servicedata.service';
import { MailsService } from 'src/app/services/mails.service';
// import { Projectitem } from 'src/app/models/projectitem';
// import { setTimeout } from 'timers';
// import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() currentState;
  // private eventOptions: boolean | { capture?: boolean; passive?: boolean };
/*variables  de formulario*/
  name: string;
  email_client: string;
  message: string;
  phone_client: string;
  mail_send:boolean=false;
  label_error:boolean=false;

  fade_state: string = 'fade-out';
  popup_state: string = 'close';
  classActive: string = 'cy-modal';

  year: number = new Date().getFullYear();

  testimonials: any;
  linetime: any;
  portfolio: any;
  experience: number;
  clients: number;
  email: string;
  phone: string;
  address: string;
  projects: number;
  my_social_networks:any;
  credits:any;
  // project_item:Projectitem;
  project_item:any={
    title: null,
    type_project:null,
    rol: null,
    url_thumnails: null,
    url_background: null,
    url_devices: null,
    url_mobile: null,
    url_mocks: null,
    url_public: null,
    co_workers:null,
    thumnail__descripition: null,
    client:null,
    text_presentation:null,
  };

  categories = [
    {
      name: 'All',
      group: 'all',
      checked: true,
    },
    {
      name: 'Front End',
      group: 'frontend',
      checked: false,
    },
    {
      name: 'Back End',
      group: 'backend',
      checked: false,
    },
  ];
//  span:any;
// //  textIndex:any;
//  textToShow:any;
//  textToShowLen:any;
//  letterIndex:any;
//  textTimer:any;
//  letterTimer:any;
// //  textDelay:any;
// //  letterDelay:any;
//  emptyTimer:any;

//  textIndex = 0;
//  textDelay= 2300;
//  letterDelay = 130;



// userForm = new FormGroup({
//   name: new FormControl(''),
//   email: new FormControl(''),
//   phone: new FormControl(''),
//   message: new FormControl(''),
// });
progressbar= document.getElementById("progressbar")
constructor(
  private serviceData: ServicedataService,
  private cy_mail: MailsService,
  ) {


    this.serviceData.getJSON().subscribe((data) => {
      // console.log(data);
      this.linetime = data.linetime;
      // this.testimonials = data.testimonials;
      this.experience = data.experience;
      // this.portfolio = data.portfolio;
      this.clients = data.clients;
      this.projects = data.projects;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
      this.my_social_networks = data.my_social_networks;
      this.credits = data.credits;
      // console.log('social',this.my_social_networks);
    });
    // window.onscroll = function(even) {this.myFunction(event)};
  }

  onCloseModal() {
    this.classActive =
      this.classActive === 'cy-modal' ? 'cy-modal-close' : 'cy-modal';
    document.getElementsByTagName('body')[0].classList.add('scroll_y_yes');
    document.getElementsByTagName('body')[0].classList.remove('scroll_y_no');
  }

  onOpenModal(data) {
    console.log('open modal',data)
    this.project_item = data;
    this.classActive = 'cy-modal';
    document.getElementsByTagName('body')[0].classList.remove('scroll_y_yes');
    document.getElementsByTagName('body')[0].classList.add('scroll_y_no');
  }

  // noScroll_Y() {
  //   // this.scroll_y = 'overflow-y: hidden;' ;
  //   // this.scroll_y = (this.scroll_y === 'scroll_y_yes') ? 'scroll_y_no' : 'scroll_y_yes';
  // }
/**
 * los skills que voy a dejar
 * Front end
 *   HTML al 80%
 *   CSS al 90%  X
 *   JS al 80%   X
 *   Angular al 80% X
 *
 *  BACK END
 *   PHP al 90%   X
 *   NODE JS al 80% X
 *   JAVA al 70%
 *
 * Otros
 * Git al 80%  X
 * Docker al 70%
 * Adobe XD al 90%
 * BD SQL/NO SQL al 80%
 *
 */
ngOnDestroy() {
  window.removeEventListener('scroll', this.scroll, true);
}

scroll = function(event) {
  // var progressbar= document.getElementById("progressbar")
  //handle your scroll here
  //notice the 'odd' function assignment to a class field
  //this is used to be able to remove the event listener

      // console.log(event)
      var {scrollTop,scrollHeight,clientHeight} =event.target;
      var progress = (scrollTop / (scrollHeight - clientHeight))*100;
      // console.log(progress)
      this.progressbar.style.width = `${progress}%`;
};
  async ngOnInit() {
  //

  window.addEventListener('scroll', this.scroll, true); //third parameter

  // window.onscroll = function (event) {
  //   var progressbar= document.getElementById("progressbar")
  //     console.log(event)
  //     var {scrollTop,scrollHeight,clientHeight} =event.target.documentElement
  //     var progress = (scrollTop / (scrollHeight - clientHeight))*100;
  //     console.log(progress)
  //     progressbar.style.width = `${progress}%`;
  //   }
  //
    this.emptySpan();
    this.toggleButtonMenu();
    this.testimonials = [
      {
        name: 'Skarllette Yasmín',
        usersocialnetwork: 's.nunz',
        urlsocialnet: 'https://www.instagram.com/s.nunz',
        checked: true,
        urlphoto: 'assets/img/photos_profile/skarllette.jpg',
        testimonial:
          'Charlies is a very helpful, friendly person, very responsible both personally and professionally, with extensive knowledge in the technological area, her various projects support her. Excellent to face individual or team projects, its collaborative spirit is always reflected.<br>Successes Ing. Charlies',
      },
      {
        name: 'Tania Ordoñez',
        usersocialnetwork: 'eoatania',
        urlsocialnet: 'https://www.instagram.com/eoatania',
        checked: false,
        urlphoto: 'assets/img/photos_profile/tania.jpg',
        testimonial:
          'Charlies is someone curious, he always has in mind to keep learning; has great problem solving ability. he is responsible, committed, creative, trustworthy;. Her capacity for project development is extraordinary. Successes! <br><br>PD: Charlies is a cat in boots without a doubt, his boots support him ha ha ha',
      },
      {
        name: 'Nohemy Rodriguez',
        usersocialnetwork: 'dnrg22',
        urlsocialnet: 'https://www.instagram.com/dnrg22',
        checked: false,
        urlphoto: 'assets/img/photos_profile/nohemy.jpg',
        testimonial:
          'Charlies Yacniel is a person with an extra bonus both to support and to learn, he is quite accessible, self-taught, independent, he likes to take on challenges, and he is not a conformist person. It is the perfect combination between a friend and a guide.<br><br>Professionally, he is very dedicated to his work and with a high sense of responsibility. Personally he is someone warm, kind, understanding and always pushing others to improve.',
      },
      {
        name: 'Cindy Sarahí',
        usersocialnetwork: 'cindysarahil',
        urlsocialnet: 'https://www.instagram.com/cindysarahil/',
        checked: false,
        urlphoto: 'assets/img/photos_profile/cindy.jpg',
        testimonial:
          'Charlies is one of the people who never gives up, always wants to learn more, a noble, humble and above all responsible person.Each new project for him is a new challenge, he will never say no to something he does not know, because if he does not investigate it; A great experience to have him as a co-worker.',
      },
      {
        name: 'Benesis Damaris',
        usersocialnetwork: 'bd_cl',
        urlsocialnet: 'https://www.instagram.com/bd_cl/',
        checked: false,
        urlphoto: 'assets/img/photos_profile/benesis.jpg',
        testimonial:
          'Charlies is someone capable of solving any problem you put him, he will help you in whatever you want, he will accompany you on new adventures, and he will propose new challenges.<br><br>Do you have a technological project in mind? Well call Charlies.<br>And when the project is complete, we will go camping to celebrate.',
      },
      {
        name: 'Melissa Castillo',
        usersocialnetwork: 'melissa792',
        urlsocialnet: 'https://www.instagram.com/melissa792/',
        checked: false,
        urlphoto: 'assets/img/photos_profile/melissa.jpg',
        testimonial:
          'He is a person who works hard to improve himself, always learning new things, looking at everything as an opportunity to make him grow as a person and as a professional. Always thinking positive, he is very happy, dynamic, sincere and with a noble heart. Very hard-working to support his family.',
      },
      {
        name: 'Ivonne Amador',
        usersocialnetwork: 'alevonne',
        urlsocialnet: 'https://www.instagram.com/alevonne',
        checked: false,
        urlphoto: 'assets/img/photos_profile/ivonne.jpg',
        testimonial:
          'Excellent person both personally and academically, he has proven to be respectful, enterprising, responsible, proactive, seeks to deepen his studies, does not settle and always goes the extra mile, these are many of his qualities, but without a doubt the most important is his humility and the empathy he has with others.',
      },
    ];
    this.portfolio = [
      {
        "card_type": 1,
        "group": 'frontend',
        "figureclass": 'col-6@xs col-4@sm col-3@md picture-item',
        "cy_class": 'cy-card cy-card-style-2',
        "date": "March 2020",
        "title": "charlyes.com",
        "type_project":"Landing Page",
        "rol": "Developer Front End",
        "autor": "Charlies Yacniel",
        "url_thumnails": "assets/img/image_projects/charlies/project-cy-devices.jpg",
        "url_background": "assets/img/image_projects/charlies/project-cy-background.jpg",
        "url_devices": "assets/img/image_projects/charlies/project-cy-devices.jpg",
        "url_mobile": "assets/img/image_projects/charlies/project-cy-mobile.jpg",
        "url_mocks": "assets/img/image_projects/charlies/project-cy-mocks.jpg",
        "url_public": "https://github.com/CharliesYacniel",
        "team": [
          {
            "name":"Charlies yacniel",
            "user_name":"@charliesyacniel",
            "rol":"Front-end developer",
            "url_network":"https://github.co/CharliesYacniel"
          },
        ],
        "thumnail__descripition": "A Solid Prestige Financial Institution needs define your new processes...",
        "text_presentation":' A Solid Prestige Financial Institution needs define your <span>new processes</span> for reconciliation <span>automation</span> of payments and collections, made by their clients through <span>manual</span> processes.<br><br> The <span>web portal</span> "Conciliations" is the <span>administrative module</span> where Users can log in and proceed with the <span>accounting balance</span> between the fundraising institution and the area of information technologies.',
        "text_intervention":'Charlies was assigned to this project to carry out the <span>design and the development</span> of a <span>web application</span> that would allow users carry out the <span>validation</span> process that was carried out form <span>manual</span> passing this to a form <span>automatic</span>, safe and consistent.',
        "text_challenge":'The project was approved in August 2018 ending inDecember of the same year, it was agreed to set a first part of themodule for that month and the rest for a second installment.<br/>The <span>main requirement</span> for the operation of the project consisted oftake information from both entities, <span>compare</span> data, determine<span>deferred</span> and generate <span>alerts</span> to users.',
        "text_hands_of_work":'In this project there was a <span>software requirement</span> on which a portal guide was designed using <span>mockups</span>, these weredesigned by the <span>graphic design</span> team respecting the established <span>graphic line</span>.',
        "text_sumary":'In the end I managed to finish the project as a quarantine goal, here is the result.<pr>As of today I can refer future clients to a personal portal that identifies me when I am not present.',
        "text_other":'The project management was carried out by the team of <span>Project Manager</span> of the “Financial Institution of Solid Prestige ”, they took control of the <span>tasks</span> of the project. <br><br><br> For the design and development of the project there was free decision inthe use of tools, as a newsoftware solution.',
        "resources":[
          {"name": 'Angular 8'},
          {"name": 'Suffle JS'}
        ],
        "clients": [
          {
            "position_logo":1,
            "class_logo":"cy-col-2 cy-col-2-sm",
            "class_text":"cy-col-10 cy-col-10-sm",
            "url_logo":'assets/img/logo-cy.svg',
            "name":'Charlies Yacniel',
            "description": 'Necesitaba crear mi propio sitio web'
          },
        ]
      },
      {
        "group": "backend",
        "figureclass": 'col-6@xs col-8@sm col-6@md picture-item',
        "card_type": 2,
        "cy_class": "cy-card cy-card-style-1",

        "date": "December 2018",
        "title": "Bank Conciliations",
        "type_project":"Aplication Web",
        "rol": "Back End developer",
        "autor": "Charlies Yacniel",
        "url_thumnails": "assets/img/image_projects/reconciliations/project-cy-devices.jpg",
        "url_background": "assets/img/image_projects/reconciliations/project-cy-background.jpg",
        "url_devices": "assets/img/image_projects/reconciliations/project-cy-devices.jpg",
        "url_mobile": "assets/img/image_projects/reconciliations/project-cy-mobile.jpg",
        "url_mocks": "assets/img/image_projects/reconciliations/project-cy-mocks.jpg",
        "url_public": "https://github.com/CharliesYacniel",
        "team": [
          {
            "name":"Andy Castellanos",
            "user_name":"@ariel.gonzalez.96742",
            "rol":"Back End developer",
            "url_network":"https://www.facebook.com/ariel.gonzalez.96742/"
          },
          {
            "name":"Charlies Yacniel",
            "user_name":"@charliesyacniel",
            "rol":"Web developer",
            "url_network":"https://github.com/CharliesYacniel"
          }
        ],
        "thumnail__descripition": "A Solid Prestige Financial Institution needs define your new processes...",
        "text_presentation":' A Solid Prestige Financial Institution needs define your <span>new processes</span> for reconciliation <span>automation</span> of payments and collections, made by their clients through <span>manual</span> processes.<br><br> The <span>web portal</span> "Conciliations" is the <span>administrative module</span> where Users can log in and proceed with the <span>accounting balance</span> between the fundraising institution and the area of information technologies.',
        "text_intervention":'Charlies was assigned to this project to carry out the <span>design and the development</span> of a <span>web application</span> that would allow users carry out the <span>validation</span> process that was carried out form <span>manual</span> passing this to a form <span>automatic</span>, safe and consistent.',
        "text_challenge":'The project was approved in August 2018 ending in December of the same year, it was agreed to set a first part of themodule for that month and the rest for a second installment.<br/>The <span>main requirement</span> for the operation of the project consisted oftake information from both entities, <span>compare</span> data, determine<span>deferred</span> and generate <span>alerts</span> to users.',
        "text_hands_of_work":'In this project there was a <span>software requirement</span> on which a portal guide was designed using <span>mockups</span>, these weredesigned by the <span>graphic design</span> team respecting the established <span>graphic line</span>.',
        "text_sumary":'In the end, users were satisfied to be able to carry out reconciliations on a <span>website</span> hosted on your <span>intranet</span>, up to dateToday can generate the documentation required by the "GroupCustoms Rents ”which validates the correct <span>registration</span> of theinformation.',
        "text_other":'The project management was carried out by the team of <span>Project Manager</span> of the “Financial Institution of Solid Prestige ”, they took control of the <span>tasks</span> of the project. <br><br><br> For the design and development of the project there was free decision inthe use of tools, as a newsoftware solution.',
        "resources":[
          {"name": 'Animate CSS'},
          {"name": 'Datatables JS'},
          {"name": 'Bootstrap 4'},
          {"name": 'Toast JS'},
        ],
        "clients": [
          {
            "position_logo":'column1',
            "class_logo":"cy-col-2 cy-col-2-sm",
            "class_text":"cy-col-10 cy-col-10-sm",
            "url_logo":'assets/img/logo-cy.svg',
            "name":'Solid Prestige Financial Institution',
            "description": 'The “Solid Prestige Financial Institution” is an institution bank with a long regional history in proposing products and provision of services to the community.'
          },
          {
            "position_logo":'column2',
            "class_logo":"cy-col-2 cy-col-2-sm",
            "class_text":"cy-col-10 cy-col-10-sm",
            "url_logo": 'assets/img/logo-cy.svg',
            "name": 'Grupo Rentas Aduaneras',
            "description": 'The "Grupo Rentas Aduaneras" is a government institution dedicated to the revenue collection item in national customs and international.'
          },
        ]
      },
      {
        "card_type": 1,
        "group": 'backend',
        "figureclass": 'col-6@xs col-4@sm col-3@md picture-item',
        "cy_class": 'cy-card cy-card-style-2',
        "date": "October 2017",
        "title": "Update Data Clients",
        "type_project":"Form web",
        "rol": "Back-end developer",
        "autor": "Solid Prestige Financial Institution",
        "url_thumnails": "assets/img/image_projects/campaign/project-cy-background.jpg",
        "url_background": "assets/img/image_projects/campaign/project-cy-background.jpg",
        "url_devices": "assets/img/image_projects/campaign/project-cy-devices.jpg",
        "url_mobile": null,
        "url_mocks": null,
        "url_public": "https://github.com/CharliesYacniel",
        "team": [
          {
            "name":"Ivan Castelar",
            "user_name":"@castelar007",
            "rol":"Front-end developer",
            "url_network":"https://github.com/castelar007"
          },
          {
            "name":"Victor Morales",
            "user_name":"@ViiMorales",
            "rol":"Software Architect",
            "url_network":"https://github.com/ViiMorales"
          },
          {
            "name":"Charlies Yacniel",
            "user_name":"@charliesyacniel",
            "rol":"Back-end developer",
            "url_network":"https://github.co/CharliesYacniel"
          },
        ],
        "thumnail__descripition": "A Solid Prestige Financial Institution needs define your new processes...",
        "text_presentation":' A Solid Prestige Financial Institution needs define your <span>new processes</span> for reconciliation <span>automation</span> of payments and collections, made by their clients through <span>manual</span> processes.<br><br> The <span>web portal</span> "Conciliations" is the <span>administrative module</span> where Users can log in and proceed with the <span>accounting balance</span> between the fundraising institution and the area of information technologies.',
        "text_intervention":'Charlies was assigned to this project to carry out the <span>design and the development</span> of a <span>web application</span> that would allow users carry out the <span>validation</span> process that was carried out form <span>manual</span> passing this to a form <span>automatic</span>, safe and consistent.',
        "text_challenge":'The project was approved in August 2018 ending inDecember of the same year, it was agreed to set a first part of themodule for that month and the rest for a second installment.<br/>The <span>main requirement</span> for the operation of the project consisted oftake information from both entities, <span>compare</span> data, determine<span>deferred</span> and generate <span>alerts</span> to users.',
        "text_hands_of_work":'In this project there was a <span>software requirement</span> on which a portal guide was designed using <span>mockups</span>, these weredesigned by the <span>graphic design</span> team respecting the established <span>graphic line</span>.',
        "text_sumary":'In the end, users were satisfied to be able to carry out reconciliations on a <span>website</span> hosted on your <span>intranet</span>, up to dateToday can generate the documentation required by the "GroupCustoms Rents ”which validates the correct <span>registration</span> of theinformation.',
        "text_other":'The project management was carried out by the team of <span>Project Manager</span> of the “Financial Institution of Solid Prestige ”, they took control of the <span>tasks</span> of the project. <br><br><br> For the design and development of the project there was free decision inthe use of tools, as a newsoftware solution.',
        "resources":[
          {"name": 'Meteor JS'},
          {"name": 'Animate CSS'}
        ],
        "clients": [
          {
            "position_logo":'column1',
            "class_logo":"cy-col-2 cy-col-2-sm",
            "class_text":"cy-col-10 cy-col-10-sm",
            "url_logo":'assets/img/logo-cy.svg',
            "name":'Solid Prestige Financial Institution',
            "description": 'The “Solid Prestige Financial Institution” is an institution bank with a long regional history in proposing products and provision of services to the community.'
          },
        ]
      },
    ];

    await this.timeline();
    await this.testimonialsfriends();
    await this.ShuffleFuntion();
  }

  testimonialsfriends() {
    // vars
    'use strict';
    var testim = document.getElementById('testim'),
      testimDots = Array.prototype.slice.call(
        document.getElementById('testim-dots').children
      ),
      testimContent = Array.prototype.slice.call(
        document.getElementById('testim-content').children
      ),
      testimLeftArrow = document.getElementById('left-arrow'),
      testimRightArrow = document.getElementById('right-arrow'),
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
          testimContent[k].classList.remove('active');
          testimContent[k].classList.remove('inactive');
          testimDots[k].classList.remove('active');
        }

        if (slide < 0) {
          slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
          slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
          testimContent[currentActive].classList.add('inactive');
        }
        testimContent[slide].classList.add('active');
        testimDots[slide].classList.add('active');

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
          playSlide((currentSlide += 1));
        }, testimSpeed);
      }

      testimLeftArrow.addEventListener('click', function () {
        playSlide((currentSlide -= 1));
      });

      testimRightArrow.addEventListener('click', function () {
        playSlide((currentSlide += 1));
      });

      for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener('click', function () {
          playSlide((currentSlide = testimDots.indexOf(this)));
        });
      }

      playSlide(currentSlide);

      // keyboard shortcuts
      document.addEventListener('keyup', function (e) {
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

      testim.addEventListener('touchstart', function (e) {
        touchStartPos = e.changedTouches[0].clientX;
      });

      testim.addEventListener('touchend', function (e) {
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
    this.currentState = 'visible';
  }
  ShuffleFuntion() {
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
    // var progressbar = document.getElementById('progressbar');
    // window.onscroll = function (event) {

    // }
    //=============
    // var selectors = {
    //   id: document.getElementById('timeline-1'),
    //   item: document.getElementsByClassName('timeline-item'),
    //   activeClass: 'timeline-item--active',
    //   img: '.timeline__img',
    // };
    // selectors.item[0].classList.add(selectors.activeClass);
    // selectors.id.style.cssText =
    //     'background-image:url(' +
    //     selectors.item[0].getElementsByTagName('img')[0].getAttribute('src') +
    //     ')';
    // var itemLength = selectors.item.length;

    // var ArrayItems = selectors.item;
    // const item = [];
    // for (let i = 0; i < ArrayItems.length; i++) {
    //   item.push(ArrayItems[i]);
    // }
    // window.onscroll = function (event) {
    //   var {
    //     scrollTop,
    //     scrollHeight,
    //     clientHeight,
    //   } = event.target.documentElement;
    //   // var progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    //   // console.log('proresgess',progress)
    //   // progressbar.style.width = `${progress}%`;

    //   item.forEach((element: any) => {
    //     var coord = element.getBoundingClientRect();
    //     if (coord.top <= 60) {
    //       element.classList.add(selectors.activeClass);
    //       // selectors.id.style.cssText =
    //       // 'background-image:url(' +
    //       // element.getElementsByTagName('img')[0].getAttribute('src') +
    //       // ')';
    //     } else {
    //       element.classList.remove(selectors.activeClass);
    //     }
    //   });

    //   //TODO NO bORAR AUN
    //   // item.forEach((element:any) =>{
    //   //     var that = element;
    //   //     min = that.offsetTop;
    //   //     max = that.clientHeight + min;
    //   //     console.log('altura elemento',max);
    //   // console.log('MAX',max)
    //   // console.log('asdasd',scrollTop / (scrollHeight - clientHeight))
    //   // if(){
    //   // }
    //   // if ( element == (itemLength - 2) && pos > min + that.clientHeight / 2) {
    //   // element.classList.remove(selectors.activeClass);
    //   // selectors.id.style.cssText =
    //   //     'background-image:url(' +
    //   //     element.getElementsByTagName('img')[0].getAttribute('src') +
    //   //     ')';

    //   // selectors.item[(selectors.item).length - 1].classList.add(selectors.activeClass)
    //   // } else if (pos <= max - 40 && pos >= min) {
    //   // selectors.id.style.cssText =
    //   //     'background-image:url(' +
    //   //     element.getElementsByTagName('img')[0].getAttribute('src') +
    //   //     ')';

    //   // selectors.item[(selectors.item).length - 1].classList.remove(selectors.activeClass)
    //   // that.classList.add(selectors.activeClass);
    //   // }
    //   // });
    // };
  }

  toggleButtonMenu(){
    let toggle = document.querySelector('.three-lines-menu'),
    li = document.querySelectorAll('ul.cy-nav-links li'),
    sidebar = document.querySelector('#menu ul');
    // console.log('li',li)
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log('click en menu')
        sidebar.classList.toggle('menu-responsive');
    });

    li.forEach(function(item){
      item.addEventListener('click', function(e) {
        // e.preventDefault();
        // console.log('click en li')
        sidebar.classList.toggle('menu-responsive');
    });
    })
  }


emptySpan() {

  var span,
   textIndex,
   textToShow,
   textToShowLen,
   letterIndex,
   textTimer,
   letterTimer,
   textDelay,
   letterDelay,
   emptyTimer;
   var textArr = [
     "ies",
     'yes'
    ];
    textIndex = 0;
    textDelay= 2000;
    letterDelay = 150;

    span =   document.querySelector("#cyspanletter");

    // span.textContent=textArr[textIndex + 1];
  // console.log(span)
  emptyTimer =  setInterval(()=>{
        // removeLetter
        if (span.textContent.length != 0) {
          var popedSpan = Array.prototype.slice.call(span.textContent).slice(0,span.textContent.length-1).join('');
          span.textContent = popedSpan;
        } else {
          clearInterval(emptyTimer);
          // await showText();
          textToShow = textArr[textIndex];
          textToShowLen = textToShow.length;
          letterIndex = 0;

          letterTimer = setInterval(()=> {
            span.textContent += textToShow[letterIndex];
            // console.log(textToShow[letterIndex]);
            letterIndex++;
            if (letterIndex > textToShowLen-1) {
              clearInterval(letterTimer);
              textTimer = setTimeout(()=>{
                clearTimeout(textTimer);
                textIndex++;
                span.textContent=textArr[textIndex];
                if (textIndex > textArr.length-1) {
                  textIndex = 0;
                }
                this.emptySpan();
                // textIndex++;
              },textDelay)
            }
          } ,letterDelay)
        }
      }
    , letterDelay/2);
}




onSendMail(e:Event){
  this.label_error=false;
  this.mail_send=false;
  e.preventDefault();
  let message=`Hey Charlies, soy tu mismo.
  ${this.name} te envia su correo
  (${this.email}) y su numero de telefono
  (${this.phone}), procura responderle pronto.
  Su mensjae fue este: <strong>${this.message}</strong> `;

    this.cy_mail.cySendMail(message).subscribe(
			(response: any) => {
        console.log('response',response)
        if(response.ok){
             this.mail_send=true;
        }else{
          this.label_error=true;
        }
			},
			(err: any) => {
        console.log(err);
        if (err.status == 401) {
          console.log('ERROR 401 ',err);
          this.label_error=true;
				}
				if (err.status == 0) {
          console.log('Fallo la conexión con el servidor');
          this.label_error=true;
				}
			}
		);
}

  // }
}
