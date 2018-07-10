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
  readonly VAPID_PUBLIC_KEY = "BGLvKcMgoR0gwl-6xE937LVoDdRl6dxQVz7Re4w04nLZovXCHzhjvxrLmz0HU26RWRqeHzIRU5ACFeJv04apj0A";

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
