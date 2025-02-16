<template>
  <div class="comfort-container">
    <div class="comfort-line">
      <div class="tag ultracheap"><p>Ultracheap</p></div>
      <p class="tag-description">
        Hostels, street food, public transport, free or cheap activities.
      </p>
    </div>
    <div class="comfort-line">
      <div class="tag budget"><p>Budget</p></div>
      <p class="tag-description">
        Simple accommodations, cheap local meals, public transport.
      </p>
    </div>
    <div class="comfort-line">
      <div class="tag mid-range"><p>Mid-range</p></div>
      <p class="tag-description">
        Comfortable hotels, standard restaurants, some private services.
      </p>
    </div>
    <div class="comfort-line">
      <div class="tag luxury"><p>Luxury</p></div>
      <p class="tag-description">
        High-end hotels, gourmet dining, premium services.
      </p>
    </div>
  </div>
</template>

<style lang="css">
.comfort-container {
  margin-top: 10px;

  .tag {
    padding: 4px 10px;
    height: fit-content;
    border-radius: 3px;
  }

  .tag p {
    margin: 0;
    font-size: 12px;
    white-space: nowrap;
  }

  .comfort-line {
    display: flex;
    gap: 6px;
    margin-bottom: 6px;
    align-items: center;
  }

  .tag-description {
    font-size: 12px;
    color: rgb(83, 83, 83);
    margin: 0;
  }

  .ultracheap {
    background-color: #fef9c3; /* Vert clair */
    color: #713f12; /* Vert foncé */
  }

  .budget {
    background-color: #ffedd5; /* Pêche clair */
    color: #dc8107; /* Brun orangé */
  }

  .mid-range {
    background-color: #d5f1ff; /* Bleu ciel léger */
    color: #079ddc; /* Bleu profond */
  }

  .luxury {
    background-color: #f2d5ff; /* Violet doux */
    color: #8f1fc8; /* Violet royal */
  }
}
</style>
