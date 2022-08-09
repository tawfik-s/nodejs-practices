//factory
interface Student {
    name: string;
    age: number;

}

const studentFactory = (name: string, age: number): Student => {
    return { name: name, age: age } as Student;
}

const myStudent: Student = studentFactory('Hana', 16) as Student;



