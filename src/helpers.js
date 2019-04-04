export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const apellidos = [
    "Alfaro",
    "Aliaga",
    "Bianco",
    "Blasco",
    "Carballo",
    "Cima",
    "Demarchi",
    "Dominguez",
    "Filloy",
    "Garcia",
    "Giaroli",
    "Hernandez",
    "Hirch",
    "Jacobo",
    "Levstein",
    "Massimino",
    "Mazzarella",
    "Molinati",
    "Monjes",
    "Novello",
    "Ortega",
    "Perez",
    "Petrone",
    "Rodigou",
    "Rodriguez",
    "Terenziani",
    "Veizaga",
  ];

  const nombres = [
    "Julian",
    "Agustin",
    "Gastón",
    "Agustin",
    "Juan",
    "Enzo",
    "Nicolas",
    "Lucas",
    "Constanza",
    "Franco",
    "Micaela",
    "Diego",
    "Ines",
    "Camila",
    "Julia",
    "German",
    "Martín",
    "Pancho",
    "Lucas",
    "Facundo",
    "María",
    "Pamela",
    "Ignacio",
    "Santiago",
    "Cindy",
    "Valentina",
    "Micaela",
  ];

  return `${rando(nombres)}-${rando(apellidos)}`;
}
