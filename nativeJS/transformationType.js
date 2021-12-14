// написать функцию которая принимает массив студенов и возвращает массив из объектов с ключами title и студентами и с их id
// объект cash должен содержать ключ sum  и значениием суммой всех cash студентов
const students = [
  {
    id: 1,
    name: "A",
    age: 22,
    cash: 55000,
    isElder: true,
  },
  {
    id: 2,
    name: "B",
    age: 19,
    cash: 15000,
    isElder: false,
  },
  {
    id: 4,
    name: "B",
    age: 46,
    cash: 40000,
    isElder: false,
  },
];

const output = [
  { title: "name", student1: "A", student2: "B", student4: "B" },
  { title: "age", student1: 22, student2: 19, student4: 46 },
  {
    title: "cash",
    student1: 55000,
    sum: 110000,
    student2: 15000,
    student4: 40000,
  },
  {
    title: "isElder",
    student1: true,
    student2: false,
    student4: false,
  },
];

const f = (students) => {
  const { id, ...titles } = students[0];
  const res = Object.keys(titles).map((title) =>
    students.reduce(
      (acc, student) => {
        acc[`student${student.id}`] = student[title];
        if (title === "cash") {
          acc.sum = (acc.sum || 0) + student[title];
        }
        return acc;
      },
      { title }
    )
  );

  return res;
};

console.log("---f(students)", f(students));
