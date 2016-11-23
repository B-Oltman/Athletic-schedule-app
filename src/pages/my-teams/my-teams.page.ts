import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// This is the wrong way to import -> import { TournamentsPage } from '../pages';

import { TournamentsPage } from '../tournaments/tournaments.page';

@Component({
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

    constructor(private nav: NavController) { }

    goToTournaments() {
        this.nav.push(TournamentsPage);
    }
}