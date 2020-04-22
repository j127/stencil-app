import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
    tag: "app-profile",
    styleUrl: "app-profile.css",
    shadow: true,
})
export class AppProfile {
    @Prop() match: MatchResults;

    normalize(name: string): string {
        if (name) {
            return name
                .split("-")
                .map(
                    w =>
                        w.substr(0, 1).toUpperCase() + w.substr(1).toLowerCase()
                )
                .join(" ");
        }
        return "";
    }

    render() {
        if (this.match && this.match.params.name) {
            return (
                <div class="app-profile">
                    <p>
                        Hello! My name is{" "}
                        {this.normalize(this.match.params.name)}. My name was
                        passed in through a route param!
                    </p>
                    <img
                        src="https://placekitten.com/500/500"
                        alt="{this.match.params.name}"
                    />
                </div>
            );
        }
    }
}
