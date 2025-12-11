<template>
    <br>
    <!-- <ion-text color="dark">
        <h1>Today</h1>
    </ion-text> -->
    <ion-list mode="ios" lines="none" class="item_list ">
        <ion-item>
            <ion-text>Pokémon Yellow</ion-text>
        </ion-item>
        <ion-item>
            <ion-text>Mega Man X</ion-text>
        </ion-item>
        <ion-item>
            <ion-text>The Legend of Zelda</ion-text>
        </ion-item>
        <ion-item>
            <ion-text>Pac-Man</ion-text>
        </ion-item>
        <ion-item>
            <ion-text>Super Mario World</ion-text>
        </ion-item>
    </ion-list>
    <br>

</template>

<script lang="ts">
import { IonItem, IonList, IonText } from '@ionic/vue';
export default {
    components: {
        IonItem,
        IonList,
        IonText
    }
}
</script>

<style scoped></style>