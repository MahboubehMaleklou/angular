import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Centrifuge } from 'centrifuge';

@Injectable({
  providedIn: 'root',
})
export class NobitexWebSocketService {
  private centrifuge!: Centrifuge;
  private btcPrice = new BehaviorSubject<number | null>(null);
  btcPrice$ = this.btcPrice.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.centrifuge = new Centrifuge('wss://wss.nobitex.ir/connection/websocket');

    this.centrifuge.on("connecting", (ctx) => {
        console.log("Connecting to Nobitex WebSocket...", ctx);
      });
      
      this.centrifuge.on("connected", (ctx) => {
        console.log("Connected to Nobitex WebSocket", ctx);
      
        const sub = this.centrifuge.newSubscription("market:BTCIRT");
      
        sub.on("publication", (message) => {
          if (message.data && message.data.price) {
            this.btcPrice.next(message.data.price);
          }
        });
      
        sub.subscribe();
      });
      
      this.centrifuge.connect();
      
  }

  disconnect() {
    this.centrifuge.disconnect();
  }
}
