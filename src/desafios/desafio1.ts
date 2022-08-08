// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface employee {
    name: string,
    code: number,
}

const employee1: employee = {
    name: 'John',
    code: 10,
}