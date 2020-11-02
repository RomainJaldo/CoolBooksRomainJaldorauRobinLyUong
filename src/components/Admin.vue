<template>
    <div class="row mt-4">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Books</h2>
                </div>
                <div class="card-body text-center">
                    <div class="mb-2">
                        <router-link class="nav-link" to="/admin/books/new">
                            <button class="btn btn-dark">Ajouter</button>
                        </router-link>
                    </div>
                    <div>
                        <button class="btn btn-info">Editer/Supprimer</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Genders</h2>
                </div>
               <div class="card-body text-center">
                   <button class="btn btn-dark">Ajouter</button>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin",
    }
</script>

<style scoped>

</style>
