<template>
  <div class="timeline-container">
    <Adsense
      data-ad-client="ca-pub-7651142413133023"
      data-ad-slot="5864154990"
    />

    <section
      v-for="(timeLine, year) in timeLineData"
      :key="year"
      class="year-container"
    >
      <div class="heading-year">{{ year }}年</div>
      <article
        v-for="(article, index) in timeLine"
        :key="year + index"
        class="case-data"
      >
        <h2 class="article-title">{{ article.title }}</h2>
        <blockquote v-if="article.summary" v-html="article.summary" />
        <div class="anime-list">
          <h3>アニメ</h3>
          <ul>
            <li v-for="(animeTitle, animeKey) in article.anime" :key="animeKey">
              {{ animeTitle }}
            </li>
          </ul>
        </div>
        <div class="comic-list">
          <h3>コミック</h3>
          <ul>
            <li v-for="(comicTitle, comicKey) in article.comic" :key="comicKey">
              {{ comicTitle }}
            </li>
          </ul>
        </div>
        <div class="product-list">
          <ul>
            <li
              v-for="(product, productKey) in article.product"
              :key="productKey"
            >
              <a :href="product.url" target="_blank">
                <img class="lozad" :data-src="product.img" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="year-container">
      <article class="case-data">
        <h2 class="article-title">関連</h2>
        <ul>
          <li>
            <a href="https://b.0218.jp/20160217234035.html" target="_blank"
              >[名探偵コナン] 赤井秀一の死の偽装について (緋色シリーズ)</a
            >
          </li>
          <li>
            <a href="https://b.0218.jp/20140607013751.html" target="_blank"
              >[名探偵コナン] 赤井秀一(沖矢昴)が死んでる間にやってたこと</a
            >
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import lozad from "lozad";
import timeLineData from "@/data.json";

export default {
  name: "TimeLine",
  data: function() {
    return {
      timeLineData: timeLineData
    };
  },
  mounted: function() {
    const observer = lozad();
    observer.observe();
  }
};
</script>

<style lang="scss">
.adswrapper {
  margin: 1rem 0;
}

.timeline-container {
  position: relative;
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 1rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 4rem;
    height: 100%;
    width: 0.25rem;
    background: #d7e4ed;
    z-index: -1;
  }
}

.heading-year {
  margin-bottom: 1rem;
  background-color: #e9f0f5;
  color: #253a5b;
  font-size: 2rem;
  font-weight: bold;
}

.case-data {
  position: relative;
  padding: 1rem;
  margin-left: 10rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0 2px 0 #d7e4ed;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    &:before {
      display: none;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 1.75rem;
    right: 100%;
    height: 0;
    width: 0;
    border: 8px solid transparent;
    border-right: 8px solid #fff;
  }

  h2,
  h3 {
    color: #253a5b;
  }

  .article-title {
    position: relative;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    line-height: 1.8;
  }

  blockquote {
    margin: 1rem 0 1.5rem;
    text-align: justify;
  }
}

.product-list {
  position: absolute;
  right: calc(100% + 2rem);
  top: 1rem;
  bottom: 0;
  margin: auto;
  width: 8rem;

  @media only screen and (max-width: 768px) {
    position: static;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li + li {
    margin-top: 1rem;
  }

  a {
    display: block;
  }

  img {
    height: 12rem;
    width: 8rem;
  }
}
</style>
