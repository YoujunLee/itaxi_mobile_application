import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyPage } from '../my-page/my-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyPage;
  tab3Root = MyPage;

  constructor() {

  }
}
