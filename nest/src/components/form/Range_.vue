<template>
    <div id="range_component" class="range_component">
        <ion-label>Priority</ion-label>
        <ion-range aria-label="Priority" :pin="true" :ticks="true" :snaps="true" :min="1" :max="3"></ion-range>
    </div>
</template>

<script lang="ts">
import { IonLabel, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Range",
    data() {
        return {
            repetition: '',
        }
    },
    components: {
        IonRange,
        IonLabel
    }
});
</script>

<style scoped>
.range_component {
    display: block;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: .5rem;
    padding: 1rem 1rem .5rem 1rem;
}
</style>