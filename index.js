let scienceSubjects, socialScienceSubjects, artsSubjects, generalSubjects, message, invalidMessage, classGroup;

message = "Welcome! You're"
invalidMessage = `Sorry! You have entered an invalid class group, your subjects are: ${generalSubjects}`

scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing" 
socialScienceSubjects = "Accounting, Commerce, Marketing, Geography"
artsSubjects = "Government, Economics, Literature, History"
generalSubjects = "English, Mathematics"


classGroup = artsSubjects;

const classGroupCategory = () => {
    if (classGroup === scienceSubjects) {
        console.log(`${message} a Science student, your subjects are: ${scienceSubjects}, ${generalSubjects}`)
    } else if (classGroup === socialScienceSubjects) {
        console.log(`${message} a Social Science student, your subjects are: ${socialScienceSubjects}, ${generalSubjects}`)
    } else if (classGroup === artsSubjects) {
        console.log(`${message} an Arts student, your subjects are: ${artsSubjects}, ${generalSubjects}`)
    } else {
        console.log(invalidMessage)
    }
}

classGroupCategory();
