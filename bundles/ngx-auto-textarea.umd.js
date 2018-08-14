(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-auto-textarea', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-auto-textarea'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAutoTextareaService = (function () {
        function NgxAutoTextareaService() {
        }
        NgxAutoTextareaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ NgxAutoTextareaService.ngInjectableDef = i0.defineInjectable({ factory: function NgxAutoTextareaService_Factory() { return new NgxAutoTextareaService(); }, token: NgxAutoTextareaService, providedIn: "root" });
        return NgxAutoTextareaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TypeService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TypeService.ctorParameters = function () { return []; };
        /** @nocollapse */ TypeService.ngInjectableDef = i0.defineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
        return TypeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAutoTextareaComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'lib-ngx-auto-textarea',
                        template: "\n    <textarea class=\"ipt-btn\" type=\"text\" #ipt\n              libNgxAutoTextarea [appMaxLength]=\"maxLength\"\n    > </textarea>\n  ",
                        styles: [".ipt-btn{width:100%;height:10px;border:1px solid #4080cf;border-radius:5px;padding:5px 10px;line-height:20px;background-color:#fff;box-sizing:border-box}"]
                    },] },
        ];
        /** @nocollapse */
        NgxAutoTextareaComponent.ctorParameters = function () { return []; };
        NgxAutoTextareaComponent.propDecorators = {
            maxLength: [{ type: i0.Input }]
        };
        return NgxAutoTextareaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAutoTextareaDirective = (function () {
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
            { type: i0.Directive, args: [{
                        selector: '[libNgxAutoTextarea]'
                    },] },
        ];
        /** @nocollapse */
        NgxAutoTextareaDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: TypeService }
            ];
        };
        NgxAutoTextareaDirective.propDecorators = {
            appMaxLength: [{ type: i0.Input }],
            onInput: [{ type: i0.HostListener, args: ['input', ['$event.target'],] }],
            blur: [{ type: i0.HostListener, args: ['blur', ['$event.target'],] }],
            focus: [{ type: i0.HostListener, args: ['focus', ['$event.target'],] }]
        };
        return NgxAutoTextareaDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAutoTextareaModule = (function () {
        function NgxAutoTextareaModule() {
        }
        NgxAutoTextareaModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.NgxAutoTextareaService = NgxAutoTextareaService;
    exports.TypeService = TypeService;
    exports.NgxAutoTextareaComponent = NgxAutoTextareaComponent;
    exports.NgxAutoTextareaModule = NgxAutoTextareaModule;
    exports.NgxAutoTextareaDirective = NgxAutoTextareaDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dG8tdGV4dGFyZWEudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYXV0by10ZXh0YXJlYS9saWIvbmd4LWF1dG8tdGV4dGFyZWEuc2VydmljZS50cyIsIm5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvbGliL3R5cGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvbGliL25neC1hdXRvLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvbGliL25neC1hdXRvLXRleHRhcmVhLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvbGliL25neC1hdXRvLXRleHRhcmVhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0YWJsZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUeXBlU2VydmljZX0gZnJvbSAnLi90eXBlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRvVGV4dGFyZWFTZXJ2aWNlIHtcblxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHlwZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuXG5cblxuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDpMK4wq3DqMKLwrHDpsKWwofDpsK3wrfDpcKQwojDpcKtwpfDp8KswqbDpMK4wrLDpcKuwprDpMK5wonDqcKVwr/DpcK6wqZcbiAgICovXG4gIHB1YmxpYyBnZXRTdHJpbmdMb2NhbGVMZW4odGV4dDogYW55KSB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgY25DaGFyTGVuID0gMztcbiAgICBsZXQgdGV4dExlbjogbnVtYmVyID0gMDtcbiAgICAvLyDDqMKLwrHDpsKWwodcbiAgICBjb25zdCByZWdFeHBFbiA9IC9bYS16fEEtWnwwLTldfFtgfCF8QHwjfCR8JXxefCZ8KnwofCl8XFwtfF98K3x7fH18PHw+fD98LHwufC98W3wnfDt8OnxcInxcXFxcXS9naTtcbiAgICAvLyDDpsKNwqLDqMKhwoxcbiAgICBjb25zdCByZWdFeHBTcGFjZTogYW55ID0gL1xccy9nO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVnRXhwRW4ubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChyZWdFeHBFbi50ZXN0KHRleHRbaV0pIHx8IHJlZ0V4cFNwYWNlLnRlc3QodGV4dFtpXSkpIHtcbiAgICAgICAgdGV4dExlbiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dExlbiArPSBjbkNoYXJMZW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0TGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwozCicOnwoXCp8OkwrjCrcOowovCscOmwpbCh8OmwrfCt8OlwpDCiMOpwpXCv8OlwrrCpsOmwojCqsOlwo/ClsOlwq3Cl8OnwqzCpsOkwrjCslxuICAgKi9cbiAgbG9jYWxlU3ViU3RyaW5nKHRleHQ6IGFueSwgc3RhcnQ6IG51bWJlciwgbWF4TGVuOiBudW1iZXIpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHN0YXJ0ID4gdGV4dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGNuQ2hhckxlbiA9IDM7XG4gICAgbGV0IHRleHRMZW46IG51bWJlciA9IDA7XG4gICAgbGV0IHJldHVyblN0cjogc3RyaW5nID0gJyc7XG4gICAgLy8gw6jCi8Kxw6bClsKHXG4gICAgbGV0IHJlZ0V4cEVuID0gL1thLXp8QS1afDAtOV18W2B8IXxAfCN8JHwlfF58JnwqfCh8KXxcXC18X3wrfHt8fXw8fD58P3wsfC58L3xbfCd8O3w6fFwifFxcXFxdL2dpO1xuICAgIC8vIMOmwo3CosOowqHCjFxuICAgIGxldCByZWdFeHBTcGFjZTogYW55ID0gL1xccy9nO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlZ0V4cEVuLmxhc3RJbmRleCA9IDA7XG4gICAgICBpZiAocmVnRXhwRW4udGVzdCh0ZXh0W2ldKSB8fCByZWdFeHBTcGFjZS50ZXN0KHRleHRbaV0pKSB7XG4gICAgICAgIHRleHRMZW4gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRMZW4gKz0gY25DaGFyTGVuO1xuICAgICAgfVxuICAgICAgaWYgKHRleHRMZW4gPiBtYXhMZW4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5TdHIgKz0gdGV4dFtpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblN0cjtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1hdXRvLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJpcHQtYnRuXCIgdHlwZT1cInRleHRcIiAjaXB0XG4gICAgICAgICAgICAgIGxpYk5neEF1dG9UZXh0YXJlYSBbYXBwTWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgPiA8L3RleHRhcmVhPlxuICBgLFxuICBzdHlsZXM6IFtgLmlwdC1idG57d2lkdGg6MTAwJTtoZWlnaHQ6MTBweDtib3JkZXI6MXB4IHNvbGlkICM0MDgwY2Y7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzo1cHggMTBweDtsaW5lLWhlaWdodDoyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2l6aW5nOmJvcmRlci1ib3h9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0b1RleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFR5cGVTZXJ2aWNlIH0gZnJvbSAnLi90eXBlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliTmd4QXV0b1RleHRhcmVhXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0b1RleHRhcmVhRGlyZWN0aXZlIHtcblxuICBASW5wdXQoKSBhcHBNYXhMZW5ndGg6IG51bWJlcjtcbiAgLy8gcHVibGljIGJhc2VSZW06IG51bWJlciA9IDM3LjU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHR5cGVTZXJ2aWNlOiBUeXBlU2VydmljZSkge1xuICAgIHRoaXMuYWRqdXN0SGVpZ2h0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbklucHV0KHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQnXSlcbiAgYmx1cih0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCfDp8KbwpHDpcKQwqzDpcKkwrHDpcKOwrvDp8KEwqbDp8KCwrknKTtcbiAgICB0aGlzLmFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgZm9jdXModGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnw6fCm8KRw6XCkMKsw6fChMKmw6fCgsK5Jyk7XG4gICAgdGhpcy5hZGp1c3RIZWlnaHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGp1c3RIZWlnaHQobWluSGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKCFtaW5IZWlnaHQpIHtcbiAgICAgIG1pbkhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBsZXQgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyDDqcKYwrLDpsKtwqLDpcKtwpfDpsKVwrDDqMK2woXDpcKHwrrDqcKVwr/DpcK6wqZcbiAgICBpZiAodGhpcy5hcHBNYXhMZW5ndGgpIHtcbiAgICAgIGxldCBjb3VudExlbiA9IHRoaXMudHlwZVNlcnZpY2UuZ2V0U3RyaW5nTG9jYWxlTGVuKGVsLnZhbHVlKTtcbiAgICAgIGlmIChjb3VudExlbiA+IHRoaXMuYXBwTWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy50eXBlU2VydmljZS5sb2NhbGVTdWJTdHJpbmcoZWwudmFsdWUsIDAsIHRoaXMuYXBwTWF4TGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29tcHV0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2Ugd2hpY2ggaXMgY2F1c2VkIGJ5IGJvcmRlciBhbmQgb3V0bGluZVxuICAgIC8vIGxldCBvdXRlckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5oZWlnaHQsIDEwKTtcbiAgICBsZXQgZGlmZiA9IGVsLm9mZnNldEhlaWdodCAtIGVsLmNsaWVudEhlaWdodDtcbiAgICAvLyBzZXQgdGhlIGhlaWdodCB0byAwIGluIGNhc2Ugb2YgaXQgaGFzIHRvIGJlIHNocmlua2VkXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAvLyBzZXQgdGhlIGNvcnJlY3QgaGVpZ2h0XG4gICAgLy8gZWwuc2Nyb2xsSGVpZ2h0IGlzIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgY29udGVudCwgbm90IGp1c3QgdGhlIHZpc2libGUgcGFydFxuICAgIC8vIGVsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgZWwuc2Nyb2xsSGVpZ2h0ICsgZGlmZikgLyB0aGlzLmJhc2VSZW0gKyAncmVtJztcbiAgICBjb25zb2xlLmxvZygnc2Rhc2QnLCBlbC5zY3JvbGxIZWlnaHQgKyBkaWZmKVxuICAgIGVsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgZWwuc2Nyb2xsSGVpZ2h0ICsgZGlmZikgKyAncHgnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hBdXRvVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL25neC1hdXRvLXRleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hBdXRvVGV4dGFyZWFEaXJlY3RpdmUgfSBmcm9tICcuL25neC1hdXRvLXRleHRhcmVhLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4QXV0b1RleHRhcmVhQ29tcG9uZW50LCBOZ3hBdXRvVGV4dGFyZWFEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4QXV0b1RleHRhcmVhQ29tcG9uZW50LCBOZ3hBdXRvVGV4dGFyZWFEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5neEF1dG9UZXh0YXJlYU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFHQ0EsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7O3FDQUxEOzs7Ozs7O0FDQUE7UUFPRTtTQUFpQjs7Ozs7O1FBVVYsd0NBQWtCOzs7OztzQkFBQyxJQUFTO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sQ0FBQyxDQUFDO2lCQUNWOztnQkFDRCxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7O2dCQUNwQixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7O2dCQUV4QixJQUFNLFFBQVEsR0FBRyw2RUFBNkUsQ0FBQzs7Z0JBRS9GLElBQU0sV0FBVyxHQUFRLEtBQUssQ0FBQztnQkFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQztxQkFDZDt5QkFBTTt3QkFDTCxPQUFPLElBQUksU0FBUyxDQUFDO3FCQUN0QjtpQkFDRjtnQkFDRCxPQUFPLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O1FBTWpCLHFDQUFlOzs7Ozs7O1lBQWYsVUFBZ0IsSUFBUyxFQUFFLEtBQWEsRUFBRSxNQUFjO2dCQUN0RCxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDO2lCQUNYO2dCQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2lCQUNYOztnQkFDRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7O2dCQUNsQixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7O2dCQUN4QixJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7O2dCQUUzQixJQUFJLFFBQVEsR0FBRyw2RUFBNkUsQ0FBQzs7Z0JBRTdGLElBQUksV0FBVyxHQUFRLEtBQUssQ0FBQztnQkFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQztxQkFDZDt5QkFBTTt3QkFDTCxPQUFPLElBQUksU0FBUyxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUU7d0JBQ3BCLE1BQU07cUJBQ1A7eUJBQU07d0JBQ0wsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsT0FBTyxTQUFTLENBQUM7YUFDbEI7O29CQW5FRkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MEJBSkQ7Ozs7Ozs7QUNBQTtRQWNFOzZCQUY2QixHQUFHO1NBRy9COzs7O1FBRUQsMkNBQVE7OztZQUFSO2FBQ0M7O29CQWhCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSw0SUFJVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQywySkFBMkosQ0FBQztxQkFDdEs7Ozs7O2dDQUVFQyxRQUFLOzt1Q0FaUjs7Ozs7OztBQ0FBOztRQVdFLGtDQUFtQixPQUFtQixFQUM3QjtZQURVLFlBQU8sR0FBUCxPQUFPLENBQVk7WUFDN0IsZ0JBQVcsR0FBWCxXQUFXO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjs7Ozs7UUFHRCwwQ0FBTzs7OztZQURQLFVBQ1EsUUFBNkI7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7Ozs7UUFHRCx1Q0FBSTs7OztZQURKLFVBQ0ssUUFBNkI7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7Ozs7UUFHRCx3Q0FBSzs7OztZQURMLFVBQ00sUUFBNkI7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7Ozs7UUFFTSwrQ0FBWTs7OztzQkFBQyxTQUFrQjtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxTQUFTLEdBQUcsRUFBRSxDQUFDO2lCQUNoQjs7Z0JBQ0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7O2dCQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O29CQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDckc7aUJBQ0Y7O2dCQUdELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQzs7Z0JBRTdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7OztnQkFJcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTtnQkFDNUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7OztvQkFuRHhFQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtxQkFDakM7Ozs7O3dCQUxtQkMsYUFBVTt3QkFDckIsV0FBVzs7OzttQ0FPakJGLFFBQUs7OEJBUUxHLGVBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7MkJBS3ZDQSxlQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDOzRCQU10Q0EsZUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7dUNBM0IxQzs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7d0JBQ2xFLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO3FCQUM5RDs7b0NBVEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==