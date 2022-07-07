<template>

<h4>Delete Word</h4>
<form class="form-group">
    <label class="form-label" for="wordslug">Word Slug</label>
    <input v-model="wordslug" class="form-input" placeholder="Word Slug" name="wordslug"/>
    <br/>
    <input @click="deleteWord()" name="submit" type="submit" class="btn btn-error input-group-btn" />
</form>

</template>

<script>

export default {
    name: "DeleteWordComponent",
    emits: ['deleteWord'],
    data () {
        return {
            wordslug: ''
        }
    },
    methods: {
        deleteWord() {
            const payload = this.wordslug;
            this.$emit('deleteWord', payload)
        }
    }
}

</script>