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

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
   
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    router()
})