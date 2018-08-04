/**
* @fileoverview A simple file to define the common "Thenable" (Promise) interface for the Closure Compiler
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
* Define the "Thenable" interface (as a record, in order to minimize back-pain)
* @record
*/
var Thenable = function() {};

/**
* Outline the "then" method: the only common component among all "thenable" objects
* @param {function(?): ?} onFulfilled A method which will be called with the result as a parameter in the event
*   that the "thenable" resolves
* @param {function(?): ?} [onRejected] A method which will be called with the error as a parameter in the event
*   that the "thenable" throws an error
* @return {Thenable} A new "thenable" object, representing the next link in the chain
*/
Thenable.prototype.then = function(onFulfilled, onRejected) {};
