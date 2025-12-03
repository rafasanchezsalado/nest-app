<template>
    <br>
    <!-- <ion-text color="dark">
        <h1>Today</h1>
    </ion-text> -->
    <ion-list mode="ios" lines="none">
        <ion-item>
            <ion-label>Pokémon Yellow</ion-label>
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
    
</template>

<script lang="ts">
import { IonItem, IonLabel, IonList, IonText } from '@ionic/vue';
export default {
    components: {
        IonItem,
        IonLabel,
        IonList,
        IonText
    }
}
</script>