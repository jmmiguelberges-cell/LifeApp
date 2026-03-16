// Life OS — Base de datos de platos / recetario
// Estructura de cada plato:
//   name       : nombre del plato
//   cat        : categoría (Desayuno | Comida | Cena | Snack | Post-entreno)
//   kcal       : kcal totales del plato (suma de ingredientes)
//   p / c / f  : macros totales en gramos
//   servings   : raciones que produce la receta (por defecto 1)
//   ingredients: [ { food: 'Nombre exacto en FOODS_DB', grams: N } ]
//
// PARA AÑADIR PLATOS: copia un bloque y ajusta los valores.
// Los macros deben coincidir con la suma de los ingredientes × gramos / 100.

const RECIPES_DB = [

  /* ── DESAYUNOS ── */
  {
    name: 'Porridge de avena con plátano',
    cat: 'Desayuno', kcal: 430, p: 18, c: 68, f: 9, servings: 1,
    ingredients: [
      { food: 'Avena',   grams: 80 },
      { food: 'Plátano', grams: 100 },
      { food: 'Skyr',    grams: 100 },
    ]
  },
  {
    name: 'Tostadas integrales con huevo',
    cat: 'Desayuno', kcal: 370, p: 22, c: 38, f: 13, servings: 1,
    ingredients: [
      { food: 'Pan integral',    grams: 80 },
      { food: 'Huevo',           grams: 100 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },
  {
    name: 'Batido proteico de fresas',
    cat: 'Desayuno', kcal: 310, p: 35, c: 28, f: 5, servings: 1,
    ingredients: [
      { food: 'Proteína whey',       grams: 30 },
      { food: 'Leche semidesnatada', grams: 250 },
      { food: 'Fresas',              grams: 150 },
      { food: 'Plátano',             grams: 60 },
    ]
  },

  /* ── COMIDAS ── */
  {
    name: 'Arroz con pechuga y brócoli',
    cat: 'Comida', kcal: 510, p: 52, c: 58, f: 6, servings: 1,
    ingredients: [
      { food: 'Arroz blanco',    grams: 100 },
      { food: 'Pechuga de pollo',grams: 150 },
      { food: 'Brócoli',         grams: 200 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },
  {
    name: 'Salmón con patata y espinacas',
    cat: 'Comida', kcal: 530, p: 40, c: 34, f: 22, servings: 1,
    ingredients: [
      { food: 'Salmón',          grams: 180 },
      { food: 'Patata',          grams: 200 },
      { food: 'Espinaca',        grams: 100 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },
  {
    name: 'Lentejas con zanahoria y cebolla',
    cat: 'Comida', kcal: 420, p: 25, c: 62, f: 5, servings: 1,
    ingredients: [
      { food: 'Lentejas',        grams: 200 },
      { food: 'Zanahoria',       grams: 100 },
      { food: 'Cebolla',         grams: 80 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },
  {
    name: 'Ensalada de atún con garbanzos',
    cat: 'Comida', kcal: 430, p: 42, c: 36, f: 12, servings: 1,
    ingredients: [
      { food: 'Atún enlatado',   grams: 150 },
      { food: 'Garbanzos',       grams: 150 },
      { food: 'Tomate',          grams: 100 },
      { food: 'Lechuga',         grams: 60 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },

  /* ── CENAS ── */
  {
    name: 'Tortilla francesa con ensalada',
    cat: 'Cena', kcal: 340, p: 24, c: 8, f: 22, servings: 1,
    ingredients: [
      { food: 'Huevo',           grams: 150 },
      { food: 'Lechuga',         grams: 80 },
      { food: 'Tomate',          grams: 100 },
      { food: 'Aceite de oliva', grams: 10 },
    ]
  },
  {
    name: 'Merluza al horno con verduras',
    cat: 'Cena', kcal: 290, p: 40, c: 14, f: 7, servings: 1,
    ingredients: [
      { food: 'Merluza',         grams: 200 },
      { food: 'Calabacín',       grams: 150 },
      { food: 'Pimiento rojo',   grams: 100 },
      { food: 'Aceite de oliva', grams: 8 },
    ]
  },
  {
    name: 'Yogur griego con nueces y miel',
    cat: 'Cena', kcal: 290, p: 14, c: 22, f: 16, servings: 1,
    ingredients: [
      { food: 'Yogur griego', grams: 200 },
      { food: 'Nueces',       grams: 20 },
      { food: 'Miel',         grams: 15 },
    ]
  },

  /* ── SNACKS ── */
  {
    name: 'Almendras con manzana',
    cat: 'Snack', kcal: 270, p: 7, c: 28, f: 15, servings: 1,
    ingredients: [
      { food: 'Almendras', grams: 25 },
      { food: 'Manzana',   grams: 150 },
    ]
  },
  {
    name: 'Skyr con arándanos',
    cat: 'Snack', kcal: 160, p: 17, c: 18, f: 1, servings: 1,
    ingredients: [
      { food: 'Skyr',      grams: 150 },
      { food: 'Arándanos', grams: 80 },
    ]
  },

  /* ── POST-ENTRENO ── */
  {
    name: 'Shake post-entreno con boniato',
    cat: 'Post-entreno', kcal: 450, p: 38, c: 55, f: 6, servings: 1,
    ingredients: [
      { food: 'Proteína whey',       grams: 30 },
      { food: 'Leche semidesnatada', grams: 200 },
      { food: 'Batata / boniato',    grams: 150 },
      { food: 'Plátano',             grams: 80 },
    ]
  },
  {
    name: 'Arroz con carne picada',
    cat: 'Post-entreno', kcal: 560, p: 48, c: 62, f: 13, servings: 1,
    ingredients: [
      { food: 'Arroz blanco',       grams: 120 },
      { food: 'Carne picada magra', grams: 150 },
      { food: 'Tomate',             grams: 100 },
      { food: 'Aceite de oliva',    grams: 8 },
    ]
  },

];

// Exportar para entornos Node (tests, etc.)
if (typeof module !== 'undefined') module.exports = RECIPES_DB;
