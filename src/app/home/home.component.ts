import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../shared/services/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  readonly VAPID_PUBLIC_KEY = "BOQlkHNohkLnznNA3rH9tPIyPsTwDd7L1AZvSoA7iIy-Bkbep20BJuQW1X0rh-r7M7zhlMo2NOLKhX-zbg5hMWY";

  constructor(private swPush: SwPush,
              private newsletterService: NewsletterService) { }

  ngOnInit() {
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
