<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form action="">
                        <div class="form-group">
                            <label for="bookTitle">Titre</label>
                            <input v-model='book.title' type="text" class="form-control" id="bookTitle" placeholder="Titre">
                        </div>

                        <div class="form-group">
                            <label for="bookAuthor">Auteur</label>
                            <input v-model='book.author' type="text" class="form-control" id="bookAuthor" placeholder="Auteur">
                        </div>

                        <div class="form-group">
                            <label for="bookYear">Année</label>
                            <input v-model='book.year' type="number" class="form-control" id="bookYear" placeholder="Année">
                        </div>

                        <div class="form-group">
                            <label for="bookResume">Résumé</label>
                            <textarea v-model='book.resume' class="form-control" id="bookResume" rows="3"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="bookGender">Genre</label>
                            <select v-model='book.genre' class="form-control" name="" id="bookGender">
                                <option value="" disabled>Sélectionnez un genre</option>
                                <option v-for="gender in allGenders" :value="gender.id" :key="gender.id">
                                    {{ gender.label }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="bookCover">URL Couverture</label>
                            <input v-model='book.coverUri' type="text" class="form-control" id="bookCover" placeholder="URL">
                        </div>

                        <div class="form-group">
                            <label for="bookEbook">Disponible en Ebook</label>
                            <input type="text" class="form-control" id="bookEbook">
                        </div>
                    </form>

                    <button type="button" class="btn btn-info" @click='updateBook'>SAVE</button>
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
        name: "AdminBooksNew",
        data:()=>({
            book: {
                title: '',
                author: '',
                year: '',
                resume: '',
                genre: '',
                coverUri: '',
            },
            allGenders: {},
            allBooks: {}
        }),
        methods:{
            async fetchAllGenders(){
                let allGenders = await axios.get(GENDERS_API_ENDPOINT);
                let { data } = allGenders;
                this.allGenders = data;
            },
            async fetchAllBooks(){
                let allBooks = await axios.get(BOOKS_API_ENDPOINT);
                let { data } = allBooks;
                this.allBooks = data;
            },
            async updateBook(){
                let bookId = this.allBooks.length + 1;
                let tryToUpdate = await axios.patch(`${BOOKS_API_ENDPOINT}/${bookId}`, this.book);
                console.log(tryToUpdate);
            }
        },
        async created(){
            await this.fetchAllGenders();
            await this.fetchAllBooks();
        }
    }
</script>

<style scoped>

</style>
