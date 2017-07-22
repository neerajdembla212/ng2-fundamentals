import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index'
@Component({
    selector: 'event-thumbnail',
    moduleId: module.id,
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
        .thumbnail {
            min-height : 210px;
        }
        .green {
            color : #003300;
        }
        .bold{
            font-weight : bold;
        }
    `]
})
export class EventThumbnailComponent {
    // input decorator tells this component that event object will be passed in from another component.
    @Input() event: IEvent;
    logFoo() {
        console.log("foo");
    }
    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }
        return [];
    }
}