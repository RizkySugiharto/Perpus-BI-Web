function checkIfLoggedIn(...expectedRoles) {
    axios.get(
        `${BASE_URL}/auth/me`,
        {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        if (response.status != 200) {
            location.href = '/index.html';
            return;
        }
        let isForbidden = true;
        for (const role of expectedRoles) {
            if (response.data.role == role) {
                isForbidden = false;
                break;
            }
        }
        
        if (isForbidden) {
            location.href = '/index.html';
            return;
        }
        
        loadNavbar(response.data.role);
        localStorage.setItem(SELF_ROLE_KEY, response.data.role);
    }).catch(_ => {
        location.href = '/index.html';
    });
}