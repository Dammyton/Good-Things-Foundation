<template>
 <div class="mb-mainnav">
  <b-navbar toggleable="lg" type="dark" variant="white" class="pb-0 hr">
         <b-nav-form>
             <b-input-group class="mt-3">
                <template #prepend>
                  <b-input-group-text><strong class="text-dark" variant="white"><b-icon icon="search"></b-icon></strong></b-input-group-text>
                </template>
                <b-form-input class="search" placeholder="Search"></b-form-input>
              </b-input-group>
        </b-nav-form>

    <b-collapse is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-button size="sm" class="my-2 my-sm-0 btn-teal border-0" variant="white" type="submit">Learn</b-button>
          <b-button size="sm" class="my-2 my-sm-0 border-0" variant="danger" type="submit">Donate</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>


<style scoped>
.input-group-text {
  padding-right: 0.5rem;
  background-color: #fff !important;
  border-right: 0 !important;
}
.search{
  border-left: 0 !important;
}
.btn-teal{
  border-bottom: 2px solid #4caf50 !important;
}
.hr {
    border-bottom: 2px solid #ddd;
}
</style>
