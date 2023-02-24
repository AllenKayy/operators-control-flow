// Question No 3

let scienceSubjects, socialScienceSubjects, artsSubjects, generalSubjects, message, invalidMessage, classGroup;

message = "Welcome! You're"
invalidMessage = `Sorry! You have entered an invalid class group, your subjects are: ${generalSubjects}`

scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing" 
socialScienceSubjects = "Accounting, Commerce, Marketing, Geography"
artsSubjects = "Government, Economics, Literature, History"
generalSubjects = "English, Mathematics"


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

classGroup = artsSubjects;
classGroupCategory();

// Question No 5

let num = 40

nearestPowerOf2 = (num) => {
    let pwr = 1;
    for (let i = 0; pwr <= num; i++) {
      pwr = 2 ** i;
    }
    return (pwr / 2);
  }

 pwr = nearestPowerOf2(num)
 console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);