/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TypeService {
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
/** @nocollapse */ TypeService.ngInjectableDef = i0.defineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dG8tdGV4dGFyZWEvIiwic291cmNlcyI6WyJsaWIvdHlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNO0lBRUosaUJBQWlCOzs7Ozs7SUFVVixrQkFBa0IsQ0FBQyxJQUFTO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDVjs7UUFDRCxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7O1FBQ3BCLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQzs7UUFFeEIsTUFBTSxRQUFRLEdBQUcsNkVBQTZFLENBQUM7O1FBRS9GLE1BQU0sV0FBVyxHQUFRLEtBQUssQ0FBQztRQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ2Q7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLElBQUksU0FBUyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7SUFNakIsZUFBZSxDQUFDLElBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1g7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYOztRQUNELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7UUFDbEIsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDOztRQUN4QixJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7O1FBRTNCLElBQUksUUFBUSxHQUFHLDZFQUE2RSxDQUFDOztRQUU3RixJQUFJLFdBQVcsR0FBUSxLQUFLLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNkO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxJQUFJLFNBQVMsQ0FBQzthQUN0QjtZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixLQUFLLENBQUM7YUFDUDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDbEI7OztZQW5FRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cblxuXG5cblxuICAvKipcbiAgICog6I635Y+W5Lit6Iux5paH5re35ZCI5a2X56ym5Liy5a6a5LmJ6ZW/5bqmXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RyaW5nTG9jYWxlTGVuKHRleHQ6IGFueSkge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGNuQ2hhckxlbiA9IDM7XG4gICAgbGV0IHRleHRMZW46IG51bWJlciA9IDA7XG4gICAgLy8g6Iux5paHXG4gICAgY29uc3QgcmVnRXhwRW4gPSAvW2EtenxBLVp8MC05XXxbYHwhfEB8I3wkfCV8XnwmfCp8KHwpfFxcLXxffCt8e3x9fDx8Pnw/fCx8LnwvfFt8J3w7fDp8XCJ8XFxcXF0vZ2k7XG4gICAgLy8g5o2i6KGMXG4gICAgY29uc3QgcmVnRXhwU3BhY2U6IGFueSA9IC9cXHMvZztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlZ0V4cEVuLmxhc3RJbmRleCA9IDA7XG4gICAgICBpZiAocmVnRXhwRW4udGVzdCh0ZXh0W2ldKSB8fCByZWdFeHBTcGFjZS50ZXN0KHRleHRbaV0pKSB7XG4gICAgICAgIHRleHRMZW4gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRMZW4gKz0gY25DaGFyTGVuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dExlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjInnhafkuK3oi7Hmlofmt7flkIjplb/luqbmiKrlj5blrZfnrKbkuLJcbiAgICovXG4gIGxvY2FsZVN1YlN0cmluZyh0ZXh0OiBhbnksIHN0YXJ0OiBudW1iZXIsIG1heExlbjogbnVtYmVyKSB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChzdGFydCA+IHRleHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBjbkNoYXJMZW4gPSAzO1xuICAgIGxldCB0ZXh0TGVuOiBudW1iZXIgPSAwO1xuICAgIGxldCByZXR1cm5TdHI6IHN0cmluZyA9ICcnO1xuICAgIC8vIOiLseaWh1xuICAgIGxldCByZWdFeHBFbiA9IC9bYS16fEEtWnwwLTldfFtgfCF8QHwjfCR8JXxefCZ8KnwofCl8XFwtfF98K3x7fH18PHw+fD98LHwufC98W3wnfDt8OnxcInxcXFxcXS9naTtcbiAgICAvLyDmjaLooYxcbiAgICBsZXQgcmVnRXhwU3BhY2U6IGFueSA9IC9cXHMvZztcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWdFeHBFbi5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKHJlZ0V4cEVuLnRlc3QodGV4dFtpXSkgfHwgcmVnRXhwU3BhY2UudGVzdCh0ZXh0W2ldKSkge1xuICAgICAgICB0ZXh0TGVuICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGVuICs9IGNuQ2hhckxlbjtcbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0TGVuID4gbWF4TGVuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuU3RyICs9IHRleHRbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5TdHI7XG4gIH1cblxuXG59XG4iXX0=