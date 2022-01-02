<script>
  import { SvelteLogo, SapperLogo } from "svelte-logos";

  const size = 48;
</script>

<h1>
  <a
    href="https://www.npmjs.com/package/svelte-logos"
    target="_blank"
    rel="noopener">svelte-logos</a
  > package
</h1>

<div class="container">
  <div>
    <SvelteLogo width={size} height={size} />
    <SvelteLogo width={size} height={size} class="debug" />
  </div>
  <div>
    <SapperLogo width={size} height={size} />
    <SapperLogo width={size} height={size} class="debug" />
  </div>
</div>

<style>
  :global(.debug) {
    outline: 1px solid black;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
