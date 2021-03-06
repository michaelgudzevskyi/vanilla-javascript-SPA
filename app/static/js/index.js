const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing dashboard")},
        { path: "/posts", view: () => console.log("Viewing posts")},
        { path: "/settings", view: () => console.log("Viewing settings")}
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    router()
})