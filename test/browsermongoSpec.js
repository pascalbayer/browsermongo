(function (undefined) {
    'use strict';

    define(['browsermongo'], function (BrowserMongo) {
        describe('BrowserMongo ', function () {
            it('Create multiple instances and check for singleton', function () {
                var db1 = new BrowserMongo();
                var db2 = new BrowserMongo();

                expect(db1).toBe(db2);
            });
        });
    });
}());