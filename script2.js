async function getUsers() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    document.getElementById('usertable').innerHTML = data.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.login}</td>
            <td><img src="${user.avatar_url}" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%;"></td>
            <td>${user.site_admin}</td>
            <td><button class="btn btn-primary edit-btn">Edit</button></td>
            <td><button class="btn btn-primary reject-btn">Reject</button></td>
        </tr>
        
    `).join('');
}
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btn')) {
       alert('Application edited')
    }
});
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('reject-btn')) {
       alert('Application Rejected')
    }
});


getUsers();