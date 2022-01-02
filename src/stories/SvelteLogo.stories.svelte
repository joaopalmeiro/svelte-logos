<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import SvelteLogo from "../SvelteLogo.svelte";
</script>

<Meta title="Logos/Svelte" />

<Story name="Main">
  <SvelteLogo width={240} height={240} />
</Story>

<Story name="References">
  <ul>
    <!-- https://web.dev/external-anchors-use-rel-noopener/ -->
    <li>
      <a
        href="https://github.com/sveltejs/branding"
        target="_blank"
        rel="noopener">Source</a
      >
    </li>
    <li>
      <a
        href="https://github.com/sveltejs/branding#readme"
        target="_blank"
        rel="noopener">Brand guidelines</a
      >
    </li>
  </ul>
</Story>
