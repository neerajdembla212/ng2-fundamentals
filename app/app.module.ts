import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator
} from './events/index';

import { EventsAppComponent } from './events.app.component';
import { NavComponent } from './nav/nav.component'
import { Error404Component } from './errors/error.component'

import { ToastrService } from './common/toastr.service'

import { appRoutes } from './routes'
import { RouterModule } from '@angular/router'
import { AuthService } from './user module/auth.service'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    bootstrap: [EventsAppComponent],
    providers: [EventService,
        ToastrService,
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        AuthService
    ]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    console.log("dirty state called")
    if (component.isDirty) {
        return window.confirm("You haven't saved this event, do you really want to cancel ?");
    }
    return true;
}