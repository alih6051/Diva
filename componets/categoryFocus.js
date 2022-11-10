const categoryFocus = () => {
    return ` <div class="text-center mt-4">
    <h2>CATEGORY IN FOCUS</h2>
</div>
<div class="categoryFocusBanner">
    <div id="carouselCategoryFocus" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images-static.nykaa.com/uploads/101ccea5-08c4-4ea7-86b3-dd4fcaf6c9a3.jpg?tr=w-2400,cm-pad_resize" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://images-static.nykaa.com/uploads/93889767-e36a-427c-a2d6-dc20119d6262.jpg?tr=w-2400,cm-pad_resize" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselCategoryFocus" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselCategoryFocus" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>`
}

export default categoryFocus;