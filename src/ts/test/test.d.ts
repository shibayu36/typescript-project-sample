/// <reference path="../../../typings/browser.d.ts" />

// karma-html2js-preprocessorでHTMLを読み込むことが
// 出来るようにするための定義
declare var __html__: { [path: string]: string };
