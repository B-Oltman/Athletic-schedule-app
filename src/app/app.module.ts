import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
/*import { GamePage } from '../pages/game/game.page';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';
import { StandingsPage } from '../pages/standings/standings.page';
import { TeamHomePage } from '../pages/team-home/team-home.page';*/

//Because I added a pagest.ts file to the pages folder with 'export * from './my-teams/my-teams.page';
//I don't need to include each directory for the imports, I can just include the page directory.

import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, StandingsPage, TeamHomePage  } from '../pages/pages';

@NgModule({
  declarations: [
      MyApp,
      GamePage,
      MyTeamsPage,
      TeamDetailPage,
      TeamsPage,
      TournamentsPage,
      StandingsPage,
      TeamHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: []
})
export class AppModule {}
