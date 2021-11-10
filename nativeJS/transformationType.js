// написать функцию которая принимает массив студенов и возвращает массив из объектов с ключами title и студентами и с их id
// объект cash должен содержать ключ sum  и значениием суммой всех cash студентов
const students = [
  {
    id: 0,
    name: "A",
    age: 22,
    cash: 55000,
    iselder: true,
  },
  {
    id: 1,
    name: "B",
    age: 19,
    cash: 15000,
    iselder: false,
  },
  {
    id: 2,
    name: "B",
    age: 46,
    cash: 40000,
    iselder: false,
  },
];

const output = [
  { title: "name", student0: "A", student1: "B", student2: "C" },
  { title: "age", student0: 22, student1: 19, student2: 46 },
  {
    title: "cash",
    student0: 55000,
    student1: 15000,
    student2: 40000,
    sum: 110000,
  },
];

const f = (students) => {
  const { id, ...titles } = students[0];
  const res = Object.keys(titles).map((t) =>
    students.reduce(
      (acc, student) => ({ ...acc, [`student${student.id}`]: student[t] }),
      { title: t }
    )
  );

  const findIndexCash = res.findIndex((el) => el.title === "cash");
  if (findIndexCash + 1) {
    const { title, ...cash } = res[findIndexCash];
    res[findIndexCash] = {
      ...res[findIndexCash],
      sum: Object.values(cash).reduce((a, el) => a + el, 0),
    };
  }
  return res;
};
