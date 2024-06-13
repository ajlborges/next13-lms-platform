export const isTeacher = (userId?: string | null) => {
  if (!userId) {
    console.log("No userId provided.");
    return false;
  }

  const teacherIds = Object.keys(process.env)
    .filter((key) => key.startsWith('NEXT_PUBLIC_TEACHER_ID_'))
    .map((key) => process.env[key]);

  console.log("Teacher IDs:", teacherIds);
  const result = teacherIds.includes(userId);
  console.log("isTeacher result:", result);

  return result;
};
