import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `
    }
}