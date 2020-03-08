<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    })
  }
}
</script>
