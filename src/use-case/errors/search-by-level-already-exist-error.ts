export class SearchByLevelDigimonExistError extends Error {
  constructor() {
    super(`Level of this digmon does not exist`)
  }
}
