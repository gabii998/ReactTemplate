const Usuario = (() => {
  var nombre;
  var apellido;
  var email;
  var estaLogueado=false;

  const setNombre = (nombre) => {
    this.nombre = nombre;
  };
  const getNombre = () => {
    return nombre;
  };

  const setApellido = (apellido) => {
    this.apellido = apellido;
  };
  const getApellido = () => {
    return apellido;
  };

  const setEmail = (email) => {
    this.email = email;
  };
  const getEmail = () => {
    return email;
  };
  const setEstaLogueado = () => {
      this.estaLogueado = estaLogueado;
  }
  const getEstaLogueado = () => {
      return estaLogueado;
  }

  return{
      setNombre,setApellido,setEmail,
      getNombre,getApellido,getEmail,setEstaLogueado,getEstaLogueado
  }
})();

export default Usuario;
