/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
        const result = groups.map((group => {
            return {
                ...group,
                skills: group.students.reduce((acc: string[], curr: Student) => {  
                        curr.skills.forEach((skill: string) => {
                            if(!acc.includes(skill)){
                                acc.push(skill)
                            }
                        })
                        return acc.sort()
                }, [])
            }
        }))
    return result
}


// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}