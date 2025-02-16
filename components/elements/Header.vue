<template>
  <header>
    <a href="/">
      <img class="logo" src="./../../assets/logo.svg" alt="logo" />
    </a>
    <ul class="menu-list">
      <li>
        <a href="https://budget2travel.com">💶 Travel Budget Estimator</a>
      </li>
      <li>
        <a href="https://insigh.to/b/budget2trip">💡 Feedback?</a>
      </li>
    </ul>

    <a href="#estimation-form">
      <button class="btn btn-outline">Estimate</button>
    </a>
  </header>
</template>

<script setup></script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: #aeaeae23 0px 0px 40px;

  .logo {
    width: 150px;
  }

  h1 {
    font-size: 1.4rem;
  }

  button {
    width: fit-content;
  }

  .menu-list {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding-inline-start: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }

    li {
      a {
        text-decoration: none;
        color: #000;
        font-weight: 400;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
}
</style>
