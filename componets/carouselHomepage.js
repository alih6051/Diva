const carousalHomepage = () => {
    return `<div id="carouselSmallControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images-static.nykaa.com/uploads/439d01a8-aa05-462d-9c25-6ef5dee9a4fd.jpg?tr=w-2400,cm-pad_resize" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://images-static.nykaa.com/uploads/ffe40423-e798-4ef7-bbba-6d7b8adb6768.jpg?tr=w-2400,cm-pad_resize" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://images-static.nykaa.com/uploads/be2b991e-e469-412d-8ec7-f10a9490a96b.gif?tr=w-2400,cm-pad_resize" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselSmallControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselSmallControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
}
export default carousalHomepage;
