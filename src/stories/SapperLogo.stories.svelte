<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import SapperLogo from "../SapperLogo.svelte";
</script>

<Meta title="Logos/Sapper" />

<Story name="Main">
  <SapperLogo width={240} height={240} />
</Story>

<Story name="References">
  <ul>
    <li>
      <a
        href="https://github.com/sveltejs/sapper/tree/master/site/static"
        target="_blank"
        rel="noopener">Source</a
      >
    </li>
  </ul>
</Story>
