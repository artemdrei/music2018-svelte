<script>
  export let title;
</script>

<div class="header">
  <span class="title">
    {title}
  </span>
</div>

<style>
  .header {
    position: sticky;
    top: 56px;
    display: block;
    height: 50px;
    padding: 5px;
    margin-bottom: 30px;
    text-align: center;
    z-index: 2;
    font-family: "Amatic SC", cursive;
    font-size: 27px;
    font-weight: 700;
    background: #fff;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.15);
  }

  .title {
    display: inline-block;
    z-index: 2;
  }

  .title::after {
    content: "";
    display: block;
    width: 70px;
    height: 7px;
    background: url("../assets/icons/lines.svg") no-repeat;
    background-size: 200px 200px;
    background-position: -15px -54px;
  }
</style>
