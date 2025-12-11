<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button id="open-modal" expand="block">
            <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <!-- <ion-header>
        <ion-toolbar>
            <ion-title>Inline Modal</ion-title>
        </ion-toolbar>
    </ion-header> -->

    <ion-content class="ion-padding">

        <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button @click="cancel()">Cancel</ion-button>
                    </ion-buttons>
                    <ion-title class="ion-text-center">Add task</ion-title>
                    <ion-buttons slot="end">
                        <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <!-- <ion-item>
                    <ion-input label="Enter your name" label-placement="stacked" ref="input" type="text"
                        placeholder="Your name"></ion-input>
                </ion-item> -->
                <TaskCreationView />
            </ion-content>
        </ion-modal>
    </ion-content>
</template>

<script lang="ts">
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/vue';
import { OverlayEventDetail } from '@ionic/core/components';
import { ref } from 'vue';
import { add } from 'ionicons/icons';
import TaskCreationView from './TaskCreationView.vue';

const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');

const modal = ref();
const input = ref();

const cancel = () => modal.value.$el.dismiss(null, 'cancel');

const confirm = () => {
    const name = input.value.$el.value;
    modal.value.$el.dismiss(name, 'confirm');
};

const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
    if (event.detail.role === 'confirm') {
        message.value = `Hello, ${event.detail.data}!`;
    }
};

export default {
    components: {
        IonButtons,
        IonButton,
        IonModal,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonItem,
        IonInput,
        IonFab,
        IonFabButton,
        IonIcon,
        TaskCreationView
    },
    setup() {
        return {
            message,
            modal,
            input,
            cancel,
            confirm,
            onWillDismiss,
            add
        };
    }
};
</script>