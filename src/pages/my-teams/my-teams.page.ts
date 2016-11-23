import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentPage } from '../tournaments/tournaments.page';
@Component({
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

    constructor(private nav: NavController) { }

    goToTournaments() {
        this.nav.push(TournamentPage);
    }
}