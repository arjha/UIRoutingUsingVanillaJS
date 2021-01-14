const contentDiv = document.getElementById('routerOutlet');

const homePage = `
    <section>
        <h2>This is home component</h2>
    </section>
`;

const resumePage = `
    <section>
        <h2>This is resume component</h2>
    </section>
`;

const contactPage = `
    <section>
        <h2>This is contact component</h2>
    </section>
`;

const routes = {
    '/home': homePage,
    '/resume': resumePage,
    '/contact': contactPage,
};

const routeAppender = '/#'

const onNavItemClick = (pathName) => {
    window.history.pushState(
        pathName,
        routeAppender + pathName,
        window.location.origin + routeAppender + pathName
    );
    contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];
window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
}

window.addEventListener('load', () => {
    let loadedRoute = window.location.hash.split('#')[1];
    if (loadedRoute === undefined || loadedRoute === '/') {
        loadedRoute = '/home';
    }
    contentDiv.innerHTML = routes[loadedRoute];
});