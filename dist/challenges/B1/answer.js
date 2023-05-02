"use strict";
/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 *
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ events }) {
    return events.map((event) => event).sort((a, b) => {
        if (a.startDatetime === b.startDatetime) {
            return a.endDatetime < b.endDatetime ? -1 : 1;
        }
        return a.startDatetime < b.startDatetime ? -1 : 1;
    });
}
exports.default = default_1;
