<script lang="ts">
    import Main from "./routes/index.svelte";
    import Hello from "./routes/hello.svelte";
    import { Route, Router } from "svelte-navigator";

</script>

<Router>
    <Route path="/" component="{Main}"/>
    <Route path="/hello" component="{Hello}"/>
</Router>
