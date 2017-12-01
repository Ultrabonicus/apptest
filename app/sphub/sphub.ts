import { Injectable } from '@angular/core';
import { Http, Request, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gift, Thumbs } from './gift';
import 'rxjs/add/operator/map';

@Injectable()
export class SPHub {
  constructor(private http: Http) {}

  private unwrapJsonp(str): string {
    return /(\()(.*)(\)$)/.exec(str)[2];
  }

  getGifts(): Observable<Array<Gift>> {
    
    let giftUrl: string = "https://sailplay.net/js-api/1735/gifts/list/?lang=en&callback=JSONP_CALLBACK.sailplay_1512074734367021877355730344328";

    return this.http.get(giftUrl)
      .map(data => {
        let raw: Array<Gift> = JSON.parse(this.unwrapJsonp(data.text())).gifts;

        return raw
      })
  }
  //getGifts()

/*a
    sp.on('load.gifts.list', function (params) {

      if (_config == {}) {
        initError();
        return;
      }

      params = params || {};

      if (_config.auth_hash) {
        params.auth_hash = _config.auth_hash;
      }

      params.lang = params.lang || _config.lang || 'ru';

      JSONP.get(_config.DOMAIN + _config.urls.gifts.list, params, function (res) {
        //      console.dir(res);
        if (res.status == 'ok') {
          sp.send('load.gifts.list.success', res.gifts);
        } else {
          sp.send('load.gifts.list.error', res);
        }
      });
    });
  }
*/
}
