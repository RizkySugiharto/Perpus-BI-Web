function getItemNavAttributes(path) {
    const isActive = location.pathname == path;
    return isActive ? `
    class="nav-link active" href="${path}" aria-current="page"
    ` : `
    class="nav-link" href="${path}"
    `
}

function loadNavbar(role) {
    const navbar = document.getElementById('navbar');
    role = role ? role : 'guest';

    switch (role) {
        case 'guest':
            navbar.innerHTML = `
            <h1 class="navbar-brand m-0 fs-3">${APP_NAME}</h1>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-2 mt-lg-0 fs-5">
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/index.html')}>Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/login.html')}>Login</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/register.html')}>Register</a>
                    </li>
                </ul>
            </div>
            `;
            break;
        case 'anggota':
            navbar.innerHTML = `
            <h1 class="navbar-brand m-0 fs-3">${APP_NAME}</h1>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-2 mt-lg-0 fs-5">
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/index.html')}>Beranda</a>
                    </li>
                    <li class="nav-item">
                    <a ${getItemNavAttributes('/books.html')}>Buku</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/loans.html')}>Peminjaman</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/logout.html')}>Logout</a>
                    </li>
                </ul>
            </div>
            `;
            break
        case 'staff':
            navbar.innerHTML = `
            <h1 class="navbar-brand m-0 fs-3">${APP_NAME}</h1>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-2 mt-lg-0 fs-5">
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/index.html')}>Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/accounts.html')}>Akun</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/loans.html')}>Peminjaman</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/logout.html')}>Logout</a>
                    </li>
                </ul>
            </div>
            `;
            break;
        case 'admin':
            navbar.innerHTML = `
            <h1 class="navbar-brand m-0 fs-3">${APP_NAME}</h1>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-2 mt-lg-0 fs-5">
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/index.html')}>Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/accounts.html')}>Akun</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/members.html')}>Anggota</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/books.html')}">Buku</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/admin/loans.html')}>Peminjaman</a>
                    </li>
                    <li class="nav-item">
                        <a ${getItemNavAttributes('/logout.html')}>Logout</a>
                    </li>
                </ul>
            </div>
            `;
            break;
        default:
            break;
    }
}