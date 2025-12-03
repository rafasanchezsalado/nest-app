<template>
    <br>
    <ion-list mode="ios" lines="none">
        <ion-item>
            <!-- <ion-icon aria-hidden="true" :icon="pencilSharp" slot="end">Edit</ion-icon>
            <ion-icon aria-hidden="true" :icon="trashBin" slot="end">Remove</ion-icon> -->
            <ion-label>Item 1</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Super Mario World</ion-label>
        </ion-item>
    </ion-list>
    <br>

    <FabButtonModal />

</template>

<script lang="ts">
import { IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue';
import { pencilSharp, trashBin } from 'ionicons/icons';
import FabButtonModal from './FabButtonModal.vue';
export default {
    components: {
        IonItem,
        IonLabel,
        IonList,
        IonIcon,
        FabButtonModal
    }, data() {
        return {
            pencilSharp,
            trashBin
        }
    }
}
</script>