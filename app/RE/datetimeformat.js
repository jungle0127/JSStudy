// ==UserScript==
// @name        JSStudy
// @namespace   vel
// @include     https://www.baidu.com
// @version     1
// @grant       none
// ==/UserScript==

var baseReg = /[Sonntag|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag]{1},[1-31]\.\s[Januar|Februar|M\u00e4rz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember]\s\d{1,4}/;
var fullDateFormatReg = /[Sonntag|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag]{1},\s[1-31]\.\s[Januar|Februar|M\u00e4rz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember]{1}\d{1,4}/;
var dayReg = /[Sonntag|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag]/;
var monthNamesReg = /[Januar|Februar|M\u00e4rz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember]/;

alert('OK');
var result = fullDateFormatReg.test('Montag, 2. Juni 2017');
alert(result);
