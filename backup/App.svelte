<script>
  import { SvelteLogo, SapperLogo } from "svelte-logos";
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
    <SvelteLogo width={48} height={48} />
    <SvelteLogo width={48} height={48} class="debug" />
  </div>
  <div>
    <SapperLogo width={48} height={48} />
    <SapperLogo width={48} height={48} class="debug" />
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
