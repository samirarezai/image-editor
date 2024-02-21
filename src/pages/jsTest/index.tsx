const Index = () => {
    const employees = [
        {employeeId: 11, name: 'John', managerId: 11},
        {employeeId: 50, name: 'Todd', managerId: 73},
        {employeeId: 150, name: 'Alex', managerId: 200},
        {employeeId: 73, name: 'Sara', managerId: 11},
        {employeeId: 200, name: 'Alex', managerId: 50},
        {employeeId: 100, name: 'Alex', managerId: 150},
    ];
    const result:number[] = [];
    const check = (employees: { employeeId: number; name: string; managerId: number }[], num: number): number[] => {
        const employee = employees.find((item) => item.employeeId === num);
        if (employee) {
            if (employee.employeeId !== employee.managerId) {
                result.push(employee.managerId);
                check(employees, employee.managerId)
            }
        }
    }
    check(employees, 200)
    console.log(result)

    return (
        <div>
            <p>
                check value:
            </p>
            <div>
                <div id="display">0</div>
                <button id="start">Start</button>
                <button id="stop">Stop</button>
            </div>
        </div>
    );
};

export default Index;