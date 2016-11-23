import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

/*import { GamePage } from '../pages/game/game.page';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';
import { StandingsPage } from '../pages/standings/standings.page';
import { TeamHomePage } from '../pages/team-home/team-home.page';*/

//Because I added a pagest.ts file to the pages folder with 'export * from './my-teams/my-teams.page' etc...;
//I don't need to include each directory for the imports, I can just include the page directory.

import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, StandingsPage, TeamHomePage  } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;



  constructor(public platform: Platform) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
