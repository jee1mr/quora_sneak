/*****************************************************************
*                                                                *
* Author: Jeevan M R                                             *
* 14.jeevan@gmail.com                                            *
* github.com/jee1mr                                              *
* jeevanmr.com                                                   *
*                                                                *
* You may freely modify/redistribute any part of this project    *
* ***************************************************************/
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "*.quora.com",
  contentScriptFile: data.url("content-script.js")
});
