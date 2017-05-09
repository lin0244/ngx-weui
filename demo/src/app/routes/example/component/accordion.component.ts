import { Component, Input, Output, ViewEncapsulation, EventEmitter, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'Accordion',
    template: `
        <div [ngClass]="{'js_show': isShow}">
            <div (click)="onChangeStatus()"><ng-content select="[header]"></ng-content></div>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./accordion.component.scss'],
    host: {
        '[class.accordion]': 'true'
    },
    encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

    @Input() isShow: boolean;
    @Output() isShowChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChangeStatus() {
        this.isShow = !this.isShow;
        this.isShowChange.emit(this.isShow);
    }
}