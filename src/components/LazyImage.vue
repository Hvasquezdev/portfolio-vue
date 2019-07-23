<template>
  <img 
    :data-src="lazySrc"
    :data-srcset="lazySrcset" 
    :height="height"
    :width="width"
    :style="style"
  />
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'lazy-image',
  props: {
    backgroundColor: {
      type: String,
      default: '#efefef',
    },
    lazySrc: {
      type: String,
      default: null
    },
    lazySrcset: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
    }
  },
  mounted() {
    this.$el.addEventListener('load', this.setLoadingState(false));
    const observer = lozad(this.$el);
    observer.observe();
  },
  beforeDestroy() {
    this.$el.removeEventListener('load', this.setLoadingState(false));
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    setLoadingState(value) {
      this.loading = value;
      this.$emit('loadingImage', value);
    }
  },
  computed: {
    aspectRatio() {
      if(!this.height || !this.width) return null;

      return (this.height / this.width) * 100;
    },
    style() {
      // Background color used as a placeholder while the image load
      const style = {
        backgroundColor: this.backgroundColor
      };

      if(this.width) style.width = `${this.width}px`;

      const applyAspectRatio = this.loading && this.aspectRatio;
      if(applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0;

        //Scale the image container according to the aspect ratio
        style.paddingTop = `${this.aspectRatio}%`;
      }

      return style;
    }
  },
}
</script>
