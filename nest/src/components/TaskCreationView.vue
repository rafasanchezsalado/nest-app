<template>
    <ion-list mode="ios" lines="full" :inset="true">
        <ion-item>
            <ion-input type="text" label="Task name" label-placement="floating"
                placeholder="Enter name for this task"></ion-input>
        </ion-item>

        <ion-item>
            <ion-input type="text" label="Task description" label-placement="floating"
                placeholder="Enter description for this task"></ion-input>
        </ion-item>

        <ion-item>
            <ion-select id="select" v-model="repetition" :value="repetition"
                @ionChange="repetition = $event.detail.value" label="Repetition" placeholder="-">
                <ion-select-option value="daily">daily</ion-select-option>
                <ion-select-option value="weekly">weekly</ion-select-option>
                <ion-select-option value="monthly">monthly</ion-select-option>
                <ion-select-option value="yearly">yearly</ion-select-option>
                <ion-select-option value="custom">custom</ion-select-option>
            </ion-select>
        </ion-item>

        <ion-item>
            <ion-checkbox :value="showEndDate" v-on:click="showEndDate = $event.target.ariaChecked;">Set end
                date</ion-checkbox>
        </ion-item>

        <ion-item>
            <!-- <ion-item v-if="repetition === 'custom'"></ion-item> -->
            <ion-label>Start date</ion-label>
            <ion-datetime-button datetime="datetime"></ion-datetime-button>
            <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetime"></ion-datetime>
            </ion-modal>
        </ion-item>

        <!-- <ion-item> -->
        <ion-item v-if="showEndDate === 'true'">
            <ion-label>End date</ion-label>
            <ion-datetime-button datetime="datetime"></ion-datetime-button>
            <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetime"></ion-datetime>
            </ion-modal>
        </ion-item>

        <ion-item>
            <ion-label>Priority</ion-label>
            <ion-range aria-label="Priority" :pin="true" :ticks="true" :snaps="true" :min="1" :max="3"></ion-range>
        </ion-item>

        <!-- <ion-item> -->
        <div id="management_actions" class="management_actions">
            <ion-button fill="outline">Discard</ion-button>
            <ion-button fill="solid">Save</ion-button>
        </div>
        <!-- </ion-item> -->
    </ion-list>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonDatetime, IonDatetimeButton, IonModal, IonRange, IonLabel, IonButton, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    data() {
        return {
            name: '',
            description: '',
            repetition: '',
            showEndDate: 'false',
            stardDate: '',
            endDate: '',
            priority: 1
        }
    },
    components: {
        IonInput,
        IonItem,
        IonList,
        IonDatetime,
        IonDatetimeButton,
        IonModal,
        IonRange,
        IonLabel,
        IonButton,
        IonCheckbox,
        IonSelect,
        IonSelectOption
    }
}
</script>

<style lang="css" scoped>
.button {
    /* margin: 1rem; */
}

.management_actions {
    display: grid;
    grid-template-columns: auto auto;
    /* gap: .5rem; */
}
</style>