/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TypeService } from './type.service';
var NgxAutoTextareaDirective = /** @class */ (function () {
    // public baseRem: number = 37.5;
    function NgxAutoTextareaDirective(element, typeService) {
        this.element = element;
        this.typeService = typeService;
        this.adjustHeight();
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    NgxAutoTextareaDirective.prototype.onInput = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        this.adjustHeight();
    };
    /**
     * @param {?} textArea
     * @return {?}
     */
    NgxAutoTextareaDirective.prototype.blur = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        console.log('监听失去焦点');
        this.adjustHeight();
    };
    /**
     * @param {?} textArea
     * @return {?}
     */
    NgxAutoTextareaDirective.prototype.focus = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        console.log('监听焦点');
        this.adjustHeight();
    };
    /**
     * @param {?=} minHeight
     * @return {?}
     */
    NgxAutoTextareaDirective.prototype.adjustHeight = /**
     * @param {?=} minHeight
     * @return {?}
     */
    function (minHeight) {
        if (!minHeight) {
            minHeight = 10;
        }
        /** @type {?} */
        var el = this.element.nativeElement;
        // 防止字数超出长度
        if (this.appMaxLength) {
            /** @type {?} */
            var countLen = this.typeService.getStringLocaleLen(el.value);
            if (countLen > this.appMaxLength) {
                this.element.nativeElement.value = this.typeService.localeSubString(el.value, 0, this.appMaxLength);
            }
        }
        /** @type {?} */
        var diff = el.offsetHeight - el.clientHeight;
        // set the height to 0 in case of it has to be shrinked
        el.style.height = 0;
        // set the correct height
        // el.scrollHeight is the full height of the content, not just the visible part
        // el.style.height = Math.max(minHeight, el.scrollHeight + diff) / this.baseRem + 'rem';
        console.log('sdasd', el.scrollHeight + diff);
        el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
    };
    NgxAutoTextareaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libNgxAutoTextarea]'
                },] },
    ];
    /** @nocollapse */
    NgxAutoTextareaDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TypeService }
    ]; };
    NgxAutoTextareaDirective.propDecorators = {
        appMaxLength: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['input', ['$event.target'],] }],
        blur: [{ type: HostListener, args: ['blur', ['$event.target'],] }],
        focus: [{ type: HostListener, args: ['focus', ['$event.target'],] }]
    };
    return NgxAutoTextareaDirective;
}());
export { NgxAutoTextareaDirective };
if (false) {
    /** @type {?} */
    NgxAutoTextareaDirective.prototype.appMaxLength;
    /** @type {?} */
    NgxAutoTextareaDirective.prototype.element;
    /** @type {?} */
    NgxAutoTextareaDirective.prototype.typeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvIiwic291cmNlcyI6WyJsaWIvbmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFRM0MsaUNBQWlDO0lBRWpDLGtDQUFtQixPQUFtQixFQUM3QjtRQURVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFHRCwwQ0FBTzs7OztJQURQLFVBQ1EsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUdELHVDQUFJOzs7O0lBREosVUFDSyxRQUE2QjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFHRCx3Q0FBSzs7OztJQURMLFVBQ00sUUFBNkI7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRU0sK0NBQVk7Ozs7Y0FBQyxTQUFrQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZixTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ2hCOztRQUNELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDOztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7WUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3JHO1NBQ0Y7O1FBR0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDOztRQUU3QyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7UUFJcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzs7O2dCQW5EeEUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQUxtQixVQUFVO2dCQUNyQixXQUFXOzs7K0JBT2pCLEtBQUs7MEJBUUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzt1QkFLdkMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFNdEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7bUNBM0IxQzs7U0FNYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFR5cGVTZXJ2aWNlIH0gZnJvbSAnLi90eXBlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliTmd4QXV0b1RleHRhcmVhXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0b1RleHRhcmVhRGlyZWN0aXZlIHtcblxuICBASW5wdXQoKSBhcHBNYXhMZW5ndGg6IG51bWJlcjtcbiAgLy8gcHVibGljIGJhc2VSZW06IG51bWJlciA9IDM3LjU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHR5cGVTZXJ2aWNlOiBUeXBlU2VydmljZSkge1xuICAgIHRoaXMuYWRqdXN0SGVpZ2h0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbklucHV0KHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQnXSlcbiAgYmx1cih0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCfnm5HlkKzlpLHljrvnhKbngrknKTtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgZm9jdXModGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygn55uR5ZCs54Sm54K5Jyk7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGp1c3RIZWlnaHQobWluSGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKCFtaW5IZWlnaHQpIHtcbiAgICAgIG1pbkhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBsZXQgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyDpmLLmraLlrZfmlbDotoXlh7rplb/luqZcbiAgICBpZiAodGhpcy5hcHBNYXhMZW5ndGgpIHtcbiAgICAgIGxldCBjb3VudExlbiA9IHRoaXMudHlwZVNlcnZpY2UuZ2V0U3RyaW5nTG9jYWxlTGVuKGVsLnZhbHVlKTtcbiAgICAgIGlmIChjb3VudExlbiA+IHRoaXMuYXBwTWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy50eXBlU2VydmljZS5sb2NhbGVTdWJTdHJpbmcoZWwudmFsdWUsIDAsIHRoaXMuYXBwTWF4TGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29tcHV0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2Ugd2hpY2ggaXMgY2F1c2VkIGJ5IGJvcmRlciBhbmQgb3V0bGluZVxuICAgIC8vIGxldCBvdXRlckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5oZWlnaHQsIDEwKTtcbiAgICBsZXQgZGlmZiA9IGVsLm9mZnNldEhlaWdodCAtIGVsLmNsaWVudEhlaWdodDtcbiAgICAvLyBzZXQgdGhlIGhlaWdodCB0byAwIGluIGNhc2Ugb2YgaXQgaGFzIHRvIGJlIHNocmlua2VkXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAvLyBzZXQgdGhlIGNvcnJlY3QgaGVpZ2h0XG4gICAgLy8gZWwuc2Nyb2xsSGVpZ2h0IGlzIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgY29udGVudCwgbm90IGp1c3QgdGhlIHZpc2libGUgcGFydFxuICAgIC8vIGVsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgZWwuc2Nyb2xsSGVpZ2h0ICsgZGlmZikgLyB0aGlzLmJhc2VSZW0gKyAncmVtJztcbiAgICBjb25zb2xlLmxvZygnc2Rhc2QnLCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKVxuICAgIGVsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgZWwuc2Nyb2xsSGVpZ2h0ICsgZGlmZikgKyAncHgnO1xuICB9XG5cbn1cbiJdfQ==