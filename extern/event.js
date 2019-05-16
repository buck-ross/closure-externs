/**
* @fileoverview Defines Node JS style event functionality as an external API for the Closure Compiler
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
* Declare the actual EventEmitter class (as a record, in order to minimize back-pain)
* @record
*/
var EventEmitter = function() {};

/**
* The class-level listenerCount method is now depricated. Use `emitter.listenerCount` instead.
* @param {EventEmitter} emitter The emitter which should be checked
* @param {(string|symbol)} eventName The name of the event which should be checked
* @depricated
*/
EventEmitter.listenerCount = function(emitter, eventName) {};

/**
* The default maximum number of listeners which can be registered for any given event. Defaults to 10
* @type {number}
*/
EventEmitter.defaultMaxListeners = 10;

/**
* Alias for [`emitter.on`]{@link EventEmitter#on}. Adds a listener function to the provided event on the current emitter instance.
* @param {(string|symbol)} eventName The name of the event
* @param {function(this:EventEmitter, ...?)} listener The function which will be called by the emiter when the specified event is emitted
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.addListener = function(eventName, listener) {};

/**
* Synchronously calls all listening functions associated with the specified event in order.
* @param {(string|symbol)} eventName The name of the event to emit
* @param {...?} args The arguments which should be passed to the listeners
* @return {boolean} Returns `true` if the event had listeners. `false` otherwise.
*/
EventEmitter.prototype.emit = function(eventName, args) {};

/**
* Retrieves an array of all of the events for which the emitter has registered listeners
* @return {Array<(string|symbol)>} The array of event names
*/
EventEmitter.prototype.eventNames = function() {};

/**
* Retrieves the maximum number of listeners allowed for any given event. Defaults to the value of `EventEmitter.defaultMaxListeners`.
* @return {number} The maximum number of listeners.
*/
EventEmitter.prototype.getMaxListeners = function() {};

/**
* Retrieves all of listeners associated with the named event.
* @param {(string|symbol)} eventName The name of the event to pull from.
* @return {Array<function(this:EventEmitter, ...?)>} An array of all of the listening functions associated with the named event.
*/
EventEmitter.prototype.listeners = function(eventName) {};

/**
* Alias for [`emitter.removeListener`]{@link EventEmitter#removeListener}. Removes the specified listener from the named event.
* @param {(string|symbol)} eventName The name of the event from which the listener should be removed.
* @param {function(this:EventEmitter, ...?)} listener The listener function which should be removed from the emitter.
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.off = function(eventName, listener) {};

/**
* Alias for [`emitter.addListener`]{@link EventEmitter#addListener}. Adds a listener function to the provided event on the current emitter instance.
* @param {(string|symbol)} eventName The name of the event
* @param {function(this:EventEmitter, ...?)} listener The function which will be called by the emiter when the specified event is emitted
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.on = function(eventName, listener) {};

/**
* Does the same as [`emitter.on`]{@link EventEmitter#on} except the listener will only be executed on the next call of the event and then will be immediately removed automatically.
* @param {(string|symbol)} eventName The name of the event
* @param {function(this:EventEmitter, ...?)} listener The function which will be called by the emiter when the specified event is emitted
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.once = function(eventName, listener) {};

/**
* Does the same as [`emitter.on`]{@link EventEmitter#on} except the listener will be inserted into the front of the synchronous listener queue instead of at the back.
* @param {(string|symbol)} eventName The name of the event
* @param {function(this:EventEmitter, ...?)} listener The function which will be called by the emiter when the specified event is emitted
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.prependListener = function(eventName, listener) {};

/**
* Essentially a combination of [`emitter.once`]{@link EventEmitter#once} and [`emitter.prependListener`]{@link EventEmitter#prependListener}.
* @param {(string|symbol)} eventName The name of the event
* @param {function(this:EventEmitter, ...?)} listener The function which will be called by the emiter when the specified event is emitted
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.prependOnceListener = function(eventName, listener) {};

/**
* Removes all listeners attached to the emitter, or just the ones associated with the named event if one is specified.
* @param {string=} eventName The name of the event to remove events from.
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.removeAllListeners = function(eventName) {};

/**
* Alias for [`emitter.off`]{@link EventEmitter#off}. Removes the specified listener from the named event.
* @param {(string|symbol)} eventName The name of the event from which the listener should be removed.
* @param {function(this:EventEmitter, ...?)} listener The listener function which should be removed from the emitter.
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.removeListener = function(eventName, listener) {};

/**
* Sets the meximum number of listeners the current emitter can associate with any single event.
* @param {number} number The new value of the maximum number of listeners.
* @return {EventEmitter} A handle to the current EventEmitter so that calls can be chained.
*/
EventEmitter.prototype.setMaxListeners = function(number) {};

/**
* Retrieves a list of all listener functions for a named event.
* @param {(string|symbol)} eventName The name of the event from which to pull the data.
* @return {Array<function(this:EventEmitter, ...?)>} An array of all listeners associated with the given event.
*/
EventEmitter.prototype.rawListeners = function(eventName) {};

// eslint-disable-next-line capitalized-comments
// ex: set ft=javascript ff=unix ts=4 sw=4 tw=0 noet :

