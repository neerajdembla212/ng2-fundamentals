import { Routes } from '@angular/router'
import {
EventsListComponent,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator
} from './events/index';
import { Error404Component } from './errors/error.component'

export const appRoutes: Routes = [
    {
        path: 'events',
        component: EventsListComponent,
    },
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: 'app/user module/user.module#UserModule'
    }
]