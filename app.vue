<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "sass:color";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

$primary-color: #20cea1;
$text-color: #333333;
$font-main: "Inter", sans-serif;

$mobile-landscape: 568px;
$tablet: 768px;
$desktop: 992px;

h1,
h2,
h3,
h4 {
  margin: 0;
}

main {
  max-width: 1400px;
  margin: auto;
}

.btn {
  background-color: $primary-color;
  color: white;
  font-family: $font-main;
  border: none;
  outline: none;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;

  &-primary {
    background-color: $primary-color;

    svg {
      fill: white;
    }

    &:hover {
      background-color: color.scale(
        $primary-color,
        $lightness: -10.7142857143%
      );
    }

    &:active {
      background-color: color.scale(
        $primary-color,
        $lightness: -21.4285714286%
      );
    }
  }

  &-secondary {
    background-color: white;
    color: $primary-color;
    border: 1px solid $primary-color;

    svg {
      fill: $primary-color;
    }

    &:hover {
      background-color: color.scale(white, $lightness: -10.7142857143%);
    }

    &:active {
      background-color: color.scale(white, $lightness: -21.4285714286%);
    }
  }

  &-outline {
    background-color: transparent;
    color: $primary-color;
    border: 1px solid $primary-color;

    svg {
      fill: $primary-color;
    }

    &:hover {
      background-color: color.scale(
        $primary-color,
        $lightness: -10.7142857143%
      );
      color: white;

      svg {
        fill: white;
      }
    }

    &:active {
      background-color: color.scale(
        $primary-color,
        $lightness: -21.4285714286%
      );
    }
  }

  p {
    margin: 0;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}

body {
  background-color: #fafafa;
  font-family: $font-main;
  color: $text-color;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  margin: 0 auto;
}

.divider-x {
  width: 2px;
  background-color: #e9eff3;
}

.divider-y {
  height: 2px;
  background-color: #ebf2f6;
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
}

article h2 {
  color: $primary-color;
  font-weight: 500;
  font-size: 2rem;
}

.budget-container {
  margin: 0 10rem 4rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto 4rem;
  }

  .disclaimer {
    text-align: center;
    margin: 20px 20px 0;
  }
}
</style>
