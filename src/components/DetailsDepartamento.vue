<template>
  <div>
    <h1>Detalles</h1>
    <ul class="list-group">
        <li class="list-group-item">
           <span style="color:orange">Id: </span>{{$route.params.id}}
        </li>
        <li class="list-group-item">
           <span style="color:blue">Nombre: </span>{{$route.params.nombre}}
        </li>
        <li class="list-group-item">
           <span style="color:green">Localidad: </span>{{$route.params.localidad}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"DetailsDepartamento"
}
</script>

<style>

</style>