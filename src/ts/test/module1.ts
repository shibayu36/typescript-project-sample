/// <reference path="../../../typings/browser.d.ts" />

"use strict";

import { assert } from "chai";
import module1 from "../module1";

describe("module1 default function", () => {
    it("returns module1", () => {
        let expect: string;
        expect = 'module1';
        assert.equal(module1(), expect);
    });
});
