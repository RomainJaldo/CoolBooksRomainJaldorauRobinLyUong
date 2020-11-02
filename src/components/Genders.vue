<template>
    <div class="row mt-4">
        <div class="col-12" v-for="gender in allGenders" :key="gender.id">
            <div class="card">
                <div class="card-body">
                    <i :class="'fas fa-'+gender.icon"></i><span class="ml-2">{{ gender.label }} : {{ getBookGenderLength(gender.id) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    const BOOKS_API_ENDPOINT = 'http://localhost:3000/books';
    const GENDERS_API_ENDPOINT = 'http://localhost:3000/genres';

    export default {
        name: "Genders",
        data:()=>({
            allBooks: {},
            allGenders: {}
        }),
        methods:{
            async fetchAllGenders(){
                let allGenders = await axios.get(GENDERS_API_ENDPOINT);
                let { data } = allGenders;
                this.allGenders = data;
            },
            async getBookGenderLength(genderId) {
                let books = await axios.get(`${BOOKS_API_ENDPOINT}?genre.id=${genderId}`);
                let { data } = books;
                return data.length;
            }
        },
        async created(){
            await this.fetchAllGenders();
        }
    }
</script>

<style scoped>

</style>
