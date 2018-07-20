/**
* @fileoverview A simple file to define AMD functionality as an external API for the Closure Compiler
* @author Haximilian<haximilian@gmail.com>
* @externs
* @copyright Copyright (C) 2018 Haximilian
* This file is part of the program Haximilian Closure Externs.
*
* Haximilian Closure Externs is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* Haximilian Closure Externs is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/**
* The "Define" fucntion, taking up to 3 parameters. It's defined VERY losely, but as long as you use it correctly, you shouldn't have any problems.
* @global
* @param {string|Array<string>|function(...*): *} first The module ID | The dependency array | The factory method
* @param {Array<string>|function(...*): *} [second] The dependency array | The factory method
* @param {function(...*): *} [third] The factory method
*/
function define(first, second, third) {}

/**
* The AMD Standard specifies that the property "define.amd" be declared as at least an empty object
* @const {Object}
*/
define.amd = {};

/**
* The "Require" function is slightly simpler than "Define" according to the AMD Spec, but also a lot more provider-specific.
* @global
* @param {string|Array<string>} dependencies A list of dependencies for the script.
* @param {function(...*): null} [callback] The function to call once all of the dependencies have been acquired. Can be omitted in the case of a CommonJS-style call in certain cases.
* @return {?} If the only parameter is a string, "require" is treated similarly to CommonJS. Otherwise, it should not return anything.
*/
function require(dependencies, callback) {}

/**
* The "Requrie" function also exposes a method to resolve a module ID to a URL.
* @param {string} id The ID of the module to be converted into a URL
* @return {string} The resulting module URL
*/
require.toUrl = function(id) {};
