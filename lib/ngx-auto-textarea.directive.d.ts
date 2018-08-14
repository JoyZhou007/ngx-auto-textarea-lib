import { ElementRef } from '@angular/core';
import { TypeService } from './type.service';
export declare class NgxAutoTextareaDirective {
    element: ElementRef;
    typeService: TypeService;
    appMaxLength: number;
    constructor(element: ElementRef, typeService: TypeService);
    onInput(textArea: HTMLTextAreaElement): void;
    blur(textArea: HTMLTextAreaElement): void;
    focus(textArea: HTMLTextAreaElement): void;
    adjustHeight(minHeight?: number): void;
}
