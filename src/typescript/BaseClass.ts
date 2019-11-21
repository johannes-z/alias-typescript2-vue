export default abstract class BaseClass {
  protected abstract name: string

  public getName () {
    return this.name
  }
}