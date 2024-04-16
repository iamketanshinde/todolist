let users = [{ id: 1, user_admin: "john", status: "Inactive" }, { id: 2, user_admin: "jane", status: "Active" }];

const renderTable = () => {
    const tablebody = document.getElementById('usertable');
    tablebody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.user_admin}</td>
            <td>${user.status}</td>
            <td>${user.id}</td>
            <td><button onclick="updateuser(${user.id})">update</button></td>
            <td><button onclick="rejectuser(${user.id})">reject</button></td>
        `;
        tablebody.appendChild(row);
    });
};

const adduser = (user) => {
    users.push(user);
    console.log('Application of new user:', user);
    renderTable();
};

const updateuser = (userid) => {
    const user = users.find(u => u.id === userid);
    if (user) {
        user.status = 'update';
        renderTable();
    }
};

const rejectuser = (userid) => {
    users = users.filter(u => u.id !== userid);
    renderTable();
};

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const newuser = {
        id: users.length + 1,
        user_admin: formdata.get('username'),
        status: formdata.get('status')
    };
    adduser(newuser);
    event.target.reset();
});

renderTable();