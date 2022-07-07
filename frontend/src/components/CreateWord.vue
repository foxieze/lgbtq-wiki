<template>

<h4>Create Word</h4>
<form class="form-group">
    <label class="form-label" for="word">Word</label>
    <input v-model="word" class="form-input" placeholder="Word" name="word"/>
    <label class="form-label" for="wordslug">Word Slug</label>
    <input v-model="wordslug" class="form-input" placeholder="Word Slug" name="wordslug"/>
    <label class="form-label" for="shortdef">Short Definition</label>
    <input v-model="shortdef" class="form-input" placeholder="Short Definition" name="shortdef"/>
    <label class="form-label" for="longdef">Long Definition</label>
    <textarea v-model="longdef" class="form-input" placeholder="Long Definition" name="longdef" rows="7"></textarea>
    <br/>
    <button @click="createWord()" name="submit" class="btn btn-primary input-group-btn">Create</button>
</form>

</template>

<script>

export default {
    name: "CreateWordComponent",
    emits: ['createWord'],
    data ()  {
        return {
            word: '',
            wordslug: '',
            shortdef: '',
            longdef: ''
        }
    },
    methods: {
        createWord() {
            const payload = {
                word: this.word,
                wordslug: this.wordslug,
                shortdef: this.shortdef,
                longdef: this.longdef
            }
            this.$emit('createWord', payload)
        }
    }
}

</script>