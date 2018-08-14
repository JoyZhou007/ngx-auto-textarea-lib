/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ TypeService.ngInjectableDef = i0.defineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
    return TypeService;
}());
export { TypeService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvIiwic291cmNlcyI6WyJsaWIvdHlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFPekM7S0FBaUI7Ozs7OztJQVVWLHdDQUFrQjs7Ozs7Y0FBQyxJQUFTO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDVjs7UUFDRCxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7O1FBQ3BCLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQzs7UUFFeEIsSUFBTSxRQUFRLEdBQUcsNkVBQTZFLENBQUM7O1FBRS9GLElBQU0sV0FBVyxHQUFRLEtBQUssQ0FBQztRQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ2Q7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLElBQUksU0FBUyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDOztJQUdqQjs7T0FFRzs7Ozs7Ozs7SUFDSCxxQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLElBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1g7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYOztRQUNELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7UUFDbEIsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDOztRQUN4QixJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7O1FBRTNCLElBQUksUUFBUSxHQUFHLDZFQUE2RSxDQUFDOztRQUU3RixJQUFJLFdBQVcsR0FBUSxLQUFLLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNkO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxJQUFJLFNBQVMsQ0FBQzthQUN0QjtZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixLQUFLLENBQUM7YUFDUDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDbEI7O2dCQW5FRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztzQkFKRDs7U0FLYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeXBlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG5cblxuXG5cbiAgLyoqXG4gICAqIOiOt+WPluS4reiLseaWh+a3t+WQiOWtl+espuS4suWumuS5iemVv+W6plxuICAgKi9cbiAgcHVibGljIGdldFN0cmluZ0xvY2FsZUxlbih0ZXh0OiBhbnkpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBjbkNoYXJMZW4gPSAzO1xuICAgIGxldCB0ZXh0TGVuOiBudW1iZXIgPSAwO1xuICAgIC8vIOiLseaWh1xuICAgIGNvbnN0IHJlZ0V4cEVuID0gL1thLXp8QS1afDAtOV18W2B8IXxAfCN8JHwlfF58JnwqfCh8KXxcXC18X3wrfHt8fXw8fD58P3wsfC58L3xbfCd8O3w6fFwifFxcXFxdL2dpO1xuICAgIC8vIOaNouihjFxuICAgIGNvbnN0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWdFeHBFbi5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKHJlZ0V4cEVuLnRlc3QodGV4dFtpXSkgfHwgcmVnRXhwU3BhY2UudGVzdCh0ZXh0W2ldKSkge1xuICAgICAgICB0ZXh0TGVuICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGVuICs9IGNuQ2hhckxlbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHRMZW47XG4gIH1cblxuICAvKipcbiAgICog5oyJ54Wn5Lit6Iux5paH5re35ZCI6ZW/5bqm5oiq5Y+W5a2X56ym5LiyXG4gICAqL1xuICBsb2NhbGVTdWJTdHJpbmcodGV4dDogYW55LCBzdGFydDogbnVtYmVyLCBtYXhMZW46IG51bWJlcikge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgPiB0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgY25DaGFyTGVuID0gMztcbiAgICBsZXQgdGV4dExlbjogbnVtYmVyID0gMDtcbiAgICBsZXQgcmV0dXJuU3RyOiBzdHJpbmcgPSAnJztcbiAgICAvLyDoi7HmlodcbiAgICBsZXQgcmVnRXhwRW4gPSAvW2EtenxBLVp8MC05XXxbYHwhfEB8I3wkfCV8XnwmfCp8KHwpfFxcLXxffCt8e3x9fDx8Pnw/fCx8LnwvfFt8J3w7fDp8XCJ8XFxcXF0vZ2k7XG4gICAgLy8g5o2i6KGMXG4gICAgbGV0IHJlZ0V4cFNwYWNlOiBhbnkgPSAvXFxzL2c7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVnRXhwRW4ubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChyZWdFeHBFbi50ZXN0KHRleHRbaV0pIHx8IHJlZ0V4cFNwYWNlLnRlc3QodGV4dFtpXSkpIHtcbiAgICAgICAgdGV4dExlbiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dExlbiArPSBjbkNoYXJMZW47XG4gICAgICB9XG4gICAgICBpZiAodGV4dExlbiA+IG1heExlbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblN0ciArPSB0ZXh0W2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuU3RyO1xuICB9XG5cblxufVxuIl19