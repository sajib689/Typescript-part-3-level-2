type Alpha = string | number
function add(param1: Alpha, param2: Alpha) : Alpha {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

console.log(add(3,4))

type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string,
    role: 'admin'
}


function IsAdmin (user: NormalUserType | AdminUserType) {
    if('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    } else {
        return 'I am an normal user';
    }
}
const normalUser : NormalUserType = {name: "sajib"};
const adminUser : AdminUserType = {name: "admin sajib", role: "admin"};

console.log(IsAdmin(adminUser))