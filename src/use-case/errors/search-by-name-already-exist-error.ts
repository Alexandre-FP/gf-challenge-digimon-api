export class SearchByNameDigimonExistError extends Error {
  constructor() {
    super(`Digimon doesn't exist`)
  }
}
