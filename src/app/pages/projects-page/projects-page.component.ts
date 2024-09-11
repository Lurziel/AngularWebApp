import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { LinkButtonComponent } from '../../components/util/link-button/link-button.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [PageTitleComponent, LinkButtonComponent],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {

}
