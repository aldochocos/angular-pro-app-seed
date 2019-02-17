import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    styleUrls: [ 'app-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-nav',
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="schedule" routerLinkActive="active">Schedule</a>
                <a routerLink="meals" routerLinkActive="active">Meals</a>
                <a routerLink="workouts" routerLinkActive="active">Workouts</a>
            </div>
        </div>
    `
})
export class AppNavComponent {
    
}