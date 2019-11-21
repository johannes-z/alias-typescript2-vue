<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// @ts-ignore
// @Component
export default abstract class BaseClass extends Vue {
  protected abstract name: string

  public getName () {
    return this.name
  }
}
</script>