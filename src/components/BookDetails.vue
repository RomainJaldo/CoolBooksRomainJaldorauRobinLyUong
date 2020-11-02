<template>
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="book-cover" :src="book.coverUri" alt="Book">
                        </div>
                        <div class="col-md-9">
                            <div class="bg-dark rounded p-3 text-white mb-4 d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="px-2">{{ book.title }}</span>
                                    <span class="px-2">{{ book.author }}</span>
                                    <span class="px-2">{{ book.year }}</span>
                                </div>
                                <div v-if="book.ebooks" class="p-1 bg-danger rounded">
                                    Ebooks
                                </div>
                            </div>

                            <p>{{ book.resume }}</p>
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
        name: "BooksDetails",
        data:()=>({
            book: {}
        }),
        methods:{
            async fetchBook(){
                let bookId = this.$route.params.bookId;
                let oneBook = await axios.get(`${BOOKS_API_ENDPOINT}?id=${bookId}`);
                let { data } = oneBook;
                this.book = data[0];
            },
        },
        async created(){
            await this.fetchBook();
            console.log(this.book)
        }
    }
</script>

<style scoped>
    .book-cover{
        width: 250px;
        height: auto;
    }
</style>
