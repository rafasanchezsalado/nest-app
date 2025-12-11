<template>
    <div id="input_component" class="input_component">
        <ion-input type="text" label="Task name" label-placement="stacked"
            placeholder="Enter name for this task"></ion-input>
    </div>
</template>

<script lang="ts">
import { IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Select",
    data() {
        return {
            repetition: '',
        }
    },
    components: {
        IonInput
    }
})
</script>

<style scoped>
.input_component {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: .5rem;
    padding: 0 1rem .5rem 1rem;
}
</style>