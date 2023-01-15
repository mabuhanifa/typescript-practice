interface CourseGoal {
  titles: string;
  description: string;
  completeUntil: Date;
}

function completeCourse(
  titles: string,

  description: string,

  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  // Partial will makes courseGoal properties optional
  (courseGoal.titles = titles),
    (courseGoal.description = description),
    (courseGoal.completeUntil = completeUntil);
  return courseGoal as CourseGoal;
}
