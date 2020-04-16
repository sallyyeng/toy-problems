// tech assessment on Karat platform

const getPairsAndClasses = studentToClassList => {
  let result = new Map();
  let studentToClassMap = new Map();

  // create map of student to classes (classes should be a set)
  studentToClassList.forEach(([student, className]) => {
    if (studentToClassMap.has(student)) {
      studentToClassMap.get(student).push(className);
    } else {
      studentToClassMap.set(student, [className]);
    }
  });
  console.log(studentToClassMap);

  let studentsArr = Array.from(studentToClassMap.keys());

  // create unique pairs of students (nested factorial loop)
  studentsArr.forEach((studentA, i) => {
    for (let j = i; j < studentsArr.length; j++) {
      let studentB = studentsArr[j];
      if (studentA !== studentB) {
        // merge the two pairs' classes
        let studentAClasses = studentToClassMap.get(studentA);
        let studentBClasses = studentToClassMap.get(studentB);
        let mergedClassesArr = [...studentAClasses, ...studentBClasses];
        let dedupClassesSet = new Set(mergedClassesArr);
        result.set([studentA, studentB], Array.from(dedupClassesSet));
      }
    }
  });

  // return result
  return result;
};

const input = [
  [05, "gym"],
  [05, "history"],
  [05, "algebra"],
  [11, "geometry"],
  [11, "algebra"],
  [13, "biology"],
  [13, "gym"],
  [13, "geometry"],
  [35, "biology"],
  [35, "biology"],
  [35, "history"],
  [99, "algebra"],
  [99, "ceramics"],
  [99, "biology"]
];

console.log("result: ", getPairsAndClasses(input));
