/// <reference path="../../../typings/browser.d.ts" />

"use strict";

import { assert } from "chai";
import module2 from "../module2";

describe("module2 default function", () => {
    it("returns module2", () => {
        let expect: string;
        expect = 'module2';
        assert.equal(module2(), expect);
    });
});
