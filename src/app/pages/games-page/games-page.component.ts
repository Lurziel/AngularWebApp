import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { BlackjackComponent } from '../../components/games/blackjack/blackjack.component';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [PageTitleComponent, BlackjackComponent],
  templateUrl: './games-page.component.html',
})
export class GamesPageComponent {
  pageTitle = "Jeux"


}
