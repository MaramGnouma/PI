import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientServiceService } from 'src/app/Services/client-service.service';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
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
  clients: Client = new Client();

  constructor(private serv: ClientServiceService, private router: Router) {}

  saveClient() {
    this.serv.addClient(this.clients).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    console.log(this.clients);
    this.saveClient();
    this.closepopup();
  }
}