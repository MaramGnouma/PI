import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
  constructor() {}

  ngOnInit(): void {
    $(document).ready(() => {
      $('.sign_in').click(() => {
        $('.login').addClass('active');
        $('.welcome').addClass('active');
        $('.sign_in').addClass('active');
        $('.btn').addClass('active');
        $('.sign_up').addClass('active');
      });

      $('.btn').click(() => {
        $('.sign_up').removeClass('active');
        $('.login').removeClass('active');
        $('.welcome').removeClass('active');
        $('.sign_up').removeClass('active');
        $('.btn').removeClass('active');
        $('.sign_in').removeClass('active');
      });
    });
  }

  openpopup() {
    const element = document.getElementById('exampleModalLong') as HTMLElement;
    if (element) {
      element.hidden = false;
    }
  }
  closepopup() {
    const element = document.getElementById('exampleModalLong') as HTMLElement;
    if (element) {
      element.hidden = true;
    }
  }
}
