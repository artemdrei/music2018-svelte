<script>
  export let release;

  import PlyaButton from "./PlayButton.svelte";
  import Description from "./Description.svelte";

  const onPlay = () => {
    console.log("AAAA");
  };
</script>

<div class="track">
  <div class="container">
    <button class="youtube video" data-embed={release.id} on:click={onPlay}>
      <img class="cover" src={`https://img.youtube.com/vi/${release.id}/sddefault.jpg`} alt="cover" />
      <PlyaButton id={release.id} />
    </button>
    <Description {release} />
  </div>
</div>

<style>
  .container {
    display: flex;
    padding: 50px 20px;
  }

  .video {
    position: relative;
    width: 50%;
    height: 370px;
    padding: 0;
    outline-offset: 5px;
    background: #000;
    border: none;
  }

  .cover {
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
    max-height: 350px;
  }
</style>
