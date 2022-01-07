import skill from "../components/constants/skill";
import tech from "../components/constants/tech";
export const useSkillHooks = () => {

    const SkillMap = () => {
        const result = []
        //transform:
        const Tech = Object.values(tech[0])
        Tech.map(tech => result.push(skill.filter(node => node.name === tech)))
        return result
      }
      const myskill = SkillMap()


    return {
        myskill
    }
}
