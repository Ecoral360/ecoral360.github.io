<script lang="ts">
    import Main from "./routes/index.svelte";
    import Hello from "./routes/hello.svelte";
    import { Route, Router } from "svelte-navigator";

    const path = window.location.pathname;
    const pages = {
        "/": Main,
        "/hello": Hello
    }
    console.log(path)
    let page = pages[path] ?? Main
</script>

<Router>
    <Route path="/" component="{Main}"/>
    <Route path="/hello" component="{Hello}"/>
</Router>
