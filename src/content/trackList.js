export const trackList = {
  title: `Track List`,
  intro: `
  <div class="track_list__intro">
    Если нажать на кнопку Show Track List — появится список всех представленных выше треков. Осознанно спрятал это под спойлер и не добавил в меню, чтобы не было соблазна быстренько все проклацать и ничего не читать. Не буду томить, жмите на кнопку и пусть станет удобнее.
  </div>
  <div class="track_list__container">
    <div class="track_list__youtube"></div>
    <div class="track_list__spotify"></div>
  </div>
  <div class="track_list__show_button_wrapper">
    <button class="btn double_roll track_list__show_button">
      <div>Show Track List</div>
      <div>Show Track List</div>
      <div>Show Track List</div>
      <div>Show Track List</div>
    </button>
  </div>
  `,
  hasHeader: true,
  hasNavAnchor: true,
  anchor: `trackList`,
  className: `track_list presentation`,
};
