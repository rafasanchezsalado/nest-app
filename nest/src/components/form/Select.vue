<template>
    <div id="select_component" class="select_component">
        <ion-select id="select" v-model="repetition" :value="repetition" @ionChange="repetition = $event.detail.value"
            label="Repetition" placeholder="-">
            <ion-select-option value="daily">daily</ion-select-option>
            <ion-select-option value="weekly">weekly</ion-select-option>
            <ion-select-option value="monthly">monthly</ion-select-option>
            <ion-select-option value="yearly">yearly</ion-select-option>
            <ion-select-option value="custom">custom</ion-select-option>
        </ion-select>
    </div>
</template>

<script lang="ts">
import { IonSelect, IonSelectModal, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Select",
    data() {
        return {
            repetition: '',
        }
    },
    components: {
        IonSelect,
        IonSelectModal,
        IonSelectOption
    }
})
</script>

<style scoped>
.select_component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: .5rem;
    padding: .5rem 1rem;
}
</style>