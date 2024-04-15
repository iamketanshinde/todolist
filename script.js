async function getUser(){
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
   
    let tablerows = "";
    data.forEach(user => {
        tablerows += `
            <tr>
                <td>${user.login}</td>
                <td><img src="${user.avatar_url}" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%;"></td>
                <td>${user.site_admin}</td>
            </tr>`;
    });
    document.getElementById('usertable').innerHTML = tablerows;
}

getUser();