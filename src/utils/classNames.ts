export function classNames (classes: { [key: string]: boolean }) {
    const classesArr = Object.entries(classes);
    const classesString = classesArr.filter(([_, flag]) => flag).map(([key]) => key).join(' ');
    return classesString;
}