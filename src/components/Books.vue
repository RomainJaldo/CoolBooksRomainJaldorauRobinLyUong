<template>
    <div class="row mt-4">
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    Filters
                </div>
            </div>
        </div>

        <div class="col-md-9">
            <div class="row">
               <div class="col-12">
                   <div class="card">
                      <div class="container py-4">
                          <div class="row">
                              <div class="col-12" v-for="book in allBooks" :key="book.id">
                                  <div class="card">
                                      <div class="card-body d-flex justify-content-between align-items-center">
                                          <div class="d-flex align-items-center">
                                              <img class="book-cover" :src="book.coverUri" alt="Book">
                                              <div class="ml-3">
                                                  <h3>{{ book.title }}</h3>
                                                  <p>{{ book.author }}</p>
                                                  <p>{{ book.year }}</p>
                                              </div>
                                          </div>
                                          <button type="button" class="btn btn-dark btn-sm" @click="goToBookDetails(book.id)">Détail</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    const BOOKS_API_ENDPOINT = 'http://localhost:3000/books';

    export default {
        name: "Books",
        data:()=>({
            allBooks: {}
        }),
        methods:{
            async fetchAllBooks(){
                let allBooks = await axios.get(BOOKS_API_ENDPOINT);
                let { data } = allBooks;
                this.allBooks = data;
            },
            goToBookDetails(id) {
                this.$router.push({ name: 'bookDetails', params: { bookId: id } })
            }
        },
        async created(){
            await this.fetchAllBooks();
        }
    }
</script>

<style scoped>
    .book-cover{
        width: 160px;
        height: auto;
    }
</style>
