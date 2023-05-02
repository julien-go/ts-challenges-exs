"use strict";
/**
 * In this challenge, you have to add a list of skills to each group (based on
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 *
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ groups }) {
    const result = groups.map((group => {
        return {
            ...group,
            skills: group.students.reduce((acc, curr) => {
                curr.skills.forEach((skill) => {
                    if (!acc.includes(skill)) {
                        acc.push(skill);
                    }
                });
                return acc.sort();
            }, [])
        };
    }));
    return result;
}
exports.default = default_1;
