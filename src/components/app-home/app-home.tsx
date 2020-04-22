import { Component, h } from "@stencil/core";

@Component({
    tag: "app-home",
    styleUrl: "app-home.css",
    shadow: true,
})
export class AppHome {
    render() {
        return (
            <div class="app-home">
                <p>This is a test of Stencil.js</p>

                <stencil-route-link url="/profile/cat-stevens">
                    <button>Cat Page</button>
                </stencil-route-link>
            </div>
        );
    }
}
