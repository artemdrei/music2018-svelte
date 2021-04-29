<script>
  import { data } from "../../content/main";
</script>

<nav class="nav">
  <ul class="list">
    {#each data as { title, anchor }}
      <li>
        <a class={`link`} href={`#${anchor}`}>{title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    position: sticky;
    top: 0px;
    left: 0;
    background-color: var(--base);
    background-image: url("../assets/textures/low-contrast-linen.png");
    z-index: 3;
    font-size: 20px;
  }

  .list {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 16px;
    list-style: none;
  }

  .link {
    padding: 0 20px;
    font-family: "Oswald", sans-serif;
    transition: color 100ms;
    color: #fff;
    text-decoration-color: #fff;
    border-radius: 4px;
    line-height: 1;
  }
</style>
