<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BaseClass extends Vue {
  protected name!: string

  public getName () {
    return this.name
  }
}
</script>