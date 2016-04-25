/// <reference path="../../typings/browser.d.ts" />

"use strict";

import * as $ from "jquery";
import * as _ from "lodash";
import module1 from "./module1";
import module2 from "./module2";

$().ready(() => {
    alert(_.repeat(module1(), 3));
    alert(_.repeat(module2(), 2));
});
