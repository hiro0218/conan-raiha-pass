<template>
  <div class="timeline-container">
    <section v-for="(timeLine, year) in timeLineData" :key="year" class="year-container">
      <div class="heading-year">{{ year }}</div>
      <article v-for="(article, index) in timeLine" :key="year + index" class="case-data">
        <h2 class="article-title">{{ article.title }}</h2>
        <blockquote v-if="article.summary" v-html="article.summary"/>
        <div class="anime-list">
          <h3>アニメ</h3>
          <ul>
            <li v-for="(animeTitle, animeKey) in article.anime" :key="animeKey">{{ animeTitle }}</li>
          </ul>
        </div>
        <div class="comic-list">
          <h3>コミック</h3>
          <ul>
            <li v-for="(comicTitle, comicKey) in article.comic" :key="comicKey">{{ comicTitle }}</li>
          </ul>
        </div>
        <div class="product-list">
          <ul>
            <li v-for="(product, productKey) in article.product" :key="productKey">
              <a :href="product.url" target="_blank">
                <img :src="product.img">
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import timeLineData from "@/data.json";

export default {
  name: "TimeLine",
  data: function() {
    return {
      timeLineData: timeLineData
    };
  }
};
</script>

<style lang="scss">
.timeline-container {
  position: relative;
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1rem;
    height: 100%;
    width: 0.25rem;
    background: #d7e4ed;
  }
}

.heading-year,
.case-data {
  margin-left: 3rem;
}

.heading-year {
  position: relative;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2.9rem;
    margin: auto;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: #d04255;
    box-shadow: 0 0 0 0.5rem #e9f0f5;
  }
}

.case-data {
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0 2px 0 #d7e4ed;

  .article-title {
    position: relative;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    line-height: 1.8;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -3.5rem;
      margin: auto;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      background: #333;
      box-shadow: 0 0 0 0.25rem #e9f0f5;
    }
  }

  blockquote {
    margin: 1rem 0 1.5rem;
    text-align: justify;
  }
}

.product-list {
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    & + li {
      margin-left: 0.5rem;
    }
  }

  a {
    display: block;
  }

  img {
    height: 200px;
    width: 130px;
  }
}
</style>
