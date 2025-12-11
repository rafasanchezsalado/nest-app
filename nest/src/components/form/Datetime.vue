<template>
    <div id="datetime_component" class="datetime_component">
        <ion-label>{{ label }}</ion-label>
        <ion-datetime-button datetime="datetime" type="undefined"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="datetime"></ion-datetime>
        </ion-modal>
    </div>
</template>

<script lang="ts">
import { IonDatetime, IonDatetimeButton, IonLabel, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Datetime",
    props: {
        label: {
            type: String,
            default: 'Datetime'
        }
    },
    data() {
        return {
            repetition: '',
        }
    },
    components: {
        IonDatetime,
        IonDatetimeButton,
        IonLabel,
        IonModal
    }
})
</script>

<style scoped>
.datetime_component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: .5rem;
    padding: .5rem 1rem;
}
</style>