import { Component } from '@angular/core';
import { AuthService } from '../user module      msnkasnds   /auth.service'
@Component({
    moduleId: module.id,
    selector: "nav-bar",
    templateUrl: "./nav.component.html",
    styles: [`
            .nav.navbar-nav{
                font-size: 15px
            }
            li > a.active {
                color: #F97924;    
            }
        `]
})
export class NavComponent {
    constructor(private _authService: AuthService) {

    }
    
}