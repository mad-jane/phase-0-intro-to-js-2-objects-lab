// Write your solution in this file!
const employee = {
    name: "Mad",
    streetAddress: "12310 Singletree Ln"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee, 
        name: "Sam",
        streetAddress: "11 Broadway",
    };
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee.streetAddress};
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}