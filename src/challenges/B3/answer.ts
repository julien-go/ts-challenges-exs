/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSillsAndClosestGroups[] {

    const result = groups.map((group) => {
        let closestGroups: GroupWithSills[] = []
        let maxSameSkills = 0;
        groups.forEach((e) => {
            const count = e.skills.filter((x) => group.skills.includes(x)).length
            if(e.name !== group.name){
                if (count > maxSameSkills){
                    maxSameSkills = count;
                    closestGroups.length = 0;
                    closestGroups.push(e)
                } else if ( count === maxSameSkills) {
                    closestGroups.push(e)
                }
            }
        })
        return {...group, closestGroups}
    })
    return result;
}


// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}
