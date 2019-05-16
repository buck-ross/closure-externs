/**
* @fileoverview A simple file to provide the CommonJS interface
* @author Haximilian<haximilian@gmail.com>
* @externs
* @copyright Copyright (C) 2018 Haximilian
* This file is part of the program Woodsman.
*
* Woodsman is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* Woodsman is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/**
* Define the "module" object & the "exports" key to expose module exportation functionaity
*/
var module = {
	exports: {}
};

/**
* Some modules may choose to simply assign keys to the "exports" object, as it can result in more compact code
*/
var exports;

// eslint-disable-next-line capitalized-comments
// ex: set ft=javascript ff=unix ts=4 sw=4 tw=0 noet :

