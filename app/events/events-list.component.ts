import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import {IEvent} from './shared/index'

@Component({
    moduleId: module.id,
    templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private toastr: ToastrService,
        private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.eventService.getEvents().subscribe(events => this.events = events);
    }
    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName, "Title");
    }
}

interface Event {
    id: number,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl?: string,
    location?: Address,
    sessions?: any,
    onlineUrl?: string
}

interface Address {
    address: string,
    city: string,
    country: string
}