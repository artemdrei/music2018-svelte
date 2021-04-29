<script>
  export let release;
</script>

<div class="description">
  <div class="info">
    <div>
      <div><span class="title">Artist:</span> {release.artist}</div>
      <div><span class="title"> Album:</span> {release.album}</div>
      <div><span class="title">Release:</span> {release.date}</div>
      <span class="title">Instagram: </span><a class="link" href={release.instagram} target="_blank">Link</a>
    </div>
    <img class="cover" src={`../assets/covers/${release.cover}`} alt={release.coverAlt} />
  </div>
  <div class="trackTitle">{release.track}</div>
  <p>{release.description}</p>
</div>

<style>
  .description {
    width: 50%;
    padding-left: 40px;
  }

  .title {
    color: var(--font-weak);
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    line-height: 1.4;
    border-bottom: 1px solid var(--faint-weak);
  }

  .cover {
    width: 120px;
    height: 120px;
    margin-left: 20px;
    border: 1px solid var(--faint-weak);
  }
</style>
