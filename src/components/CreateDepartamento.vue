<template>
  <div>
    <h1>Crear Departamento</h1>
    <h2 style="color:blue">{{mensaje}}</h2>
    <form v-on:submit.prevent="insertDepartamento()">
        <div class="form-group">
            <label>Id</label>
            <input type="number" class="form-control" v-model="departamento.idDepartamento">
        </div>
        <div class="form-group">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre">
        </div>
            <div class="form-group">
            <label>localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad">
        </div>
        <button type="submit" class="btn btn-primary">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamento from '../services/ServiceDepartamento'
const service = new ServiceDepartamento();
export default {
    name:"CreateDepartamento",
    methods:{
        insertDepartamento(){
            service.insertDepartamento(this.departamento).then(result=>{
                this.mensaje ="Insertado Correctamente "+result;
                this.$router.push("/")
            })
        }
    },
    data(){
        return{ 
            mensaje :"",
            departamento:{
                idDepartamento:0,
                nombre:"",
                localidad:"",
            }
        }
    }
}
</script>

<style>

</style>