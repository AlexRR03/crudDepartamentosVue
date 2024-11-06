<template>
  <div>
    <h1>Modificar Departamento</h1>
    <div v-if="departamento">
        <form v-on:submit.prevent="updateDepartamento()">
            <div class="form-group">
                <input type="hidden" class="form-control" v-model="departamento.idDepartamento">
            </div>
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" v-model="departamento.nombre">
            </div>
                <div class="form-group">
                <label>localidad</label>
                <input type="text" class="form-control" v-model="departamento.localidad">
            </div>
            <button type="submit" class="btn btn-warning">Modificar</button>
        </form>
    </div>
    <div v-else>
        <img src="../assets/images/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
import ServiceDepartamento from '@/services/ServiceDepartamento'
const service = new ServiceDepartamento()

export default {
    name:"UpdateDepartamento",
    data(){
        return{
            departamento:null
        }
    },
    mounted(){
        let id =this.$route.params.id;
        service.findDepartamento(id).then(result=>{
            this.departamento=result
        })
    },
    methods:{
        updateDepartamento(){
            service.updateDepartamento(this.departamento).then(result=>{
                console.log(result)
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>