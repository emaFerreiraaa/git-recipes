export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;
  _tiempo!: number;

  constructor(aName: string) {
    this.name = aName;
  }

  get description(): string | undefined{
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription
  }
  
  get tiempo(): number {
    return this._tiempo;
  }

  set tiempo(aTiempo: number) {
    if (aTiempo <= 0) {
      throw new Error("El tiempo debe de ser mayor a 0.");
    }
    this._tiempo = aTiempo;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} -Tiempo: ${this.tiempo} - descripcion: ${this.description}`;
  }
}
