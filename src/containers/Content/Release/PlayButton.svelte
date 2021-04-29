<div class="playBtn" />

<style>
  .playBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 60px;
    background-color: #333;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    z-index: 1;
    opacity: 0.8;
    border-radius: 6px;
  }

  .playBtn::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 15px 0 15px 26px;
    border-color: transparent transparent transparent #fff;
  }
</style>
