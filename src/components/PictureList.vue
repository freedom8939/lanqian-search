<template>

  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" item-layout="horizontal" :data-source="props.pictureList">
    <template #renderItem="{ item }">

      <a-list-item>
        <a-card hoverable>
          <template #cover>
            <img alt="头像" :src="item.murl" />
          </template>
          <a-card-meta :title="item.title">
          </a-card-meta>
        </a-card>
      </a-list-item>

    </template>
  </a-list>

</template>

<script setup lang="ts">
import { withDefaults} from "vue";

interface Props {
  pictureList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  pictureList: () => []
});

</script>

<style scoped>

</style>
