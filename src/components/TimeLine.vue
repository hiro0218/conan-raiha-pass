<template>
  <section class="timeline-container">
    <template v-for="(timeLine, year) in timeLineData">
      <div class="heading-year" :key="year">{{ year }}</div>
      <article v-for="(article, index) in timeLine" :key="year + index" class="case-data">
        <h2>{{ article.title }}</h2>
        <blockquote v-if="article.summary" v-html="article.summary"/>
        <div class="anime-list">
          <h3>アニメ</h3>
          <ul v-for="(animeTitle, animeKey) in article.anime" :key="animeKey">
            <li>{{ animeTitle }}</li>
          </ul>
        </div>
        <div class="comic-list">
          <h3>コミック</h3>
          <ul v-for="(comicTitle, comicKey) in article.comic" :key="comicKey">
            <li>{{ comicTitle }}</li>
          </ul>
        </div>
        <div class="production-list">
          <ul v-for="(production, productionKey) in article.production" :key="productionKey">
            <li><a :href="production.url" target="_blank"><img :src="production.img"></a></li>
          </ul>
        </div>
      </article>
    </template>
  </section>
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

<style>
</style>
