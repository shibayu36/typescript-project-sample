/// <reference path="../../typings/browser.d.ts" />

"use strict";

import * as $ from "jquery";
import * as _ from "lodash";

$().ready(() => {
    alert(_.camelCase('Foo Bar'));
});
