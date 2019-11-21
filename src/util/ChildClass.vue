<script lang="ts">
import { Component } from 'vue-property-decorator'
import BaseClass from './BaseClass.vue'

@Component
export default class ChildClass extends BaseClass {
  protected name: string = 'Test'

  constructor() {
    super()
    console.log(this.name);
    console.log(this.getName());
  }
}
</script>