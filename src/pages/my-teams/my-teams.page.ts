﻿import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentPage } from '../pages';
@Component({
    templateUrl: 'pages/my-teams/my-teams.page.html'
})
export class MyTeamsPage {

    constructor(private nav: NavController) { }

    goToTournaments() {
        this.nav.push(TournamentsPage);
    }
}