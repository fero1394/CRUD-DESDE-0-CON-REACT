import React from 'react'
import { useForm} from 'react-hook-form'

function EditUserForm(props) {

    //console.log(props.currentUser)

    //react-hook-form es una 'libreria' para manejar fomularios y su ventaja es poder validar formularios de una forma muy sencilla la funcion handleSubmit es la encargada de hacer las validaciones en cada input, con el register le vamos a decir que queremos validar de el input ya sea minimo de palabras o maximo e.t.c
    //const {register, errors, handleSubmit} = useForm();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: props.currentUser//Valores por defecto para editar esta es una funcion de reac-hook-form 
    });

    //funcion para capturar la informacion del formulario y convertirla en objeto para asi enviarla por addUser para que la añada al array
    const onSubmit = (data, e) => {
        //console.log(data)
        props.addUser(data)

        //limpia los campos despues hacer onSubmit
        e.target.reset();
    }

  return (
      //el onSubmit llama a la funcion para pasarle por parametro el handleSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" {...register("name", {
             required: true})}/>

        {/*manejo de errores pregunta si hay errores si es asi pregunta si es con name si es asi despliega el mensaje configurado */}

        <div>
            {errors?.name && <span>Campo Obligatorio</span>}
        </div>


        <label>Username</label>
        <input type="text" name="username" {...register("username", {
             required: true})} />
        <div>
            {errors?.username && <span>Campo Obligatorio</span>}
        </div>
        
        <button>Edit User</button>
  </form>
  )
}

export default EditUserForm