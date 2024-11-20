<template>
  <a-list item-layout="horizontal" :data-source="props.userList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable style="width: 190px">
          <template #cover>
            <img alt="头像" src="../assets/avatar.jpg" />
          </template>
          <a-card-meta :title="item.userName">
            <template #description>{{item.userProfile}}</template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { withDefaults} from "vue";

interface Props {
  userList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  userList: () => []
});

</script>

<style scoped>

</style>
