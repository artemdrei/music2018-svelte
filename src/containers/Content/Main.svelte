<script>
  import { data } from "../../content/main";
  import Header from "./Header.svelte";
  import Intro from "./Intro.svelte";
  import Release from "./Release/Release.svelte";
</script>

{#each data as { title, intro, anchor, releases }}
  <section id={`#${anchor}`} class="section">
    <Header {title} />
    <Intro {intro} />
    {#each releases as release}
      <Release {release} />
    {/each}
  </section>
{/each}

<style>
  .section {
    font-size: 20px;
    color: var(--font);
    background-image: url(../assets/textures/groovepaper.png);
  }
</style>
