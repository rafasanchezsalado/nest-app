<template>
    <div id="checkbox_component" class="checkbox_component">
        <ion-label>Set end date</ion-label>
        <ion-checkbox :value="showEndDate" v-on:click="showEndDate = $event.target.ariaChecked;" />
    </div>
</template>

<script lang="ts">
import { IonCheckbox, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Checkbox",
    data() {
        return {
            showEndDate: false,
        }
    },
    components: {
        IonCheckbox,
        IonLabel
    }
})
</script>

<style scoped>
.checkbox_component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: .5rem;
    padding: .5rem 1rem;
}
</style>