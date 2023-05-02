"use strict";
/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ students }) {
    return students.sort((a, b) => { return a.age === b.age ? (a.name < b.name ? -1 : 1) : a.age - b.age; });
}
exports.default = default_1;
