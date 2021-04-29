<header class="header">
  <h1 class="title">Music Selection 2018</h1>
  <div class="author">
    by
    <!-- svelte-ignore a11y-missing-content -->
    <a class="ava" href="https://www.facebook.com/artem.drey" target="_blank">l</a>
    <div>Artem Drei</div>
  </div>
  <div class="playing_track" />
  <div class="mobile-header" />
</header>

<style>
  .header {
    padding: 16px 16px 18px;
    background: url("../assets/textures/groovepaper.png");
    font-family: "Amatic SC", cursive;
    font-weight: 700;
    color: var(--font);
    text-align: center;
  }

  .title {
    margin: 0;
    padding: 0;
    font-family: "Amatic SC", cursive;
    font-size: 72px;
    font-weight: 700;
  }

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 33px;
  }

  .ava {
    display: inline-block;
    width: 45px;
    height: 45px;
    margin: 0 8px;
    border: 3px solid var(--border);
    border-radius: 50%;
    background: center url("../assets/covers/ava.jpg");
    background-size: contain;
  }
</style>
