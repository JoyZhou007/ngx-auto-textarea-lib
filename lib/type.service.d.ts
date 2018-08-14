export declare class TypeService {
    constructor();
    /**
     * 获取中英文混合字符串定义长度
     */
    getStringLocaleLen(text: any): number;
    /**
     * 按照中英文混合长度截取字符串
     */
    localeSubString(text: any, start: number, maxLen: number): string;
}
