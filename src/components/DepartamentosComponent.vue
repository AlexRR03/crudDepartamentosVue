<template>
  <div>
    <h1>Departamentos</h1>
    <img  src="../assets/images/loading.gif" alt="" v-if="status == false">
    <table v-else class="table table-bordered">
        <thead>
            <tr>
                <th>Id departamento</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Mas detalles</th>
                <th>Modificar Departamento</th>
                <th>Eliminar Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="departamento in departamentos" :key="departamento">
                <td>{{departamento.idDepartamento}}</td>
                <td>{{departamento.nombre}}</td>
                <td>{{departamento.localidad}}</td>
                <td>
                    <router-link :to="'/details/'+departamento.idDepartamento+'/'+departamento.nombre+'/'+departamento.localidad">
                        <button class="btn btn-info">Detalles</button>
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/update/'+departamento.idDepartamento">
                        <button class="btn btn-warning">Modificar</button>
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/delete/'+departamento.idDepartamento">
                        <button class="btn btn-danger">Eliminar</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamento from '../services/ServiceDepartamento'
const service = new ServiceDepartamento();
export default {
    name:"DepartamentosComponent",
    data(){
        return{ 
            departamentos:[],
            status : false
        }
    },
    mounted(){
        service.getDepartamentos().then(result=>{
            this.status = true
            this.departamentos= result
        })
    }
}
</script>

<style>

</style>