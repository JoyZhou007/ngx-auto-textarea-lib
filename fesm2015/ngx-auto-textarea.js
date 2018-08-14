import { Injectable, Component, Input, NgModule, Directive, ElementRef, HostListener, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxAutoTextareaService {
}
NgxAutoTextareaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NgxAutoTextareaService.ngInjectableDef = defineInjectable({ factory: function NgxAutoTextareaService_Factory() { return new NgxAutoTextareaService(); }, token: NgxAutoTextareaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TypeService {
    constructor() { }
    /**
     * 获取中英文混合字符串定义长度
     * @param {?} text
     * @return {?}
     */
    getStringLocaleLen(text) {
        if (!text) {
            return 0;
        }
        /** @type {?} */
        const cnCharLen = 3;
        /** @type {?} */
        let textLen = 0;
        /** @type {?} */
        const regExpEn = /[a-z|A-Z|0-9]|[`|!|@|#|$|%|^|&|*|(|)|\-|_|+|{|}|<|>|?|,|.|/|[|'|;|:|"|\\]/gi;
        /** @type {?} */
        const regExpSpace = /\s/g;
        for (let i = 0; i < text.length; i++) {
            regExpEn.lastIndex = 0;
            if (regExpEn.test(text[i]) || regExpSpace.test(text[i])) {
                textLen += 1;
            }
            else {
                textLen += cnCharLen;
            }
        }
        return textLen;
    }
    /**
     * 按照中英文混合长度截取字符串
     * @param {?} text
     * @param {?} start
     * @param {?} maxLen
     * @return {?}
     */
    localeSubString(text, start, maxLen) {
        if (!text) {
            return '';
        }
        if (start > text.length) {
            return '';
        }
        /** @type {?} */
        let cnCharLen = 3;
        /** @type {?} */
        let textLen = 0;
        /** @type {?} */
        let returnStr = '';
        /** @type {?} */
        let regExpEn = /[a-z|A-Z|0-9]|[`|!|@|#|$|%|^|&|*|(|)|\-|_|+|{|}|<|>|?|,|.|/|[|'|;|:|"|\\]/gi;
        /** @type {?} */
        let regExpSpace = /\s/g;
        for (let i = start; i < text.length; i++) {
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
    }
}
TypeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TypeService.ctorParameters = () => [];
/** @nocollapse */ TypeService.ngInjectableDef = defineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxAutoTextareaComponent {
    constructor() {
        this.maxLength = 500;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxAutoTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-auto-textarea',
                template: `
    <textarea class="ipt-btn" type="text" #ipt
              libNgxAutoTextarea [appMaxLength]="maxLength"
    > </textarea>
  `,
                styles: [`.ipt-btn{width:100%;height:10px;border:1px solid #4080cf;border-radius:5px;padding:5px 10px;line-height:20px;background-color:#fff;box-sizing:border-box}`]
            },] },
];
/** @nocollapse */
NgxAutoTextareaComponent.ctorParameters = () => [];
NgxAutoTextareaComponent.propDecorators = {
    maxLength: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxAutoTextareaDirective {
    /**
     * @param {?} element
     * @param {?} typeService
     */
    constructor(element, typeService) {
        this.element = element;
        this.typeService = typeService;
        this.adjustHeight();
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput(textArea) {
        this.adjustHeight();
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    blur(textArea) {
        console.log('监听失去焦点');
        this.adjustHeight();
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    focus(textArea) {
        console.log('监听焦点');
        this.adjustHeight();
    }
    /**
     * @param {?=} minHeight
     * @return {?}
     */
    adjustHeight(minHeight) {
        if (!minHeight) {
            minHeight = 10;
        }
        /** @type {?} */
        let el = this.element.nativeElement;
        // 防止字数超出长度
        if (this.appMaxLength) {
            /** @type {?} */
            let countLen = this.typeService.getStringLocaleLen(el.value);
            if (countLen > this.appMaxLength) {
                this.element.nativeElement.value = this.typeService.localeSubString(el.value, 0, this.appMaxLength);
            }
        }
        /** @type {?} */
        let diff = el.offsetHeight - el.clientHeight;
        // set the height to 0 in case of it has to be shrinked
        el.style.height = 0;
        // set the correct height
        // el.scrollHeight is the full height of the content, not just the visible part
        // el.style.height = Math.max(minHeight, el.scrollHeight + diff) / this.baseRem + 'rem';
        console.log('sdasd', el.scrollHeight + diff);
        el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
    }
}
NgxAutoTextareaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libNgxAutoTextarea]'
            },] },
];
/** @nocollapse */
NgxAutoTextareaDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TypeService }
];
NgxAutoTextareaDirective.propDecorators = {
    appMaxLength: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event.target'],] }],
    blur: [{ type: HostListener, args: ['blur', ['$event.target'],] }],
    focus: [{ type: HostListener, args: ['focus', ['$event.target'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxAutoTextareaModule {
}
NgxAutoTextareaModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [NgxAutoTextareaComponent, NgxAutoTextareaDirective],
                exports: [NgxAutoTextareaComponent, NgxAutoTextareaDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxAutoTextareaService, TypeService, NgxAutoTextareaComponent, NgxAutoTextareaModule, NgxAutoTextareaDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dG8tdGV4dGFyZWEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1hdXRvLXRleHRhcmVhL2xpYi9uZ3gtYXV0by10ZXh0YXJlYS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvdHlwZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3RhYmxlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1R5cGVTZXJ2aWNlfSBmcm9tICcuL3R5cGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEF1dG9UZXh0YXJlYVNlcnZpY2Uge1xuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeXBlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG5cblxuXG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOkwrjCrcOowovCscOmwpbCh8OmwrfCt8OlwpDCiMOlwq3Cl8OnwqzCpsOkwrjCssOlwq7CmsOkwrnCicOpwpXCv8OlwrrCplxuICAgKi9cbiAgcHVibGljIGdldFN0cmluZ0xvY2FsZUxlbih0ZXh0OiBhbnkpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBjbkNoYXJMZW4gPSAzO1xuICAgIGxldCB0ZXh0TGVuOiBudW1iZXIgPSAwO1xuICAgIC8vIMOowovCscOmwpbCh1xuICAgIGNvbnN0IHJlZ0V4cEVuID0gL1thLXp8QS1afDAtOV18W2B8IXxAfCN8JHwlfF58JnwqfCh8KXxcXC18X3wrfHt8fXw8fD58P3wsfC58L3xbfCd8O3w6fFwifFxcXFxdL2dpO1xuICAgIC8vIMOmwo3CosOowqHCjFxuICAgIGNvbnN0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWdFeHBFbi5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKHJlZ0V4cEVuLnRlc3QodGV4dFtpXSkgfHwgcmVnRXhwU3BhY2UudGVzdCh0ZXh0W2ldKSkge1xuICAgICAgICB0ZXh0TGVuICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGVuICs9IGNuQ2hhckxlbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHRMZW47XG4gIH1cblxuICAvKipcbiAgICogw6bCjMKJw6fChcKnw6TCuMKtw6jCi8Kxw6bClsKHw6bCt8K3w6XCkMKIw6nClcK/w6XCusKmw6bCiMKqw6XCj8KWw6XCrcKXw6fCrMKmw6TCuMKyXG4gICAqL1xuICBsb2NhbGVTdWJTdHJpbmcodGV4dDogYW55LCBzdGFydDogbnVtYmVyLCBtYXhMZW46IG51bWJlcikge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgPiB0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgY25DaGFyTGVuID0gMztcbiAgICBsZXQgdGV4dExlbjogbnVtYmVyID0gMDtcbiAgICBsZXQgcmV0dXJuU3RyOiBzdHJpbmcgPSAnJztcbiAgICAvLyDDqMKLwrHDpsKWwodcbiAgICBsZXQgcmVnRXhwRW4gPSAvW2EtenxBLVp8MC05XXxbYHwhfEB8I3wkfCV8XnwmfCp8KHwpfFxcLXxffCt8e3x9fDx8Pnw/fCx8LnwvfFt8J3w7fDp8XCJ8XFxcXF0vZ2k7XG4gICAgLy8gw6bCjcKiw6jCocKMXG4gICAgbGV0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVnRXhwRW4ubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChyZWdFeHBFbi50ZXN0KHRleHRbaV0pIHx8IHJlZ0V4cFNwYWNlLnRlc3QodGV4dFtpXSkpIHtcbiAgICAgICAgdGV4dExlbiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dExlbiArPSBjbkNoYXJMZW47XG4gICAgICB9XG4gICAgICBpZiAodGV4dExlbiA+IG1heExlbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblN0ciArPSB0ZXh0W2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuU3RyO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWF1dG8tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlwdC1idG5cIiB0eXBlPVwidGV4dFwiICNpcHRcbiAgICAgICAgICAgICAgbGliTmd4QXV0b1RleHRhcmVhIFthcHBNYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICA+IDwvdGV4dGFyZWE+XG4gIGAsXG4gIHN0eWxlczogW2AuaXB0LWJ0bnt3aWR0aDoxMDAlO2hlaWdodDoxMHB4O2JvcmRlcjoxcHggc29saWQgIzQwODBjZjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjVweCAxMHB4O2xpbmUtaGVpZ2h0OjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaXppbmc6Ym9yZGVyLWJveH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDUwMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZVNlcnZpY2UgfSBmcm9tICcuL3R5cGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsaWJOZ3hBdXRvVGV4dGFyZWFdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRvVGV4dGFyZWFEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGFwcE1heExlbmd0aDogbnVtYmVyO1xuICAvLyBwdWJsaWMgYmFzZVJlbTogbnVtYmVyID0gMzcuNTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgdHlwZVNlcnZpY2U6IFR5cGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldCddKVxuICBibHVyKHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ8OnwpvCkcOlwpDCrMOlwqTCscOlwo7Cu8OnwoTCpsOnwoLCuScpO1xuICAgIHRoaXMuYWRqdXN0SGVpZ2h0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBmb2N1cyh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCfDp8KbwpHDpcKQwqzDp8KEwqbDp8KCwrknKTtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgcHVibGljIGFkanVzdEhlaWdodChtaW5IZWlnaHQ/OiBudW1iZXIpIHtcbiAgICBpZiAoIW1pbkhlaWdodCkge1xuICAgICAgbWluSGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIC8vIMOpwpjCssOmwq3CosOlwq3Cl8OmwpXCsMOowrbChcOlwofCusOpwpXCv8OlwrrCplxuICAgIGlmICh0aGlzLmFwcE1heExlbmd0aCkge1xuICAgICAgbGV0IGNvdW50TGVuID0gdGhpcy50eXBlU2VydmljZS5nZXRTdHJpbmdMb2NhbGVMZW4oZWwudmFsdWUpO1xuICAgICAgaWYgKGNvdW50TGVuID4gdGhpcy5hcHBNYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnR5cGVTZXJ2aWNlLmxvY2FsZVN1YlN0cmluZyhlbC52YWx1ZSwgMCwgdGhpcy5hcHBNYXhMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21wdXRlIHRoZSBoZWlnaHQgZGlmZmVyZW5jZSB3aGljaCBpcyBjYXVzZWQgYnkgYm9yZGVyIGFuZCBvdXRsaW5lXG4gICAgLy8gbGV0IG91dGVySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmhlaWdodCwgMTApO1xuICAgIGxldCBkaWZmID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICAgIC8vIHNldCB0aGUgaGVpZ2h0IHRvIDAgaW4gY2FzZSBvZiBpdCBoYXMgdG8gYmUgc2hyaW5rZWRcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgIC8vIHNldCB0aGUgY29ycmVjdCBoZWlnaHRcbiAgICAvLyBlbC5zY3JvbGxIZWlnaHQgaXMgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LCBub3QganVzdCB0aGUgdmlzaWJsZSBwYXJ0XG4gICAgLy8gZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKSAvIHRoaXMuYmFzZVJlbSArICdyZW0nO1xuICAgIGNvbnNvbGUubG9nKCdzZGFzZCcsIGVsLnNjcm9sbEhlaWdodCArIGRpZmYpXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKSArICdweCc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEF1dG9UZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWF1dG8tdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWF1dG8tdGV4dGFyZWEuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQsIE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQsIE5neEF1dG9UZXh0YXJlYURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0b1RleHRhcmVhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7WUFHQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7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