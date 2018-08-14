import { Injectable, Component, Input, NgModule, Directive, ElementRef, HostListener, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxAutoTextareaService = /** @class */ (function () {
    function NgxAutoTextareaService() {
    }
    NgxAutoTextareaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ NgxAutoTextareaService.ngInjectableDef = defineInjectable({ factory: function NgxAutoTextareaService_Factory() { return new NgxAutoTextareaService(); }, token: NgxAutoTextareaService, providedIn: "root" });
    return NgxAutoTextareaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TypeService = /** @class */ (function () {
    function TypeService() {
    }
    /**
     * 获取中英文混合字符串定义长度
     * @param {?} text
     * @return {?}
     */
    TypeService.prototype.getStringLocaleLen = /**
     * 获取中英文混合字符串定义长度
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return 0;
        }
        /** @type {?} */
        var cnCharLen = 3;
        /** @type {?} */
        var textLen = 0;
        /** @type {?} */
        var regExpEn = /[a-z|A-Z|0-9]|[`|!|@|#|$|%|^|&|*|(|)|\-|_|+|{|}|<|>|?|,|.|/|[|'|;|:|"|\\]/gi;
        /** @type {?} */
        var regExpSpace = /\s/g;
        for (var i = 0; i < text.length; i++) {
            regExpEn.lastIndex = 0;
            if (regExpEn.test(text[i]) || regExpSpace.test(text[i])) {
                textLen += 1;
            }
            else {
                textLen += cnCharLen;
            }
        }
        return textLen;
    };
    /**
     * 按照中英文混合长度截取字符串
     */
    /**
     * 按照中英文混合长度截取字符串
     * @param {?} text
     * @param {?} start
     * @param {?} maxLen
     * @return {?}
     */
    TypeService.prototype.localeSubString = /**
     * 按照中英文混合长度截取字符串
     * @param {?} text
     * @param {?} start
     * @param {?} maxLen
     * @return {?}
     */
    function (text, start, maxLen) {
        if (!text) {
            return '';
        }
        if (start > text.length) {
            return '';
        }
        /** @type {?} */
        var cnCharLen = 3;
        /** @type {?} */
        var textLen = 0;
        /** @type {?} */
        var returnStr = '';
        /** @type {?} */
        var regExpEn = /[a-z|A-Z|0-9]|[`|!|@|#|$|%|^|&|*|(|)|\-|_|+|{|}|<|>|?|,|.|/|[|'|;|:|"|\\]/gi;
        /** @type {?} */
        var regExpSpace = /\s/g;
        for (var i = start; i < text.length; i++) {
            regExpEn.lastIndex = 0;
            if (regExpEn.test(text[i]) || regExpSpace.test(text[i])) {
                textLen += 1;
            }
            else {
                textLen += cnCharLen;
            }
            if (textLen > maxLen) {
                break;
            }
            else {
                returnStr += text[i];
            }
        }
        return returnStr;
    };
    TypeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TypeService.ctorParameters = function () { return []; };
    /** @nocollapse */ TypeService.ngInjectableDef = defineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
    return TypeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxAutoTextareaComponent = /** @class */ (function () {
    function NgxAutoTextareaComponent() {
        this.maxLength = 500;
    }
    /**
     * @return {?}
     */
    NgxAutoTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxAutoTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ngx-auto-textarea',
                    template: "\n    <textarea class=\"ipt-btn\" type=\"text\" #ipt\n              libNgxAutoTextarea [appMaxLength]=\"maxLength\"\n    > </textarea>\n  ",
                    styles: [".ipt-btn{width:100%;height:10px;border:1px solid #4080cf;border-radius:5px;padding:5px 10px;line-height:20px;background-color:#fff;box-sizing:border-box}"]
                },] },
    ];
    /** @nocollapse */
    NgxAutoTextareaComponent.ctorParameters = function () { return []; };
    NgxAutoTextareaComponent.propDecorators = {
        maxLength: [{ type: Input }]
    };
    return NgxAutoTextareaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxAutoTextareaModule = /** @class */ (function () {
    function NgxAutoTextareaModule() {
    }
    NgxAutoTextareaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [NgxAutoTextareaComponent, NgxAutoTextareaDirective],
                    exports: [NgxAutoTextareaComponent, NgxAutoTextareaDirective]
                },] },
    ];
    return NgxAutoTextareaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxAutoTextareaService, TypeService, NgxAutoTextareaComponent, NgxAutoTextareaModule, NgxAutoTextareaDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dG8tdGV4dGFyZWEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1hdXRvLXRleHRhcmVhL2xpYi9uZ3gtYXV0by10ZXh0YXJlYS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvdHlwZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3RhYmxlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1R5cGVTZXJ2aWNlfSBmcm9tICcuL3R5cGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEF1dG9UZXh0YXJlYVNlcnZpY2Uge1xuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeXBlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG5cblxuXG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOkwrjCrcOowovCscOmwpbCh8OmwrfCt8OlwpDCiMOlwq3Cl8OnwqzCpsOkwrjCssOlwq7CmsOkwrnCicOpwpXCv8OlwrrCplxuICAgKi9cbiAgcHVibGljIGdldFN0cmluZ0xvY2FsZUxlbih0ZXh0OiBhbnkpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBjbkNoYXJMZW4gPSAzO1xuICAgIGxldCB0ZXh0TGVuOiBudW1iZXIgPSAwO1xuICAgIC8vIMOowovCscOmwpbCh1xuICAgIGNvbnN0IHJlZ0V4cEVuID0gL1thLXp8QS1afDAtOV18W2B8IXxAfCN8JHwlfF58JnwqfCh8KXxcXC18X3wrfHt8fXw8fD58P3wsfC58L3xbfCd8O3w6fFwifFxcXFxdL2dpO1xuICAgIC8vIMOmwo3CosOowqHCjFxuICAgIGNvbnN0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWdFeHBFbi5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKHJlZ0V4cEVuLnRlc3QodGV4dFtpXSkgfHwgcmVnRXhwU3BhY2UudGVzdCh0ZXh0W2ldKSkge1xuICAgICAgICB0ZXh0TGVuICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGVuICs9IGNuQ2hhckxlbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHRMZW47XG4gIH1cblxuICAvKipcbiAgICogw6bCjMKJw6fChcKnw6TCuMKtw6jCi8Kxw6bClsKHw6bCt8K3w6XCkMKIw6nClcK/w6XCusKmw6bCiMKqw6XCj8KWw6XCrcKXw6fCrMKmw6TCuMKyXG4gICAqL1xuICBsb2NhbGVTdWJTdHJpbmcodGV4dDogYW55LCBzdGFydDogbnVtYmVyLCBtYXhMZW46IG51bWJlcikge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgPiB0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgY25DaGFyTGVuID0gMztcbiAgICBsZXQgdGV4dExlbjogbnVtYmVyID0gMDtcbiAgICBsZXQgcmV0dXJuU3RyOiBzdHJpbmcgPSAnJztcbiAgICAvLyDDqMKLwrHDpsKWwodcbiAgICBsZXQgcmVnRXhwRW4gPSAvW2EtenxBLVp8MC05XXxbYHwhfEB8I3wkfCV8XnwmfCp8KHwpfFxcLXxffCt8e3x9fDx8Pnw/fCx8LnwvfFt8J3w7fDp8XCJ8XFxcXF0vZ2k7XG4gICAgLy8gw6bCjcKiw6jCocKMXG4gICAgbGV0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVnRXhwRW4ubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChyZWdFeHBFbi50ZXN0KHRleHRbaV0pIHx8IHJlZ0V4cFNwYWNlLnRlc3QodGV4dFtpXSkpIHtcbiAgICAgICAgdGV4dExlbiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dExlbiArPSBjbkNoYXJMZW47XG4gICAgICB9XG4gICAgICBpZiAodGV4dExlbiA+IG1heExlbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblN0ciArPSB0ZXh0W2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuU3RyO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWF1dG8tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlwdC1idG5cIiB0eXBlPVwidGV4dFwiICNpcHRcbiAgICAgICAgICAgICAgbGliTmd4QXV0b1RleHRhcmVhIFthcHBNYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICA+IDwvdGV4dGFyZWE+XG4gIGAsXG4gIHN0eWxlczogW2AuaXB0LWJ0bnt3aWR0aDoxMDAlO2hlaWdodDoxMHB4O2JvcmRlcjoxcHggc29saWQgIzQwODBjZjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjVweCAxMHB4O2xpbmUtaGVpZ2h0OjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaXppbmc6Ym9yZGVyLWJveH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDUwMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZVNlcnZpY2UgfSBmcm9tICcuL3R5cGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsaWJOZ3hBdXRvVGV4dGFyZWFdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRvVGV4dGFyZWFEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGFwcE1heExlbmd0aDogbnVtYmVyO1xuICAvLyBwdWJsaWMgYmFzZVJlbTogbnVtYmVyID0gMzcuNTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgdHlwZVNlcnZpY2U6IFR5cGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldCddKVxuICBibHVyKHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ8OnwpvCkcOlwpDCrMOlwqTCscOlwo7Cu8OnwoTCpsOnwoLCuScpO1xuICAgIHRoaXMuYWRqdXN0SGVpZ2h0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBmb2N1cyh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCfDp8KbwpHDpcKQwqzDp8KEwqbDp8KCwrknKTtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgcHVibGljIGFkanVzdEhlaWdodChtaW5IZWlnaHQ/OiBudW1iZXIpIHtcbiAgICBpZiAoIW1pbkhlaWdodCkge1xuICAgICAgbWluSGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIC8vIMOpwpjCssOmwq3CosOlwq3Cl8OmwpXCsMOowrbChcOlwofCusOpwpXCv8OlwrrCplxuICAgIGlmICh0aGlzLmFwcE1heExlbmd0aCkge1xuICAgICAgbGV0IGNvdW50TGVuID0gdGhpcy50eXBlU2VydmljZS5nZXRTdHJpbmdMb2NhbGVMZW4oZWwudmFsdWUpO1xuICAgICAgaWYgKGNvdW50TGVuID4gdGhpcy5hcHBNYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnR5cGVTZXJ2aWNlLmxvY2FsZVN1YlN0cmluZyhlbC52YWx1ZSwgMCwgdGhpcy5hcHBNYXhMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21wdXRlIHRoZSBoZWlnaHQgZGlmZmVyZW5jZSB3aGljaCBpcyBjYXVzZWQgYnkgYm9yZGVyIGFuZCBvdXRsaW5lXG4gICAgLy8gbGV0IG91dGVySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmhlaWdodCwgMTApO1xuICAgIGxldCBkaWZmID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICAgIC8vIHNldCB0aGUgaGVpZ2h0IHRvIDAgaW4gY2FzZSBvZiBpdCBoYXMgdG8gYmUgc2hyaW5rZWRcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgIC8vIHNldCB0aGUgY29ycmVjdCBoZWlnaHRcbiAgICAvLyBlbC5zY3JvbGxIZWlnaHQgaXMgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LCBub3QganVzdCB0aGUgdmlzaWJsZSBwYXJ0XG4gICAgLy8gZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKSAvIHRoaXMuYmFzZVJlbSArICdyZW0nO1xuICAgIGNvbnNvbGUubG9nKCdzZGFzZCcsIGVsLnNjcm9sbEhlaWdodCArIGRpZmYpXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKSArICdweCc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEF1dG9UZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWF1dG8tdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQsIE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQsIE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0b1RleHRhcmVhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O2dCQUdDLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7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