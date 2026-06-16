export const obtenerUsuarios = () => {
  return JSON.parse(
    localStorage.getItem("registros")
  ) || [];
};

export const existeCorreo = (correo) => {
  const usuarios = obtenerUsuarios();

  return usuarios.some(
    usuario =>
      usuario.correo.toLowerCase() ===
      correo.toLowerCase()
  );
};

export const registrarUsuario = (
  usuario
) => {

  const usuarios =
    obtenerUsuarios();

  usuarios.push(usuario);

  localStorage.setItem(
    "registros",
    JSON.stringify(usuarios)
  );
};

export const loginUsuario = (
  correo,
  password
) => {

  const usuarios =
    obtenerUsuarios();

  return usuarios.find(
    usuario =>
      usuario.correo === correo &&
      usuario.password === password
  );
};