<template>
 <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link bg-gradient"  to="/">Departamentos</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link bg-gradient" to="/create" >Crear Departamento</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Oficios</a
              >

              <ul class="dropdown-menu">
                
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:"MenuDepartamentos"
}
</script>

<style>

</style>