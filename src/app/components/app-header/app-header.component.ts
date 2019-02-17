import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
    styleUrls: [ 'app-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/logo.svg">   
                <div *ngIf="user?.authenticated" class="app-header__user-info">
                    <span (click)="logoutUser()"></span>
                </div>
            </div>
        </div>
    `
})
export class AppHeaderComponent {

    @Input()
    user: User;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }

}