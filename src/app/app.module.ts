import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage } from '../pages/game/game';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentPage } from '../pages/tournaments/tournaments';

@NgModule({
  declarations: [
      MyApp,
      GamePage,
      MyTeamsPage,
      TeamDetailPage,
      TeamsPage,
      TournamentPage
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
    TournamentPage
  ],
  providers: []
})
export class AppModule {}
