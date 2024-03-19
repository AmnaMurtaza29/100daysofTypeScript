"use strict";
//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone = {
    brand: 'Redmi',
    model: 'Redmi 13c',
    Storage: '128GB',
    batterylife: '2 days',
    ScreenSize: '6.74 inches',
};
console.log(smartphone);
//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let computerProgrammerSkills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++'],
    SoftwareFrameworks: ['Django', 'Flask', 'React.js', 'Next.js'],
    Tools: ['Git', 'Docker']
};
let { languages, SoftwareFrameworks, Tools } = computerProgrammerSkills;
console.log(`Language ${languages[0]}, FrameWork ${SoftwareFrameworks[1]}, Tool ${Tools[0]}`);
function createFlexibleObject() {
    return {};
}
function addSectionToObject(obj, sectionName, data) {
    obj[sectionName] = data;
}
const flexibleObj = createFlexibleObject();
addSectionToObject(flexibleObj, "Section 1", ["Biryani", "Orange Juice"]);
addSectionToObject(flexibleObj, "Section 2", ["Pulao", "Tea"]);
console.log(flexibleObj);
